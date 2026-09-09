import{a as e,c as t,d as n,f as r,i,l as a,m as o,o as s,p as c,s as l,t as u,u as d}from"./studio-store-BEJCMTGm.js";import{a as f,d as p,f as m,n as h,r as g,t as _}from"./index-Btnhx35E.js";var v=h(`code-xml`,[[`path`,{d:`m18 16 4-4-4-4`,key:`1inbqp`}],[`path`,{d:`m6 8-4 4 4 4`,key:`15zrgr`}],[`path`,{d:`m14.5 4-5 16`,key:`e7oirm`}]]),y=h(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),b=h(`download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),x=h(`loader-circle`,[[`path`,{d:`M21 12a9 9 0 1 1-6.219-8.56`,key:`13zald`}]]),S=h(`message-square`,[[`path`,{d:`M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`,key:`1lielz`}]]),C=m(p(),1);function w(e){return`"${e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`).replace(/\$/g,`\\$`).replace(/\n/g,` `)}"`}function T(e){return{home:`Icons.Outlined.Home`,search:`Icons.Outlined.Search`,settings:`Icons.Outlined.Settings`,person:`Icons.Outlined.Person`,favorite:`Icons.Outlined.FavoriteBorder`,add:`Icons.Outlined.Add`,check:`Icons.Outlined.Check`,star:`Icons.Outlined.StarBorder`,bolt:`Icons.Outlined.Bolt`,leaf:`Icons.Outlined.Park`,book:`Icons.Outlined.MenuBook`,fitness:`Icons.Outlined.FitnessCenter`,restaurant:`Icons.Outlined.Restaurant`,wallet:`Icons.Outlined.AccountBalanceWallet`,calendar:`Icons.Outlined.CalendarMonth`,notifications:`Icons.Outlined.Notifications`,chart:`Icons.Outlined.BarChart`,timer:`Icons.Outlined.Timer`,map:`Icons.Outlined.Map`,camera:`Icons.Outlined.PhotoCamera`,music:`Icons.Outlined.MusicNote`,water:`Icons.Outlined.WaterDrop`,moon:`Icons.Outlined.DarkMode`,sun:`Icons.Outlined.LightMode`,edit:`Icons.Outlined.Edit`,delete:`Icons.Outlined.Delete`,share:`Icons.Outlined.Share`,back:`Icons.Outlined.ArrowBack`,more:`Icons.Outlined.MoreHoriz`}[e]??`Icons.Outlined.Info`}function E(e,t){switch(e.type){case`hero`:return`
            HeroBlock(
                kicker = ${e.kicker?w(e.kicker):`null`},
                title = ${w(e.title)},
                subtitle = ${e.subtitle?w(e.subtitle):`null`}
            )`;case`search`:return`
            SearchBlock(placeholder = ${w(e.placeholder)})`;case`chips`:return`
            ChipsBlock(items = listOf(${e.items.map(w).join(`, `)}), selected = ${e.selected??0})`;case`statRow`:return`
            StatRowBlock(stats = listOf(${e.stats.map(e=>`Stat(${w(e.label)}, ${w(e.value)})`).join(`, `)}))`;case`progress`:return`
            ProgressBlock(label = ${w(e.label)}, value = ${e.value}f, caption = ${e.caption?w(e.caption):`null`})`;case`section`:return`
            SectionBlock(title = ${w(e.title)}, action = ${e.action?w(e.action):`null`})`;case`card`:return`
            CardBlock(
                title = ${w(e.title)},
                body = ${e.body?w(e.body):`null`},
                meta = ${e.meta?w(e.meta):`null`},
                icon = ${e.icon?T(e.icon):`null`},
                accent = ${e.tone===`accent`}
            )`;case`list`:return`
            ListBlock(items = listOf(${e.items.map(e=>`RowItem(${w(e.title)}, ${e.subtitle?w(e.subtitle):`null`}, ${e.meta?w(e.meta):`null`}, ${e.icon?T(e.icon):`null`}, ${w(e.trailing??`chevron`)}, ${e.value?w(e.value):`null`}, ${e.on===!0})`).join(`, `)}))`;case`toggle`:return`
            ToggleBlock(label = ${w(e.label)}, description = ${e.description?w(e.description):`null`}, initial = ${e.on})`;case`field`:return`
            FieldBlock(label = ${w(e.label)}, placeholder = ${w(e.placeholder??``)}, multiline = ${!!e.multiline})`;case`button`:return`
            ButtonBlock(label = ${w(e.label)}, variant = ${w(e.variant??`filled`)})`;case`quote`:return`
            QuoteBlock(text = ${w(e.text)}, attribution = ${e.attribution?w(e.attribution):`null`})`;default:return`            /* skip ${t} */`}}function D(e){let t=e.fab?`fab = { FloatingActionButton(onClick = {}) { Icon(${T(e.fab.icon)}, contentDescription = ${w(e.fab.label??`Add`)}) } }`:`fab = {}`;return`
@Composable
fun ${a(e.id)}Screen() {
    Scaffold(
        containerColor = MaterialTheme.colorScheme.surface,
        ${t}
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 20.dp, vertical = 8.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
${e.blocks.map((e,t)=>E(e,t)).join(`
`)}
            Spacer(Modifier.height(24.dp))
        }
    }
}`}function O(e){let t=n(e.theme.seed,e.theme.mode),r=a(e.name),i=e.packageName,o=i.replace(/\./g,`/`),s=e.theme.mode===`dark`,c=r,l=t.primary,u=`pluginManagement {
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
rootProject.name = ${w(r)}
include(":app")
`,f=`plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
}

android {
    namespace = ${w(i)}
    compileSdk = 35

    defaultConfig {
        applicationId = ${w(i)}
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
`,p=`<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.${r}">
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
`,m=`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">${e.name.replace(/&/g,`&`)}</string>
</resources>
`,h=`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="launcher_background">${l}</color>
</resources>
`,g=`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="Theme.${r}" parent="android:Theme.Material.Light.NoActionBar" />
</resources>
`,_=`<?xml version="1.0" encoding="utf-8"?>
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
        android:fillColor="${s?`#FF101311`:l}"
        android:pathData="M54,40l9,9 15,0 0,10 -15,0 -9,9 -9,-9 -15,0 0,-10 15,0z" />
</vector>
`,v=`<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/launcher_background" />
    <foreground android:drawable="@drawable/ic_launcher_foreground" />
</adaptive-icon>
`,y=`package ${i}.ui.theme

import androidx.compose.ui.graphics.Color

val Primary = Color(${d(t.primary)})
val OnPrimary = Color(${d(t.onPrimary)})
val PrimaryContainer = Color(${d(t.primaryContainer)})
val OnPrimaryContainer = Color(${d(t.onPrimaryContainer)})
val SecondaryContainer = Color(${d(t.secondaryContainer)})
val OnSecondaryContainer = Color(${d(t.onSecondaryContainer)})
val Surface = Color(${d(t.surface)})
val SurfaceContainer = Color(${d(t.surfaceContainer)})
val OnSurface = Color(${d(t.onSurface)})
val OnSurfaceVariant = Color(${d(t.onSurfaceVariant)})
val Outline = Color(${d(t.outline)})
`,b=`package ${i}.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

private val Scheme = ${s?`darkColorScheme`:`lightColorScheme`}(
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
fun ${r}Theme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = Scheme, content = content)
}
`,x=`package ${i}.ui.theme

import androidx.compose.material3.Typography

val Typography = Typography()
`,S=`package ${i}

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import ${i}.ui.theme.${r}Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ${r}Theme { ${r}App() }
        }
    }
}
`,C=`package ${i}

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
fun ${r}App() {
    val dests = listOf(
${e.nav.map((t,n)=>`    NavDest(${w(t.id)}, ${w(t.label)}, ${T(t.icon)}, { ${a(e.screens[n]?.id??t.id)}Screen() })`).join(`,
`)}
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

${e.screens.map(D).join(`
`)}

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
`,E=`# ${e.name}

${e.tagline}

Android app generated by Forge. Jetpack Compose · Material 3.

## Make an APK

1. Open the project in Android Studio and press **Run**, or build from the terminal with \`gradle assembleDebug\`.
2. Find the debug APK at \`app/build/outputs/apk/debug/app-debug.apk\`.
3. If you push this folder to GitHub, \`.github/workflows/android-ci.yml\` will also build and upload the APK for you.

## Run it

1. Install [Android Studio](https://developer.android.com/studio) (Ladybug or newer).
2. Unzip this folder and choose **Open**.
3. Let Gradle sync, then press **Run** on an emulator or a device.

Package: \`${i}\`

Theme seed: \`${e.theme.seed}\` (${e.theme.mode})

Screens: ${e.nav.map(e=>e.label).join(` · `)}
`;return[{path:`${c}/README.md`,contents:E},{path:`${c}/.gitignore`,contents:`*.iml
.gradle
/local.properties
/.idea
.DS_Store
/build
/app/build
/captures
`},{path:`${c}/.github/workflows/android-ci.yml`,contents:`name: Android APK

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
`},{path:`${c}/settings.gradle.kts`,contents:u},{path:`${c}/build.gradle.kts`,contents:`plugins {
    id("com.android.application") version "8.7.2" apply false
    id("org.jetbrains.kotlin.android") version "2.0.21" apply false
    id("org.jetbrains.kotlin.plugin.compose") version "2.0.21" apply false
}
`},{path:`${c}/gradle.properties`,contents:`org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
android.useAndroidX=true
kotlin.code.style=official
android.nonTransitiveRClass=true
`},{path:`${c}/app/build.gradle.kts`,contents:f},{path:`${c}/app/src/main/AndroidManifest.xml`,contents:p},{path:`${c}/app/src/main/res/values/strings.xml`,contents:m},{path:`${c}/app/src/main/res/values/colors.xml`,contents:h},{path:`${c}/app/src/main/res/values/themes.xml`,contents:g},{path:`${c}/app/src/main/res/drawable/ic_launcher_foreground.xml`,contents:_},{path:`${c}/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml`,contents:v},{path:`${c}/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml`,contents:v},{path:`${c}/app/src/main/java/${o}/MainActivity.kt`,contents:S},{path:`${c}/app/src/main/java/${o}/${r}App.kt`,contents:C},{path:`${c}/app/src/main/java/${o}/ui/theme/Color.kt`,contents:y},{path:`${c}/app/src/main/java/${o}/ui/theme/Theme.kt`,contents:b},{path:`${c}/app/src/main/java/${o}/ui/theme/Type.kt`,contents:x}]}var k=(()=>{let e=new Uint32Array(256);for(let t=0;t<256;t++){let n=t;for(let e=0;e<8;e++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n>>>0}return e})();function A(e){let t=4294967295;for(let n=0;n<e.length;n++)t=k[(t^e[n])&255]^t>>>8;return(t^4294967295)>>>0}function j(e){return{time:e.getHours()<<11|e.getMinutes()<<5|Math.floor(e.getSeconds()/2),date:e.getFullYear()-1980<<9|e.getMonth()+1<<5|e.getDate()}}function M(e){let t=new TextEncoder,n=j(new Date),r=[],i=[],a=0;for(let o of e){let e=t.encode(o.path.replace(/\\/g,`/`)),s=t.encode(o.contents),c=A(s),l=new Uint8Array(30+e.length+s.length),u=new DataView(l.buffer);u.setUint32(0,67324752,!0),u.setUint16(4,20,!0),u.setUint16(6,2048,!0),u.setUint16(8,0,!0),u.setUint16(10,n.time,!0),u.setUint16(12,n.date,!0),u.setUint32(14,c,!0),u.setUint32(18,s.length,!0),u.setUint32(22,s.length,!0),u.setUint16(26,e.length,!0),u.setUint16(28,0,!0),l.set(e,30),l.set(s,30+e.length),r.push(l);let d=new Uint8Array(46+e.length),f=new DataView(d.buffer);f.setUint32(0,33639248,!0),f.setUint16(4,20,!0),f.setUint16(6,20,!0),f.setUint16(8,2048,!0),f.setUint16(10,0,!0),f.setUint16(12,n.time,!0),f.setUint16(14,n.date,!0),f.setUint32(16,c,!0),f.setUint32(20,s.length,!0),f.setUint32(24,s.length,!0),f.setUint16(28,e.length,!0),f.setUint16(30,0,!0),f.setUint16(32,0,!0),f.setUint16(34,0,!0),f.setUint16(36,0,!0),f.setUint32(38,0,!0),f.setUint32(42,a,!0),d.set(e,46),i.push(d),a+=l.length}let o=i.reduce((e,t)=>e+t.length,0),s=new Uint8Array(22),c=new DataView(s.buffer);c.setUint32(0,101010256,!0),c.setUint16(4,0,!0),c.setUint16(6,0,!0),c.setUint16(8,e.length,!0),c.setUint16(10,e.length,!0),c.setUint32(12,o,!0),c.setUint32(16,a,!0),c.setUint16(20,0,!0);let l=[];for(let e of[...r,...i,s])l.push(e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength));return new Blob(l,{type:`application/zip`})}function N(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),1500)}var P=f();function F(){let e=u(e=>e.generateFromPrompt),t=u(e=>e.loadTemplate);(0,C.useEffect)(()=>{let n=sessionStorage.getItem(`forge:pendingTemplate`),r=sessionStorage.getItem(`forge:pendingPrompt`);if(n){sessionStorage.removeItem(`forge:pendingTemplate`),sessionStorage.removeItem(`forge:pendingPrompt`),t(n);return}r&&(sessionStorage.removeItem(`forge:pendingPrompt`),e(r))},[e,t])}function I(){let n=u(e=>e.project),r=u(e=>e.generating),a=u(e=>e.error),o=u(e=>e.refine),s=u(e=>e.generateFromPrompt),[c,l]=(0,C.useState)(``),d=(0,C.useRef)(null);(0,C.useEffect)(()=>{d.current?.scrollIntoView({block:`end`})},[n?.messages.length,r,a]);async function f(){let e=c.trim();e&&!r&&(l(``),n&&n.spec.packageName!==`com.forge.draft`?await o(e):await s(e))}return(0,P.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,children:[(0,P.jsx)(`div`,{className:`min-h-0 flex-1 overflow-y-auto`,children:(0,P.jsxs)(`div`,{className:`flex flex-col gap-4 p-4`,children:[(n?.messages??[]).map(e=>(0,P.jsxs)(`div`,{className:t(`max-w-[92%] text-sm leading-relaxed`,e.role===`user`?`self-end`:`self-start`),children:[(0,P.jsx)(`p`,{className:`mb-1 text-[10px] font-medium tracking-wider text-subtle uppercase`,children:e.role===`user`?`You`:`Forge`}),(0,P.jsx)(`div`,{className:t(`rounded-lg px-3.5 py-2.5`,e.role===`user`?`bg-accent text-accent-fg`:`bg-elevated text-fg shadow-[var(--shadow-border)]`),children:e.text})]},e.id)),r?(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-muted`,children:[(0,P.jsx)(x,{className:`size-3.5 animate-spin`}),`Designing screens…`]}):null,a?(0,P.jsx)(`p`,{className:`text-sm text-danger`,children:a}):null,(0,P.jsx)(`div`,{ref:d})]})}),(0,P.jsxs)(`form`,{className:`border-t border-border p-3`,onSubmit:e=>{e.preventDefault(),f()},children:[(0,P.jsx)(i,{value:c,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),f())},placeholder:n?`Add a calendar tab, make it darker…`:`Describe the Android app you want…`,className:`min-h-20 resize-none text-sm`,maxLength:1500,disabled:r}),(0,P.jsx)(`div`,{className:`mt-2 flex justify-end`,children:(0,P.jsx)(e,{type:`submit`,size:`sm`,disabled:!c.trim()||r,children:n?`Update`:`Build`})})]})]})}function L(){let e=u(e=>e.project?.spec),n=u(e=>e.activeFile),r=u(e=>e.setActiveFile),[i,a]=(0,C.useState)(!1),o=(0,C.useMemo)(()=>e?O(e):[],[e]),s=o.find(e=>e.path===n)??o[0];return(0,C.useEffect)(()=>{!n&&o[0]&&r(o[0].path)},[n,o,r]),!e||o.length===0?(0,P.jsx)(`p`,{className:`p-4 text-sm text-muted`,children:`Build an app to see the Android project.`}):(0,P.jsxs)(`div`,{className:`flex h-full min-h-0`,children:[(0,P.jsx)(`div`,{className:`w-44 shrink-0 overflow-y-auto border-r border-border`,children:(0,P.jsx)(`ul`,{className:`p-2`,children:o.map(e=>{let n=e.path.split(`/`).slice(1).join(`/`)||e.path,i=s?.path===e.path;return(0,P.jsx)(`li`,{children:(0,P.jsx)(`button`,{type:`button`,onClick:()=>r(e.path),className:t(`mb-0.5 w-full truncate rounded-md px-2 py-1.5 text-left font-mono text-[11px]`,i?`bg-elevated text-fg`:`text-muted hover:text-fg`),children:n})},e.path)})})}),(0,P.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,P.jsxs)(`div`,{className:`flex h-10 shrink-0 items-center justify-between border-b border-border px-3`,children:[(0,P.jsx)(`span`,{className:`truncate font-mono text-[11px] text-muted`,children:s?.path}),(0,P.jsx)(`button`,{type:`button`,className:`flex size-8 items-center justify-center rounded-md text-muted hover:bg-elevated hover:text-fg`,onClick:async()=>{s&&(await navigator.clipboard.writeText(s.contents),a(!0),window.setTimeout(()=>a(!1),1200))},"aria-label":`Copy file`,children:i?(0,P.jsx)(c,{className:`size-3.5`}):(0,P.jsx)(y,{className:`size-3.5`})})]}),(0,P.jsx)(`div`,{className:`min-h-0 flex-1 overflow-auto`,children:(0,P.jsx)(`pre`,{className:`p-4 font-mono text-[11px] leading-relaxed text-muted whitespace-pre-wrap`,children:s?.contents})})]})]})}function R(){F();let n=u(e=>e.project),i=u(e=>e.generating),a=u(e=>e.activeScreenId),c=u(e=>e.setActiveScreen),d=u(e=>e.studioTab),f=u(e=>e.setStudioTab);function p(){n&&(N(M(O(n.spec)),`${n.spec.name.replace(/\s+/g,``)}.zip`),_.success(`APK-ready Android project downloaded`))}let m=n?.spec;return(0,P.jsxs)(`div`,{className:`flex h-dvh flex-col bg-bg text-fg`,children:[(0,P.jsxs)(`header`,{className:`flex h-14 shrink-0 items-center gap-3 border-b border-border px-3 sm:px-4`,children:[(0,P.jsx)(g,{to:`/`,className:`flex size-10 items-center justify-center rounded-md text-muted hover:bg-elevated hover:text-fg`,"aria-label":`Back`,children:(0,P.jsx)(o,{className:`size-4`})}),(0,P.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(`h1`,{className:`truncate font-display text-[15px] font-medium`,children:m&&m.packageName!==`com.forge.draft`?m.name:`New app`}),m&&m.packageName!==`com.forge.draft`?(0,P.jsx)(s,{children:m.theme.mode}):(0,P.jsx)(s,{children:`Draft`})]}),(0,P.jsx)(`p`,{className:`truncate text-[12px] text-subtle`,children:m?.tagline??`Describe an Android app to begin`})]}),(0,P.jsxs)(e,{variant:`secondary`,size:`sm`,onClick:p,disabled:!m||m.packageName===`com.forge.draft`||i,className:`hidden sm:inline-flex`,children:[(0,P.jsx)(b,{className:`size-3.5`}),`Download APK kit`]}),(0,P.jsx)(e,{variant:`secondary`,size:`icon`,onClick:p,disabled:!m||m.packageName===`com.forge.draft`||i,className:`sm:hidden`,"aria-label":`Download APK kit`,children:(0,P.jsx)(b,{className:`size-4`})})]}),(0,P.jsxs)(`div`,{className:`flex min-h-0 flex-1`,children:[(0,P.jsxs)(`aside`,{className:`hidden w-80 shrink-0 border-r border-border lg:flex lg:flex-col`,children:[(0,P.jsx)(`div`,{className:`flex h-10 items-center px-4 text-[11px] font-medium tracking-wider text-subtle uppercase`,children:`Chat`}),(0,P.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,P.jsx)(I,{})})]}),(0,P.jsxs)(`section`,{className:`flex min-w-0 flex-1 flex-col`,children:[(0,P.jsx)(`div`,{className:t(`min-h-0 flex-1`,d===`preview`||d===void 0?`flex`:`hidden lg:flex`),children:(0,P.jsx)(`div`,{className:`flex min-h-0 flex-1 items-center justify-center overflow-auto p-4`,children:m?(0,P.jsx)(l,{spec:m,activeScreenId:a,onScreenChange:c,generating:i&&m.packageName===`com.forge.draft`}):(0,P.jsx)(`p`,{className:`max-w-xs text-center text-sm text-muted`,children:`Describe an app in chat, or go back and pick a starter.`})})}),(0,P.jsx)(`div`,{className:t(`min-h-0 flex-1 lg:hidden`,d===`chat`?`flex flex-col`:`hidden`),children:(0,P.jsx)(I,{})}),(0,P.jsx)(`div`,{className:t(`min-h-0 flex-1`,d===`code`?`flex lg:hidden`:`hidden`),children:(0,P.jsx)(L,{})})]}),(0,P.jsxs)(`aside`,{className:`hidden min-w-0 flex-1 border-l border-border xl:flex xl:max-w-md xl:flex-col 2xl:max-w-lg`,children:[(0,P.jsx)(`div`,{className:`flex h-10 items-center px-4 text-[11px] font-medium tracking-wider text-subtle uppercase`,children:`APK-ready project`}),(0,P.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,P.jsx)(L,{})})]})]}),(0,P.jsx)(`nav`,{className:`flex h-14 shrink-0 border-t border-border lg:hidden`,children:[[`preview`,`Preview`,r],[`chat`,`Chat`,S],[`code`,`Code`,v]].map(([e,n,r])=>(0,P.jsxs)(`button`,{type:`button`,onClick:()=>f(e),className:t(`flex flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium`,d===e?`text-fg`:`text-muted`),children:[(0,P.jsx)(r,{className:`size-4`,strokeWidth:1.75}),n]},e))})]})}var z=R;export{z as component};