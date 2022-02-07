# Fragments

## ¿Que son los Fragments?

Un fragment representa una porción de la interfaz de usuario dentro de un Activity. Podemos combinar varios fragmentos en una Activity para construir una interfaz de varios paneles y puedes reutilizar un fragment en diferentes Activities.

Podriamos definirlo como una sección modular de un Activity, como un "sub-activity".

## Caracteristicas

1. Tiene su propio ciclo de vida y recibe sus propios eventos de entrada.

2. Podemos agregar o remover un Fragment mientras el activity se está ejecutando.

3. Un fragment se define en una clase Kotlin.

4. La interfaz se define en un archivo XML.

## Crear un proyecto

* Crear un proyecto en Android Studio llamado Fragments

* Seleccionar Blank Activity

## Data Binding

Anteriormente usamos la función `findViewById()` para crear referencias a las vistas o elementos.

Cada vez que usamos esta función para buscar una vista después de crearla o volver a crearla, el sistema Android atraviesa la jerarquía de vistas en tiempo de ejecución para encontrarla. Cuando la aplicación tiene solo un pocas vistas, esto no es un problema. Sin embargo, las aplicaciones de producción pueden tener docenas de vistas en un diseño, e incluso con el mejor diseño, habrá vistas anidadas.

Una solución es crear un objeto que contenga una referencia a cada vista. Este objeto, llamado objeto Binding, puede ser utilizado por toda la aplicación. Esta técnica se denomina Data Binding (enlace de datos). Una vez que se ha creado un objeto de enlace para la aplicación, se puede acceder a las vistas y otros datos a través del objeto de enlace, sin tener que atravesar la jerarquía de vistas o buscar los datos.

![image](./images/40.png)

### Ventajas

* El código es más corto, más fácil de leer y mantener que usando `findViewById()`.

* Los datos y vistas están claramente separados.

* El sistema Android solo atraviesa la jerarquía de vistas una vez para obtener cada vista, y ocurre durante el inicio de la aplicación, no en el tiempo de ejecución cuando el usuario está interactuando con la aplicación.

* Obtiene seguridad de tipos para acceder a las vistas. (La seguridad de tipos significa que el compilador valida los tipos durante la compilación y genera un error si intenta asignar el tipo incorrecto a una variable).

### Habilitar Data Binding

1. Abrir el archivo `build.gradle (Module: app)`

2. Dentro de la sección `android`, antes de cerrar la llave agregamos el siguiente código:

```
buildFeatures {
    dataBinding true
}
```

3. Android Studio solicitará sincronizar el proyecto, si no lo solicita, seleccionar **File > Sync Project with gradle files**

### Actualizar layouts para usar data binding

Para trabajar con data binding, necesitamos agregar la etiqueta `<layout>` como nodo principal. Por ejemplo:

```xml
<layout>
   <LinearLayout>
   ...
   </LinearLayout>
</layout>
```

También debemos cortas las declaraciones del namespace de nuestros layouts originales y pegarlas dentro de la etiqueta `<layout>`. Por ejemplo:

```xml
<layout xmlns:android="http://schemas.android.com/apk/res/android"
   xmlns:app="http://schemas.android.com/apk/res-auto">
```

## Agregar Fragment

1. En el folder **res/layout**, clic derecho, seleccionar **new/fragment/fragment (blank)**

2. Definimos el nombre como `TitleFragment`


## Actualizar main activity

Actualizamos nuestro main activity para utilizar data binding y agregamos un linear layout de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    <LinearLayout
        xmlns:tools="http://schemas.android.com/tools"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical"
        tools:context=".MainActivity">

    </LinearLayout>
</layout>
```

## Actualizar el fragmento

Actualizamos el layout de nuestro fragment para usar data binding y agregamos un linear layout con un text view dentro de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    tools:context="com.example.fragments.TitleFragment">

    <LinearLayout
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

    </LinearLayout>
</layout>
```

## Actualizar la clase del fragmento

En el archivo **TitleFragment.kt** borramos algunas partes del código innecesarias debajo de los **imports** hasta dejarlo de la siguiente forma:

```kotlin
class TitleFragment : Fragment() {

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        val binding = DataBindingUtil.inflate<FragmentTitleBinding>(inflater,
            R.layout.fragment_title, container, false)
        return binding.root
    }

}
```

* Dentro de la función `onCreateView` creamos una variable binding

* Usamos el método `inflate` para inflar (inicializar) la vista del fragmento.

Este método recibe 4 parametros:

1. Inflater: la clase LayoutInflater se usa para instanciar el contenido del layout en XML a sus respectivos objetos View.

2. El layout xml correspondiente en la clase `R.layout.*`.

3. container el viewGroup padre.

4. attachToParent pasamos el valor false.

* Se asigna el resultado de `DataBindingUtil.inflate` a la variable binding.

* Retornamos `binding.root` que contiene la vista inflada.

## Agregar fragmento al activity

Dentro del LinearLayout en el MainActivity agregamos lo siguiente:

```xml
<fragment
 android:id="@+id/titleFragment"
 android:name="com.example.fragments.TitleFragment"
 android:layout_width="match_parent"
 android:layout_height="match_parent"
 />
```

## Resultado final

Al correr la app tendremos el siguiente resultado:

![image](./images/41.png)
