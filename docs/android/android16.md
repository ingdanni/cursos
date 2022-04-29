---
id: android16
title: RecyclerViews
---

## Inicio

* Para esta sección vamos a crear un proyecto nuevo con una actividad vacía (Empty activity).

* Luego en nuestro paquete principal agregamos 3 archivos **kotlin** uno llamado **Estudiante.kt**, otro llamado **EstudiantesAdapter.kt** y para finalizar otro llamado **EstudiantesViewHolder.kt**.

* Por último en nuestra carpeta **layout** agregamos un archivo XML nuevo. Clic derecho en `nuevo > XML > archivo de layout XML` y lo nombramos **estudiante_row_item.xml**

## Definición

El componente **RecyclerView** facilita la visualización eficiente de grandes conjuntos de datos. Usted proporciona los datos y define el aspecto de cada elemento, y la biblioteca RecyclerView crea dinámicamente los elementos cuando se necesitan.

Como su nombre lo indica, **RecyclerView** recicla esos elementos individuales. Cuando un elemento se desplaza fuera de la pantalla, **RecyclerView** no destruye su vista. En su lugar, **RecyclerView** reutiliza la vista para los elementos nuevos que se han desplazado en pantalla. Esta reutilización mejora enormemente el rendimiento, mejorando la capacidad de respuesta de su aplicación y reduciendo el consumo de energía.

## Agregar clase Estudiante

Vamos a definir una clase llamada Estudiante en el archivo **Estudiante.kt**. Se marca como una `data class` ya que el objetivo de esta clase es almacenar datos.

```kotlin
data class Estudiante (
    val id: Int,
    val nombre: String,
    val carne: String,
    val telefono: String,
)
```

Por debajo de la clase podemos agregar una función global que nos retorne una lista de estudiantes para simular un dataset que usaremos para poblar nuestro **RecyclerView**.

```kotlin
fun obtenerListaDeEstudiantes(): List<Estudiante> {

    return listOf(
        Estudiante(1, "Juana Perez", "001-002", telefono = "88996655"),
        Estudiante(2, "Marcos Perez", "001-896", telefono = "88996655"),
        Estudiante(3, "Juliana Perez", "001-325", telefono = "88996655"),
        Estudiante(4, "Maria Perez", "001-987", telefono = "88996655"),
        Estudiante(5, "Josefina Perez", "001-333", telefono = "88996655"),
    )
}
```

## Agregar el layout

En el archivo **estudiante_row_item.xml** agregamos el siguiente layout que contiene un LinearLayout y 3 etiquetas de tipo `TextView` con sus configuraciones correspondientes. Este layout se utilizará para cada celda de nuestra lista en el **RecyclerView**.

```xml
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_marginLeft="20dp"
    android:layout_marginRight="20dp"
    android:gravity="center_vertical">

    <LinearLayout
        android:layout_marginTop="20dp"
        android:orientation="vertical"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <TextView
            android:id="@+id/nombre_textView"
            android:textSize="22dp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Nombre Estudiante"/>

        <TextView
            android:id="@+id/carne_textView"
            android:textSize="18dp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Carne"/>

        <TextView
            android:id="@+id/telefono_textView"
            android:textSize="18dp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Telefono"/>
    </LinearLayout>
</FrameLayout>
```

## Agregar clase ViewHolder

En el archivo **EstudiantesViewHolder.kt** vamos a crear una clase que represente nuestro **ViewHolder**.

Cada elemento individual de la lista está definido por un objeto **ViewHolder**. Cuando se crea el **ViewHolder**, no tiene ningún dato asociado. Una vez que se crea el **ViewHolder**, RecyclerView lo vincula a sus datos. El **ViewHolder** se define extendiendo **RecyclerView.ViewHolder**.

```kotlin
class EstudiantesViewHolder(view: View) : RecyclerView.ViewHolder(view) {
    val nombreTextView: TextView
    val carneTextView: TextView
    val telefonoTextView: TextView

    init {
        nombreTextView = view.findViewById(R.id.nombre_textView)
        carneTextView = view.findViewById(R.id.carne_textView)
        telefonoTextView = view.findViewById(R.id.telefono_textView)
    }
}
```

## Agregar clase Adapter

En el archivo **EstudiantesAdapter.kt** vamos a crear una clase que represente nuestro **Adapter**.

**RecyclerView** solicita las vistas y vincula las vistas a sus datos llamando a métodos en el **Adapter**. El adaptador se define extendiendo **RecyclerView.Adapter**.

```kotlin
class EstudiantesAdapter(private val dataSet: Array<Estudiante>) : RecyclerView.Adapter<EstudiantesViewHolder>() {

}
```

## Configurar el Adapter

Dentro de nuestro Adapter vamos a definir 3 funciones que nos ayudarán a mostrar los datos en pantalla.

1. La primera es `onCreateViewHolder`, esta se encarga de crear nuevas vistas y es invocada por el `layout manager` y nos retorna un `ViewHolder`:

```kotlin

override fun onCreateViewHolder(viewGroup: ViewGroup, viewType: Int): EstudiantesViewHolder {

    val view = LayoutInflater.from(viewGroup.context)
        .inflate(R.layout.estudiante_row_item, viewGroup, false)

    return EstudiantesViewHolder(view)
}
```

2. La segunda es `onBindViewHolder` que define el contenido de la vista, obtiene el elemento desde el dataset en la posición actual y asigna el contenido del elemento a la vista:

```kotlin
override fun onBindViewHolder(viewHolder: EstudiantesViewHolder, position: Int) {
    viewHolder.nombreTextView.text = dataSet[position].nombre
    viewHolder.carneTextView.text = dataSet[position].carne
    viewHolder.telefonoTextView.text = dataSet[position].telefono
}
```

3. La tercera es `getItemCount` y define el tamaño del dataset.

```kotlin
override fun getItemCount(): Int {
    return dataSet.size
}
```

## Configurar Activity

Por último vamos a configurar nuestro **RecyclerView** y **Adapter** en nuestra activity para mostrar los datos.

1. En nuestro archivo **activity_main.xml** agregamos un **RecyclerView** quedando de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recycler_view"
        app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
</LinearLayout>
```

2. En la clase **MainActivity** dentro de la función **onCreate** agregamos:

```kotlin
val adapter = EstudiantesAdapter(dataSet = obtenerListaDeEstudiantes().toTypedArray())

var recyclerView: RecyclerView = findViewById(R.id.recycler_view)

recyclerView.adapter = adapter
```

3. Ejecutamos el proyecto y debemos ver una lista de Estudiantes en la pantalla.
