---
id: android11
title: Navegación - parte 1
---

Vamos a remotar el proyecto de la sección de `Fragments` para esta sección e implementaremos lo siguiente:

* Crear un **navigation graph** para nuestros fragmentos usando la libreria de navegación y el editor de navegación.

* Implementar un **Up button** para que podamos navegar hacia atrás.

* Agregar navegación usando un **options menu**.

## Agregar navigation components

### Agregar dependencias

**Navigation components** es una libreria que nos permite manejar navegación compleja y animaciones de transición.

Se debe agregar en nuestro archivo gradle, abrimos Gradle scripts y doble clic en **build.gradle (project:)** y agregamos lo siguiente dentro de `buildScripts {...}`

```
ext {
    navigationVersion = "2.3.0"
}
```

Luego en el archivo **build.gradle (module: app)** agregamos lo siguiente dentro de `dependencies {...}`:

```
implementation "androidx.navigation:navigation-fragment-ktx:$navigationVersion"
implementation "androidx.navigation:navigation-ui-ktx:$navigationVersion"
```

### Agregar navigation graph

* Nos colocamos sobre el folder `res`, clic derecho, seleccionamos **new > Android Resource File**.

* Seleccionar **Navigation** como `Resource Type`.

* El nombre del archivo debe ser **navigation**.

* El panel de **Chose qualifiers** debe estar vacio.

* Clic en **OK**.

* Abrimos el archivo `res > navigation >  navigation.xml`, hasta el momento está vacio.

### Agregar NavHostFragment

Un **navigation host fragment** actua como un host (anfitrión, propietario, padre) en el navigation graph. Usualmente se nombra `NavHostFragment`.

Cuando el usuario se mueve entre pantallas definidas en el `navigation graph`, el navigation host cambia los fragmentos según sea necesario. Tambien se ocupa de manejar la funcionalidad y fragmentos en la pila hacia atrás.

Para definir el `NavHostFragment` nos vamos a nuestro `activity_main.xml` y lo agregamos de la siguiente forma:

```xml
<fragment
  android:id="@+id/mainNavHostFragment"
  android:name="androidx.navigation.fragment.NavHostFragment"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  app:navGraph="@navigation/navigation"
  app:defaultNavHost="true" />
```

1. Asignamos un ID para el fragment: `mainNavHostFragment`

2. Se define el namespace: `androidx.navigation.fragment.NavHostFragment`

3. Se especifica el navigation graph que creamos anteriormente: `@navigation/navigation`

4. Se especifica si es host por defecto `app:defaultNavHost="true"`. Ahora que es host por defecto se encarga de manejar el botón hacia atrás del sistema.

## Agregar fragmentos

Para realizar un ejercicio de navegación vamos a crear 3 fragmentos con los nombres:

* FirstFragment
* SecondFragment
* ThirdFragment

### FirstFragment

1. En **fragment_first.xml** actualizamos el layout de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <LinearLayout
        android:padding="20dp"
        android:orientation="vertical"
        android:layout_height="match_parent"
        android:layout_width="match_parent">

        <TextView
            android:id="@+id/title_text"
            android:text="Primer fragmento"
            android:textSize="20dp"
            android:textStyle="bold"
            android:textAlignment="center"
            android:padding="20dp"
            android:layout_width="match_parent"
            android:layout_height="wrap_content">

        </TextView>

        <Button
            android:id="@+id/navigate_button"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="16dp"
            android:textSize="20dp"
            android:text="Ir a fragmento 2" />

    </LinearLayout>

</LinearLayout>
```

2. En la clase `FirstFragment` vamos a actualizarla de la siguiente forma:

```kotlin
class FirstFragment : Fragment() {

    lateinit var navigateButton: Button

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        var view = inflater.inflate(R.layout.fragment_first, container, false)

        navigateButton = view.findViewById(R.id.navigate_button)

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        navigateButton.setOnClickListener {

        }
    }
}

```

### SecondFragment

El un segundo fragmento **fragment_second** definimos el layout de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <LinearLayout
        android:padding="20dp"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">

        <TextView
            android:id="@+id/second_fragment_text"
            android:textAlignment="center"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="20dp"
            android:textSize="20dp"
            android:textStyle="bold"
            android:text="Segundo fragmento" />

        <Button
            android:id="@+id/navigate_second_button"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="20dp"
            android:textSize="20dp"
            android:text="Ir a fragmento 3" />
    </LinearLayout>

</LinearLayout>
```

En la clase del segundo fragmento `SecondFragment` dejamos nuestro código de la siguiente forma (despues de los imports):

```kotlin
class SecondFragment : Fragment() {

    lateinit var navigateButton: Button

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        var view = inflater.inflate(R.layout.fragment_second, container, false)

        navigateButton = view.findViewById(R.id.navigate_second_button)

        navigateButton.setOnClickListener {

        }

        return view
    }
}
```

### ThirdFragment

En el tercer fragmento **fragment_third** actualizamos el layout de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:padding="20dp"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".ThirdFragment">

    <TextView
        android:id="@+id/third_fragment_text"
        android:textAlignment="center"
        android:textSize="20dp"
        android:textStyle="bold"
        android:padding="20dp"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Tercer fragmento" />

    <Button
        android:id="@+id/back_button"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:padding="20dp"
        android:textSize="20dp"
        android:text="Ir hacia atrás" />

</LinearLayout>
```

En la clase `ThirdFragment` dejamos nuestro codigo de la siguiente forma:

```kotlin
class ThirdFragment : Fragment() {

    lateinit var navigateButton: Button

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        var view = inflater.inflate(R.layout.fragment_third, container, false)

        navigateButton = view.findViewById(R.id.back_button)

        navigateButton.setOnClickListener {

        }

        return view
    }
}
```

> 💡 **IMPORTANTE:** Si el compilador marca errores, agregar los **imports** necesarios.
