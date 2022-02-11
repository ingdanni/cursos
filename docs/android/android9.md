---
id: android9
title: Navegación
---

Se va a remotar el proyecto de la sección de Fragments para esta sección e implementaremos lo siguiente:

* Crear un **navigation graph** para nuestros fragmentos usando la libreria de navegación y el editor de navegación.

* Crear **navigation paths** en la app.

* Agregar navegación usando un **options menu**.

* Implementar un **Up button** para que podamos navegar hacia atrás.

* Agregar un **Navigation drawer**.

## Agregar navigation components

### Agregar dependencias

**Navigation component** es una libreria que nos permite manejar navegación compleja y animaciones de transición.

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

* Seleccionar **Navigation** como Resource Type.

* El nombre del archivo debe ser **navigation**

* El panel de **Chose qualifiers** debe estar vacio.

* Clic en OK.

* Abrimos el archivo res > navigation >  navigation.xml, hasta el momento está vacio.

### Agregar NavHostFragment

Un **navigation host fragment** actua como un host (anfitrión, propietario, padre) en el navigation graph. Usualmente se nombre `NavHostFragment`.

Cuando el usuario se mueve entre pantallas definidas en el navigation graph, el navigation host cambia los fragmentos según sea necesario. Tambien se ocupa de manejar la funcionalidad y fragmentos en la pila hacia atrás.

Para definir el NavHostFragment nos vamos a nuestro activity_main.xml y reemplazamos el TitleFragment de la siguiente forma:

```xml
<fragment
  android:id="@+id/mainNavHostFragment"
  android:name="androidx.navigation.fragment.NavHostFragment"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  app:navGraph="@navigation/navigation"
  app:defaultNavHost="true" />
```

1. Asignamos un ID para el fragment: `myNavHostFragment`

2. Se define el namespace: `androidx.navigation.fragment.NavHostFragment`

3. Se especifica el navigation graph que creamos anteriormente: `@navigation/navigation`

4. Se especifica si es host por defecto `app:defaultNavHost="true"`. Ahora que es host por defecto se encarga de manejar el botón hacia atrás del sistema.

## Actualizar fragments

### fragment_title

1. En **fragment_title.xml** actualizamos el layout para agregar un botón de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    tools:context="com.example.fragments.TitleFragment">

    <LinearLayout
        android:orientation="vertical"
        android:layout_height="match_parent"
        android:layout_width="match_parent">

        <TextView
            android:id="@+id/title_text"
            android:text="Fragmento 1"
            android:textAlignment="center"
            android:padding="16dp"
            android:layout_width="match_parent"
            android:layout_height="wrap_content">

        </TextView>

        <Button
            android:id="@+id/navigate_button"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="16dp"
            android:text="Ir a fragmento 2" />

    </LinearLayout>
</layout>
```

### second_fragment

Creamos un segundo fragment que se llame **second_fragment** y definimos el layout de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
    <FrameLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        tools:context=".SecondFragment">

        <TextView
            android:id="@+id/second_fragment_text"
            android:textAlignment="center"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:text="Segundo fragment" />

    </FrameLayout>
</layout>
```

En la clase del segundo fragment `SecondFragment.kt` dejamos nuestro código de la siguiente forma (despues de los imports):

```kotlin
class SecondFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val binding = DataBindingUtil.inflate<FragmentSecondBinding>(inflater,
            R.layout.fragment_second, container, false)
        return binding.root
    }
}

```

> 💡 **IMPORTANTE: Si el compilador marca errores, agregar los imports necesarios.**


## Agregar fragments al navigation graph

1. Abrir navigation.xml, en el editor de navegación, clic en New destination. Una lista de fragments y activities aparece.

2. Seleccionamos fragment_title primeramente.

3. De la misma forma agregamos el SecondFragment.

Si en la vista previa aparece un mensaje "Preview Unavailable", vamos al codigo de navigation.xml y nos aseguramos que nuestro segundo frament tenga la propiedad `tools:layout="@layout/fragment_second"`.

Nos quedara de la siguiente forma:

```xml
<fragment
    android:id="@+id/titleFragment"
    android:name="com.example.fragments.TitleFragment"
    android:label="fragment_title"
    tools:layout="@layout/fragment_title" />

<fragment
    android:id="@+id/secondFragment"
    tools:layout="@layout/fragment_second"
    android:name="com.example.fragments.SecondFragment"
    android:label="SecondFragment" />
```

4. Seleccionamos el titleFragment, aparecera un circulo al lado derecho y arrastramos hacia secondFragment.

5. Seleccionamos la flecha que se agrego entre los dos fragments y observamos el panel de atributos, el ID de la accion debe aparecer como `action_titleFragment_to_secondFragment`

## Agregar click listener al boton

1. En TitleFragment.kt, dentro del método `onCreateView()`, agregamos la siguiente linea antes del return:

```kotlin
binding.navigateButton.setOnClickListener {
  it.findNavController().navigate(R.id.action_titleFragment_to_secondFragment)
}
```

En esta parte debemos asegurarnos que tenemos el siguiente import:

```kotlin
import androidx.navigation.findNavController
```

Ahora corremos la app, al dar tap al botón ir al fragmento 2, el secondFragment se abre.
