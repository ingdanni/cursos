# Retrofit - Parte 3

## Proyecto inicial

Para esta sesión descargamos el proyecto inicial en el siguiente enlace:

[⬇️  Descargar Proyecto - Retrofit2 Inicial](../downloads/Retrofit2-Inicial.zip)

Si ejecutamos el proyecto inicial vemos que se trata de un app que consulta una **API** y nos muestra una lista haciendo uso de **RecyclerView**. Algunas cosas que podemos ver en el proyecto son:

* Tenemos configuradas las librerias **Retrofit, moshi, CardView y Glide**.
* Se agrega el plugin **kotlin-kap**.
* La url del API es: `https://shrouded-harbor-95996.herokuapp.com/api/v1/`
* Tenemos una función `getPlaces()` en ApiService que obtiene una lista de objetos de tipo `Place`.

## Coroutines con Retrofit

En la sección anterior se trabajo con Retrofit haciendo uso de Callbacks para manejar la respuesta de la petición. Dentro del Callback hay 2 métodos, un para manejar la respuesta satisfactoria y otro para el manejo de errores. Sin embargo podemos hacer nuestro código más eficiente y fácil de leer haciendo uso de `Coroutines` con manejo de excepciones.

Actualizamos el archivo `ApiService.kt`, agregando la palabra `suspend` en la función `getPlaces()` y el tipo de retorno lo cambiamos a `List<Place>` como se ve a continuación:

```kotlin
@GET("places")
suspend fun getPlaces(): List<Place>
```

Actualizamos el archivo `FirstViewModel.kt` y cambiamos la definición de la función que ya tenemos por la siguiente:

```kotlin
private fun getAllPosts() {

    viewModelScope.launch {
        try {
            _places.value = Api.retrofitService.getPlaces()
        } catch (e: Exception) {
            _places.value = emptyList()
        }
    }
}
```

En este caso, `viewModelScope.launch {}` es un Coroutine definida dentro del entorno de cada ViewModel en la app y usamos `try / catch` para el manejo de las excepciones.

## Binding adapters

Ahora vamos a agregar un `Binding adapter` para configurar la imagen descargada en un `ImageView`. Los `Binding Adapters` hacen que podamos tomar datos y adaptarlos a algo que se pueda vincular a una vista y los declaramos con la anotación `@BindingAdapter`.

En el archivo `BindingAdapters.kt` agregamos la siguiente definición:

```kotlin
@BindingAdapter("imageUrl")
fun bindImage(imgView: ImageView, imgUrl: String?) {
    imgUrl?.let {
        val imgUri = imgUrl.toUri().buildUpon().scheme("https").build()

        Glide.with(imgView.context)
            .load(imgUri)
            .into(imgView)
    }
}
```

Dentro del bloque `let {}` convertimos la cadenar que representa la `URL` en un objeto `URI` que usa el esquema HTTPS. Luego se llama a `Glide.with()` para cargar el objeto `URI` en el `ImageView`.

> NOTA: Agregar los imports que sean necesarios.

## Actualizar layout del fragmento

Actualizar el archivo `fragment_first.xml`, en el `RecyclerView` se añadiran 2 propiedades para definir que el layout será en forma de cuadricula (grid) y `spanCount` determina el número de columnas en la cuadricula.

```xml
app:layoutManager="androidx.recyclerview.widget.GridLayoutManager"
app:spanCount="2"
```

## Actualizar layout del List Item

Actualizar el archivo `list_item_place.xml` en el que tendremos 3 cambios importantes que son:

1. Se agrega la etiqueta `<layout>` en la raiz.
2. Se agrega una `variable` llamada `place`.
3. En el `ImageView` se agrega la propiedad `app:imageUrl` para hacer referencia al `BindingAdapter` que habiamos definido.

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools">

    <data>
        <variable
            name="place"
            type="com.example.fragments.networking.Place" />
    </data>

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical">

        <androidx.cardview.widget.CardView
            xmlns:card_view="http://schemas.android.com/apk/res-auto"
            android:id="@+id/card_view"
            android:layout_gravity="center"
            android:layout_width="match_parent"
            android:layout_height="100dp"
            android:layout_margin="8dp"
            android:elevation="8dp"
            card_view:cardCornerRadius="8dp">

            <ImageView
                android:id="@+id/mars_image"
                android:layout_width="match_parent"
                android:layout_height="170dp"
                android:scaleType="centerCrop"
                android:adjustViewBounds="true"
                android:padding="2dp"
                app:imageUrl="@{place.url}"
                tools:src="@tools:sample/backgrounds/scenic"/>
        </androidx.cardview.widget.CardView>
    </LinearLayout>
</layout>
```

## Actualizar ViewHolder

En el archivo `PlaceViewHolder` cambiamos la definición de la clase para que reciba un `ListItemPlaceBinding` al inicializarse y mediante la función `bind()` asigne la variable `place`. Al llamar la función `executePendingBindings()` se asegura que se actualice inmediatamente.

```kotlin
class PlaceViewHolder(private var binding: ListItemPlaceBinding): RecyclerView.ViewHolder(binding.root) {

    fun bind(place: Place) {
        binding.place = place
        binding.executePendingBindings()
    }
}
```

## DiffUtil con RecyclerView

Actualmente para notificar al `RecyclerView` que un elemento ha cambiado sus valores y que necesita ser actualizado en pantalla usamos la función `notifyDataSetChanged()` en nuestra clase `PlacesAdapter`. Sin embargo esta función le dice al `RecyclerView` que la lista completa podría haber cambiado y que necesita refrescar todos los elementos, incluyendo los que no son visibles en pantalla.

Actualizar todos los elementos seria un trabajo innecesario y que podría afectar el rendimiento para una lista de datos grande y compleja. Para este tipo de situaciones podemos usar la clase llamada `DiffUtil` que calcula las diferencias entre 2 listas. `DiffUtil` toma la lista anterior y la nueva para determinar a través del algoritmo (diff) cuales son los elementos que han sido agregados, removidos o actualizados.

Cuando `DiffUtil` determina cuales elementos han sido actualizados, `RecyclerView` usa esa información para actualizarlos en pantalla. Esta forma es más eficiente que rehacer toda la lista.

1. Actualizar la declaración de `PlacesAdapter` para que herede de la clase `ListAdapter` en lugar de `RecyclerView.Adapter`:

```kotlin
class PlacesAdapter: ListAdapter<Place, PlaceViewHolder>(DiffCallback)
```

2. Dentro de `PlacesAdapter` antes de la llave de cierre agregamos un `companion object` con 2 funciones llamadas `areItemsTheSame` y `areContentsTheSame`:

```kotlin
companion object DiffCallback: DiffUtil.ItemCallback<Place>() {

    override fun areItemsTheSame(oldItem: Place, newItem: Place): Boolean {
        return oldItem.id === newItem.id
    }

    override fun areContentsTheSame(oldItem: Place, newItem: Place): Boolean {
        return oldItem == newItem
    }
}
```

3. La función `areItemsTheSame()` verifica si un elemento fue agregado, borrado o movido.

4. La función `areContentsTheSame()` verifica si un elemento contiene la misma información.

5. A continuación vamos a remover la variable `data` y la función `getItemCount()` de la clase `PlacesAdapter`.

6. Actualizar la función `onBindViewHolder` y ahora se usa la función `getItem()` para acceder a cada elemento y pasarlo al `ViewHolder`:

```kotlin
override fun onBindViewHolder(holder: PlaceViewHolder, position: Int) {
    val place = getItem(position)
    holder.bind(place)
}
```

7. Actualizar la función `onCreateViewHolder` para cambiar la inicialización de `PlaceViewHolder`:

```kotlin
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PlaceViewHolder {
    return PlaceViewHolder(ListItemPlaceBinding.inflate(LayoutInflater.from(parent.context)))
}
```

## Actualizar fragmento

Para finalizar actualizamos la clase `FirstFragment` y cambiamos la asignación de `adapter.data` por la llamada a `adapter.submitList()`, quedando de la siguiente forma:

```kotlin
viewModel.places.observe(viewLifecycleOwner, Observer {
    it?.let {
        adapter.submitList(it)
    }
})
```

## Resultado

Al finalizar el ejercicio se debera tener la siguiente pantalla:

![image](./images/71.png)
