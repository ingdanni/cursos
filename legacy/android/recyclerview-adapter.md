# RecyclerView y Adapter

## Agregar RecyclerView

1. En el archivo `fragment_detail.xml`, arrastramos desde la paleta de componentes un `RecyclerView` dentro del `LinearLayout`.

2. Agregamos un `id` al `RecyclerView`.

```xml
android:id="@+id/events_list"
```

3. Agregamos la propiedad `LayoutManager` al `RecyclerView` para que determine como posicionar los elementos en la lista. En este caso `LinearLayoutManager` los deja como una lista vertical tomando el ancho completo disponible.

```xml
app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"
```

## Crear Layout para los items

El `RecyclerView` solamente es un contenedor. En este paso creamos un layout para los items que son desplegados dentro del `RecyclerView`.

1. Creamos un archivo de layout llamado `text_item_view.xml`.

2. Borramos el código generado en el archivo y agregamos el siguiente:

```xml
<?xml version="1.0" encoding="utf-8"?>
<TextView xmlns:android="http://schemas.android.com/apk/res/android"
    android:textSize="24sp"
    android:paddingStart="16dp"
    android:paddingEnd="16dp"
    android:layout_width="match_parent"
    android:layout_height="wrap_content" />
```

3. Creamos un archivo kotlin llamado `TextItemViewHolder` y agregamos el siguiente código:

```kotlin
class TextItemViewHolder(val textView: TextView): RecyclerView.ViewHolder(textView)
```

4. Importamos los paquetes necesarios en caso que no nos muestre error.

## Crear el Adapter

El Adapter se encarga de crear un View Holder y lo llena con información para que el RecyclerView lo muestre en pantalla.

1. Creamos una clase Kotlin llamada `EventAdapter`.

2. Hacemos que la clase `EventAdapter` herede de la clase `RecyclerView.Adapter`. La clase se llama EventAdapter ya que adapta un objeto `Event` en algo que el `RecyclerView` pueda usar. El adapter necesita saber que `View Holder` debe usar, entonces definimos en `TextItemViewHolder`.

```kotlin
class EventAdapter: RecyclerView.Adapter<TextItemViewHolder>() {

}
```

3. Dentro de la clase `EventAdapter`, creamos una variable llamada `data` para que almacene la información.

```kotlin
var data = listOf<Event>()
```

4. Sobrecargamos la función `getItemCount()` que indica al `RecyclerView` la cantidad de elementos debe mostrar. En este caso seria la longitud de la propiedad `data` de nuestro `Adapter`.

```kotlin
override fun getItemCount(): Int {
    return  data.size
}
```

5. Sobrecargamos la función `onBindViewHolder()` que es llamada por el `RecyclerView` para desplegar los datos de un elemento en la posición especificada. La función tiene 2 parámetros: el primero es un `ViewHolder` y luego `position`. Para este ejemplo se utiliza un `TextItemViewHolder` y dentro de la función creamos una variable `item` con los datos del elemento en la posición actual para asignarlo a la propiedad `text` del `textView` que esta dentro del `ViewHolder`.

```kotlin
override fun onBindViewHolder(holder: TextItemViewHolder, position: Int) {

    val item = data[position]
    holder.textView.text = "${item.id} - ${item.name} (${item.value})"
}
```

8. Sobrecargamos e implementamos la función `onCreateViewHolder()`, que se llama cuando el `RecyclerView` necesita crear un `ViewHolder`. La función recibe 2 parámetros y retorna un `ViewHolder`. El parámetro `parent` que es el `ViewGroup` que contiene al `ViewHolder`, siempre es el `RecyclerView`. El parametro `viewType` es usado cuando hay múltiples vistas en el mismo `RecyclerView`.

```kotlin
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TextItemViewHolder {
    val layoutInflater = LayoutInflater.from(parent.context)

    val view = layoutInflater
        .inflate(R.layout.text_item_view, parent, false) as TextView

    return TextItemViewHolder(view)
}
```

9. Para notificar al `RecyclerView` cualquier cambio en los datos que son desplegados, agregamos un setter a la variable `data` de la clase `EventAdapter`. Dentro del setter se llama a la función `notifyDataSetChanged()` para refrescar la lista con los datos nuevos cada vez que cambien.

```kotlin
var data = listOf<Event>()
set(value) {
    field = value
    notifyDataSetChanged()
}
```

## Configurar el fragmento

En nuestro fragmento en la función `onCreateView()` agregamos la inicialización del Adapter y Observer para escuchar cambios en la información antes del `return`:

```kotlin
val adapter = EventAdapter()

binding.eventsList.adapter = adapter

viewModel.events.observe(viewLifecycleOwner, Observer {
   it?.let {
       adapter.data = it
   }
})
```

## Resultado

Al ejecutar la aplicación y navegar al fragmento "Historial" se nos muestra la lista de eventos que el usuario a ejecutado:

![image](./images/65.png)

## Proyecto finalizado

Podemos descargar el proyecto finalizado en el siguiente enlace:

[⬇️  Proyecto - RecyclerView Terminado](../downloads/RecyclerView-Terminado.zip)
