import type { AppSpec, Block, IconName, Screen } from "@/lib/spec";
import { hexToArgb, schemeFromSeed } from "@/lib/theme";
import { pascalCase } from "@/lib/utils";
import type { ZipFile } from "@/lib/zip";

function kq(value: string): string {
  return `"${value
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\$/g, "\\$")
    .replace(/\n/g, " ")}"`;
}

function iconConst(name: IconName): string {
  const map: Record<IconName, string> = {
    home: "Icons.Outlined.Home",
    search: "Icons.Outlined.Search",
    settings: "Icons.Outlined.Settings",
    person: "Icons.Outlined.Person",
    favorite: "Icons.Outlined.FavoriteBorder",
    add: "Icons.Outlined.Add",
    check: "Icons.Outlined.Check",
    star: "Icons.Outlined.StarBorder",
    bolt: "Icons.Outlined.Bolt",
    leaf: "Icons.Outlined.Park",
    book: "Icons.Outlined.MenuBook",
    fitness: "Icons.Outlined.FitnessCenter",
    restaurant: "Icons.Outlined.Restaurant",
    wallet: "Icons.Outlined.AccountBalanceWallet",
    calendar: "Icons.Outlined.CalendarMonth",
    notifications: "Icons.Outlined.Notifications",
    chart: "Icons.Outlined.BarChart",
    timer: "Icons.Outlined.Timer",
    map: "Icons.Outlined.Map",
    camera: "Icons.Outlined.PhotoCamera",
    music: "Icons.Outlined.MusicNote",
    water: "Icons.Outlined.WaterDrop",
    moon: "Icons.Outlined.DarkMode",
    sun: "Icons.Outlined.LightMode",
    edit: "Icons.Outlined.Edit",
    delete: "Icons.Outlined.Delete",
    share: "Icons.Outlined.Share",
    back: "Icons.Outlined.ArrowBack",
    more: "Icons.Outlined.MoreHoriz",
  };
  return map[name] ?? "Icons.Outlined.Info";
}

function emitBlock(block: Block, i: number): string {
  switch (block.type) {
    case "hero":
      return `
            HeroBlock(
                kicker = ${block.kicker ? kq(block.kicker) : "null"},
                title = ${kq(block.title)},
                subtitle = ${block.subtitle ? kq(block.subtitle) : "null"}
            )`;
    case "search":
      return `
            SearchBlock(placeholder = ${kq(block.placeholder)})`;
    case "chips":
      return `
            ChipsBlock(items = listOf(${block.items.map(kq).join(", ")}), selected = ${block.selected ?? 0})`;
    case "statRow":
      return `
            StatRowBlock(stats = listOf(${block.stats.map((s) => `Stat(${kq(s.label)}, ${kq(s.value)})`).join(", ")}))`;
    case "progress":
      return `
            ProgressBlock(label = ${kq(block.label)}, value = ${block.value}f, caption = ${block.caption ? kq(block.caption) : "null"})`;
    case "section":
      return `
            SectionBlock(title = ${kq(block.title)}, action = ${block.action ? kq(block.action) : "null"})`;
    case "card":
      return `
            CardBlock(
                title = ${kq(block.title)},
                body = ${block.body ? kq(block.body) : "null"},
                meta = ${block.meta ? kq(block.meta) : "null"},
                icon = ${block.icon ? iconConst(block.icon) : "null"},
                accent = ${block.tone === "accent"}
            )`;
    case "list":
      return `
            ListBlock(items = listOf(${block.items
              .map(
                (it) =>
                  `RowItem(${kq(it.title)}, ${it.subtitle ? kq(it.subtitle) : "null"}, ${it.meta ? kq(it.meta) : "null"}, ${it.icon ? iconConst(it.icon) : "null"}, ${kq(it.trailing ?? "chevron")}, ${it.value ? kq(it.value) : "null"}, ${it.on === true})`,
              )
              .join(", ")}))`;
    case "toggle":
      return `
            ToggleBlock(label = ${kq(block.label)}, description = ${block.description ? kq(block.description) : "null"}, initial = ${block.on})`;
    case "field":
      return `
            FieldBlock(label = ${kq(block.label)}, placeholder = ${kq(block.placeholder ?? "")}, multiline = ${Boolean(block.multiline)})`;
    case "button":
      return `
            ButtonBlock(label = ${kq(block.label)}, variant = ${kq(block.variant ?? "filled")})`;
    case "quote":
      return `
            QuoteBlock(text = ${kq(block.text)}, attribution = ${block.attribution ? kq(block.attribution) : "null"})`;
    default:
      return `            /* skip ${i} */`;
  }
}

function emitScreen(screen: Screen): string {
  const fab = screen.fab
    ? `fab = { FloatingActionButton(onClick = {}) { Icon(${iconConst(screen.fab.icon)}, contentDescription = ${kq(screen.fab.label ?? "Add")}) } }`
    : "fab = {}";
  return `
@Composable
fun ${pascalCase(screen.id)}Screen() {
    Scaffold(
        containerColor = MaterialTheme.colorScheme.surface,
        ${fab}
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 20.dp, vertical = 8.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
${screen.blocks.map((b, i) => emitBlock(b, i)).join("\n")}
            Spacer(Modifier.height(24.dp))
        }
    }
}`;
}

export function buildAndroidProject(spec: AppSpec): ZipFile[] {
  const scheme = schemeFromSeed(spec.theme.seed, spec.theme.mode);
  const appClass = pascalCase(spec.name);
  const pkg = spec.packageName;
  const pkgPath = pkg.replace(/\./g, "/");
  const dark = spec.theme.mode === "dark";
  const root = appClass;
  const launcherBg = scheme.primary;

  const settings = `pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}
rootProject.name = ${kq(appClass)}
include(":app")
`;

  const rootGradle = `plugins {
    id("com.android.application") version "8.7.2" apply false
    id("org.jetbrains.kotlin.android") version "2.0.21" apply false
    id("org.jetbrains.kotlin.plugin.compose") version "2.0.21" apply false
}
`;

  const gradleProps = `org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
android.useAndroidX=true
kotlin.code.style=official
android.nonTransitiveRClass=true
`;

  const appGradle = `plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
}

android {
    namespace = ${kq(pkg)}
    compileSdk = 35

    defaultConfig {
        applicationId = ${kq(pkg)}
        minSdk = 26
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
    buildFeatures { compose = true }
}

dependencies {
    val bom = platform("androidx.compose:compose-bom:2024.12.01")
    implementation(bom)
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.material:material-icons-extended")
    implementation("androidx.activity:activity-compose:1.9.3")
    implementation("androidx.core:core-ktx:1.15.0")
    debugImplementation("androidx.compose.ui:ui-tooling")
}
`;

  const manifest = `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.${appClass}">
        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:windowSoftInputMode="adjustResize">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
`;

  const strings = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">${spec.name.replace(/&/g, "&")}</string>
</resources>
`;

  const colorsXml = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="launcher_background">${launcherBg}</color>
</resources>
`;

  const themesXml = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="Theme.${appClass}" parent="android:Theme.Material.Light.NoActionBar" />
</resources>
`;

  const launcherForeground = `<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="108dp"
    android:height="108dp"
    android:viewportWidth="108"
    android:viewportHeight="108">
    <path
        android:fillColor="#FFFFFFFF"
        android:pathData="M54,16C33,16 16,33 16,54s17,38 38,38 38,-17 38,-38S75,16 54,16z" />
    <path
        android:fillColor="#CCFFFFFF"
        android:pathData="M54,30C40.75,30 30,40.75 30,54s10.75,24 24,24 24,-10.75 24,-24S67.25,30 54,30z" />
    <path
        android:fillColor="${dark ? "#FF101311" : launcherBg}"
        android:pathData="M54,40l9,9 15,0 0,10 -15,0 -9,9 -9,-9 -15,0 0,-10 15,0z" />
</vector>
`;

  const launcherIcon = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/launcher_background" />
    <foreground android:drawable="@drawable/ic_launcher_foreground" />
</adaptive-icon>
`;

  const androidCi = `name: Android APK

on:
  workflow_dispatch:
  push:
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up JDK 21
        uses: actions/setup-java@v4
        with:
          java-version: "21"
          distribution: "temurin"

      - name: Set up Gradle
        uses: gradle/actions/setup-gradle@v4

      - name: Build debug APK
        run: gradle assembleDebug

      - name: Upload APK artifact
        uses: actions/upload-artifact@v4
        with:
          name: debug-apk
          path: app/build/outputs/apk/debug/*.apk
`;

  const colorKt = `package ${pkg}.ui.theme

import androidx.compose.ui.graphics.Color

val Primary = Color(${hexToArgb(scheme.primary)})
val OnPrimary = Color(${hexToArgb(scheme.onPrimary)})
val PrimaryContainer = Color(${hexToArgb(scheme.primaryContainer)})
val OnPrimaryContainer = Color(${hexToArgb(scheme.onPrimaryContainer)})
val SecondaryContainer = Color(${hexToArgb(scheme.secondaryContainer)})
val OnSecondaryContainer = Color(${hexToArgb(scheme.onSecondaryContainer)})
val Surface = Color(${hexToArgb(scheme.surface)})
val SurfaceContainer = Color(${hexToArgb(scheme.surfaceContainer)})
val OnSurface = Color(${hexToArgb(scheme.onSurface)})
val OnSurfaceVariant = Color(${hexToArgb(scheme.onSurfaceVariant)})
val Outline = Color(${hexToArgb(scheme.outline)})
`;

  const themeKt = `package ${pkg}.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

private val Scheme = ${dark ? "darkColorScheme" : "lightColorScheme"}(
    primary = Primary,
    onPrimary = OnPrimary,
    primaryContainer = PrimaryContainer,
    onPrimaryContainer = OnPrimaryContainer,
    secondaryContainer = SecondaryContainer,
    onSecondaryContainer = OnSecondaryContainer,
    surface = Surface,
    surfaceContainer = SurfaceContainer,
    onSurface = OnSurface,
    onSurfaceVariant = OnSurfaceVariant,
    outline = Outline,
)

@Composable
fun ${appClass}Theme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = Scheme, content = content)
}
`;

  const typeKt = `package ${pkg}.ui.theme

import androidx.compose.material3.Typography

val Typography = Typography()
`;

  const mainActivity = `package ${pkg}

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import ${pkg}.ui.theme.${appClass}Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ${appClass}Theme { ${appClass}App() }
        }
    }
}
`;

  const navItems = spec.nav
    .map(
      (n, i) =>
        `    NavDest(${kq(n.id)}, ${kq(n.label)}, ${iconConst(n.icon)}, { ${pascalCase(spec.screens[i]?.id ?? n.id)}Screen() })`,
    )
    .join(",\n");

  const appKt = `package ${pkg}

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AccountBalanceWallet
import androidx.compose.material.icons.outlined.Add
import androidx.compose.material.icons.outlined.ArrowBack
import androidx.compose.material.icons.outlined.BarChart
import androidx.compose.material.icons.outlined.Bolt
import androidx.compose.material.icons.outlined.CalendarMonth
import androidx.compose.material.icons.outlined.Check
import androidx.compose.material.icons.outlined.Info
import androidx.compose.material.icons.outlined.DarkMode
import androidx.compose.material.icons.outlined.Delete
import androidx.compose.material.icons.outlined.Edit
import androidx.compose.material.icons.outlined.FavoriteBorder
import androidx.compose.material.icons.outlined.FitnessCenter
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.LightMode
import androidx.compose.material.icons.outlined.Map
import androidx.compose.material.icons.outlined.MenuBook
import androidx.compose.material.icons.outlined.MoreHoriz
import androidx.compose.material.icons.outlined.MusicNote
import androidx.compose.material.icons.outlined.Notifications
import androidx.compose.material.icons.outlined.Park
import androidx.compose.material.icons.outlined.Person
import androidx.compose.material.icons.outlined.PhotoCamera
import androidx.compose.material.icons.outlined.Restaurant
import androidx.compose.material.icons.outlined.Search
import androidx.compose.material.icons.outlined.Settings
import androidx.compose.material.icons.outlined.Share
import androidx.compose.material.icons.outlined.StarBorder
import androidx.compose.material.icons.outlined.Timer
import androidx.compose.material.icons.outlined.WaterDrop
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.FilterChip
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.Button as M3Button
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

data class NavDest(
    val id: String,
    val label: String,
    val icon: ImageVector,
    val content: @Composable () -> Unit,
)

data class Stat(val label: String, val value: String)
data class RowItem(
    val title: String,
    val subtitle: String?,
    val meta: String?,
    val icon: ImageVector?,
    val trailing: String,
    val value: String?,
    val on: Boolean,
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ${appClass}App() {
    val dests = listOf(
${navItems}
    )
    var selected by remember { mutableIntStateOf(0) }
    Scaffold(
        bottomBar = {
            NavigationBar {
                dests.forEachIndexed { index, dest ->
                    NavigationBarItem(
                        selected = selected == index,
                        onClick = { selected = index },
                        icon = { Icon(dest.icon, contentDescription = dest.label) },
                        label = { Text(dest.label) },
                    )
                }
            }
        }
    ) { padding ->
        Surface(Modifier.fillMaxSize().padding(padding)) {
            dests[selected].content()
        }
    }
}

${spec.screens.map(emitScreen).join("\n")}

@Composable
private fun HeroBlock(kicker: String?, title: String, subtitle: String?) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(28.dp))
            .background(MaterialTheme.colorScheme.primaryContainer)
            .padding(20.dp)
    ) {
        if (kicker != null) {
            Text(kicker, style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.onPrimaryContainer)
            Spacer(Modifier.height(6.dp))
        }
        Text(title, fontSize = 28.sp, fontWeight = FontWeight.Medium, color = MaterialTheme.colorScheme.onPrimaryContainer)
        if (subtitle != null) {
            Spacer(Modifier.height(8.dp))
            Text(subtitle, style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onPrimaryContainer)
        }
    }
}

@Composable
private fun SearchBlock(placeholder: String) {
    var query by remember { mutableStateOf("") }
    BasicTextField(
        value = query,
        onValueChange = { query = it },
        singleLine = true,
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(24.dp))
            .background(MaterialTheme.colorScheme.surfaceContainer)
            .padding(horizontal = 16.dp, vertical = 14.dp),
        decorationBox = { inner ->
            if (query.isEmpty()) Text(placeholder, color = MaterialTheme.colorScheme.onSurfaceVariant)
            inner()
        }
    )
}

@Composable
private fun ChipsBlock(items: List<String>, selected: Int) {
    var current by remember { mutableIntStateOf(selected) }
    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        items.forEachIndexed { index, label ->
            FilterChip(selected = current == index, onClick = { current = index }, label = { Text(label) })
        }
    }
}

@Composable
private fun StatRowBlock(stats: List<Stat>) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(MaterialTheme.colorScheme.surfaceContainer)
            .padding(16.dp),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        stats.forEach { stat ->
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Text(stat.value, fontSize = 22.sp, fontWeight = FontWeight.Medium)
                Text(stat.label, style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
    }
}

@Composable
private fun ProgressBlock(label: String, value: Float, caption: String?) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(MaterialTheme.colorScheme.surfaceContainer)
            .padding(16.dp)
    ) {
        Text(label, style = MaterialTheme.typography.titleMedium)
        Spacer(Modifier.height(10.dp))
        LinearProgressIndicator(progress = { value }, modifier = Modifier.fillMaxWidth().height(8.dp).clip(CircleShape))
        if (caption != null) {
            Spacer(Modifier.height(8.dp))
            Text(caption, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable
private fun SectionBlock(title: String, action: String?) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(title, style = MaterialTheme.typography.titleMedium)
        if (action != null) Text(action, style = MaterialTheme.typography.labelLarge, color = MaterialTheme.colorScheme.primary)
    }
}

@Composable
private fun CardBlock(title: String, body: String?, meta: String?, icon: ImageVector?, accent: Boolean) {
    val bg = if (accent) MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.surfaceContainer
    Column(
        modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp)).background(bg).padding(16.dp)
    ) {
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            if (icon != null) Icon(icon, contentDescription = null, modifier = Modifier.size(18.dp))
            Text(title, style = MaterialTheme.typography.titleMedium)
        }
        if (body != null) {
            Spacer(Modifier.height(8.dp))
            Text(body, style = MaterialTheme.typography.bodyMedium)
        }
        if (meta != null) {
            Spacer(Modifier.height(8.dp))
            Text(meta, style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable
private fun ListBlock(items: List<RowItem>) {
    Column(
        modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp)).background(MaterialTheme.colorScheme.surfaceContainer)
    ) {
        items.forEach { item ->
            Row(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 14.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                if (item.icon != null) {
                    Icon(item.icon, contentDescription = null, modifier = Modifier.size(20.dp).padding(end = 0.dp))
                    Spacer(Modifier.size(12.dp))
                }
                Column(Modifier.weight(1f)) {
                    Text(item.title, style = MaterialTheme.typography.bodyLarge)
                    if (item.subtitle != null) Text(item.subtitle, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                }
                if (item.trailing == "value" && item.value != null) {
                    Text(item.value, style = MaterialTheme.typography.labelLarge)
                }
            }
        }
    }
}

@Composable
private fun ToggleBlock(label: String, description: String?, initial: Boolean) {
    var on by remember { mutableStateOf(initial) }
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(MaterialTheme.colorScheme.surfaceContainer)
            .padding(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Column(Modifier.weight(1f)) {
            Text(label, style = MaterialTheme.typography.bodyLarge)
            if (description != null) Text(description, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
        Switch(checked = on, onCheckedChange = { on = it })
    }
}

@Composable
private fun FieldBlock(label: String, placeholder: String, multiline: Boolean) {
    var value by remember { mutableStateOf("") }
    Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
        Text(label, style = MaterialTheme.typography.labelLarge)
        BasicTextField(
            value = value,
            onValueChange = { value = it },
            singleLine = !multiline,
            modifier = Modifier
                .fillMaxWidth()
                .height(if (multiline) 96.dp else 48.dp)
                .clip(RoundedCornerShape(16.dp))
                .background(MaterialTheme.colorScheme.surfaceContainer)
                .padding(14.dp),
            decorationBox = { inner ->
                if (value.isEmpty()) Text(placeholder, color = MaterialTheme.colorScheme.onSurfaceVariant)
                inner()
            }
        )
    }
}

@Composable
private fun ButtonBlock(label: String, variant: String) {
    when (variant) {
        "tonal" -> FilledTonalButton(onClick = {}, modifier = Modifier.fillMaxWidth()) { Text(label) }
        "outline" -> OutlinedButton(onClick = {}, modifier = Modifier.fillMaxWidth()) { Text(label) }
        else -> M3Button(onClick = {}, modifier = Modifier.fillMaxWidth()) { Text(label) }
    }
}

@Composable
private fun QuoteBlock(text: String, attribution: String?) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(20.dp))
            .background(MaterialTheme.colorScheme.primaryContainer)
            .padding(20.dp)
    ) {
        Text(text, style = MaterialTheme.typography.bodyLarge)
        if (attribution != null) {
            Spacer(Modifier.height(8.dp))
            Text(attribution, style = MaterialTheme.typography.labelMedium, color = MaterialTheme.colorScheme.onPrimaryContainer)
        }
    }
}
`;

  const readme = `# ${spec.name}

${spec.tagline}

Android app generated by Forge. Jetpack Compose · Material 3.

## Make an APK

1. Open the project in Android Studio and press **Run**, or build from the terminal with \`gradle assembleDebug\`.
2. Find the debug APK at \`app/build/outputs/apk/debug/app-debug.apk\`.
3. If you push this folder to GitHub, \`.github/workflows/android-ci.yml\` will also build and upload the APK for you.

## Run it

1. Install [Android Studio](https://developer.android.com/studio) (Ladybug or newer).
2. Unzip this folder and choose **Open**.
3. Let Gradle sync, then press **Run** on an emulator or a device.

Package: \`${pkg}\`

Theme seed: \`${spec.theme.seed}\` (${spec.theme.mode})

Screens: ${spec.nav.map((n) => n.label).join(" · ")}
`;

  const gitignore = `*.iml
.gradle
/local.properties
/.idea
.DS_Store
/build
/app/build
/captures
`;

  return [
    { path: `${root}/README.md`, contents: readme },
    { path: `${root}/.gitignore`, contents: gitignore },
    { path: `${root}/.github/workflows/android-ci.yml`, contents: androidCi },
    { path: `${root}/settings.gradle.kts`, contents: settings },
    { path: `${root}/build.gradle.kts`, contents: rootGradle },
    { path: `${root}/gradle.properties`, contents: gradleProps },
    { path: `${root}/app/build.gradle.kts`, contents: appGradle },
    { path: `${root}/app/src/main/AndroidManifest.xml`, contents: manifest },
    { path: `${root}/app/src/main/res/values/strings.xml`, contents: strings },
    { path: `${root}/app/src/main/res/values/colors.xml`, contents: colorsXml },
    { path: `${root}/app/src/main/res/values/themes.xml`, contents: themesXml },
    { path: `${root}/app/src/main/res/drawable/ic_launcher_foreground.xml`, contents: launcherForeground },
    { path: `${root}/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml`, contents: launcherIcon },
    { path: `${root}/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml`, contents: launcherIcon },
    { path: `${root}/app/src/main/java/${pkgPath}/MainActivity.kt`, contents: mainActivity },
    { path: `${root}/app/src/main/java/${pkgPath}/${appClass}App.kt`, contents: appKt },
    { path: `${root}/app/src/main/java/${pkgPath}/ui/theme/Color.kt`, contents: colorKt },
    { path: `${root}/app/src/main/java/${pkgPath}/ui/theme/Theme.kt`, contents: themeKt },
    { path: `${root}/app/src/main/java/${pkgPath}/ui/theme/Type.kt`, contents: typeKt },
  ];
}
