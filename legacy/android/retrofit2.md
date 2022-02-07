# Retrofit - Parte 2

En esta sección retomamos el proyecto anterior para desplegar los datos obtenidos del servicio REST usando un `RecyclerView`.

## Crear data class

Del servicio REST que estamos consultando recibimos un arreglo de objetos (posts) y cada objeto tiene 4 propiedades. Como podemos ver en el siguiente ejemplo:

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  // ... otros objetos
]
```

La libreria `moshi` nos ayuda a convertir los datos en JSON en un objeto en Kotlin. Para hacer esto necesitamos crear una **data class** para almacenar el resultado, entonces en el archivo `Post.kt` agregamos la siguiente definición de clase:

```kotlin
data class Post(
    val id: Int,
    val userId: Int,
    val title: String,
    val body: String
)
```

IMPORTANTE: los nombres de las propiedades deben ser iguales. Si desea renombrar una propiedad para la clase kotlin se debe usar la notación `@Json` por ejemplo:

`@Json(name = "body") val content: String`

## Actualizar Servicio

1. En la parte superior de nuesto arhivo `ApiService.kt` agregamos:

```kotlin
private val moshi = Moshi.Builder()
    .add(KotlinJsonAdapterFactory())
    .build()
```

En este caso se crea un objeto moshi usando Moshi builder y para que las `Moshi` pueda trabajar apropiadamente con Kotlin, agregamos `KotlinJsonAdapterFactory` y llamamos `build()`.

2. Cambiamos el Retrofit Builder para que use `MoshiConterverFactory` en vez de `ScalarsConverterFactory`:

```kotlin
private val retrofit = Retrofit.Builder()
    .addConverterFactory(MoshiConverterFactory.create(moshi))
    .baseUrl(BASE_URL)
    .build()
```

3. Actualizamos la interfaz `ApiService` para que Retrofit nos retorne una lista de objetos `Post`.

```kotlin
interface ApiService {

    @GET("posts")
    fun getPosts():
            Call<List<Post>>
}
```

## Crear layout para elemento de la lista

Creamos un archivo de layout, lo nombramos `list_item_post.xml` y agregamos los siguientes componentes removiendo el código generado:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:id="@+id/title_text"
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:layout_weight="1"
        android:text="title"
        android:textSize="16dp" />

    <View
        android:id="@+id/separator"
        android:layout_width="match_parent"
        android:layout_height="1dp"
        android:layout_marginTop="16dp"
        android:layout_weight="1"
        android:background="#292626" />
</LinearLayout>
```

Este layout es sencillo, solamente contiene un `LinearLayout`con 2 elementos: un `TextView` para el título de cada Post y una `View` que sirve como separador.

## Agregar ViewHolder

En el archivo `PostViewHolder.kt` agregamos la siguiente definición:

```kotlin
class PostViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    val titleText: TextView = itemView.findViewById(R.id.title_text)
}
```

En esta clase tenemos una referencia al TextView de nuestro layout para cada item de la lista.

## Agregar Adapter

En el archivo `PostAdapter.kt` agregamos la siguiente definición:

```kotlin
class PostsAdapter: RecyclerView.Adapter<PostViewHolder>() {

    var data = listOf<Post>()
        set(value) {
            field = value
            notifyDataSetChanged()
        }

    override fun getItemCount(): Int {
        return data.size
    }

    override fun onBindViewHolder(holder: PostViewHolder, position: Int) {

        val item = data[position]
        holder.titleText.text = item.title
        // se pueden agregar mas propiedades si el layout lo permite
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PostViewHolder {

        val layoutInflater = LayoutInflater.from(parent.context)

        val view = layoutInflater
            .inflate(R.layout.list_item_post, parent, false)

        return PostViewHolder(view)
    }
}
```

El adapter se encarga de configurar nuesta lista de Posts en el layout, haciendo uso del ViewHolder.

## Actualizar ViewModel

1. En nuestra clase `FirstViewModel` cambiamos la variable `_response` por `_posts` para que se maneje una lista de `Post` en vez de una cadena de texto.

2. En la función `getAllPosts()` cambiamos todas las referencias donde haya `String` por `List<Post>`.

3. Igualmente se cambian los `_response.value` por `_posts.value`.

```kotlin
class FirstViewModel : ViewModel() {

    private val _posts = MutableLiveData<List<Post>>()

    val posts: LiveData<List<Post>>
        get() = _posts

    init {
        getAllPosts()
    }

    private fun getAllPosts() {
        Api.retrofitService.getPosts().enqueue(
            object: Callback<List<Post>> {

                override fun onResponse(call: Call<List<Post>>, response: Response<List<Post>>) {
                    _posts.value = response.body()
                }

                override fun onFailure(call: Call<List<Post>>, t: Throwable) {
                    _posts.value = emptyList()
                }
            }
        )
    }
}
```

## Actualizar Fragment

1. En el layout `fragment_first.xml` agregamos un componente `RecyclerView` dentro del `LinearLayout`:

```xml
<androidx.recyclerview.widget.RecyclerView
    android:id="@+id/posts_list"
    app:layoutManager="androidx.recyclerview.widget.LinearLayoutManager"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />
```

> NOTA: Verificar si está agregado el namespace `xmlns:app="http://schemas.android.com/apk/res-auto"` en la etiqueta `<layout>`.

2. En la clase `FirstFragment` en la función `onCreateView` antes del `return` agregamos la definición del adapter.

```kotlin
val adapter = PostsAdapter()

binding.postsList.adapter = adapter

viewModel.posts.observe(viewLifecycleOwner, Observer {
    it?.let {
        adapter.data = it
    }
})
```

## Resultado final

Al ejecutar la app nos muestra la lista de post (unicamente el título) de la siguiente forma:

![image](./images/70.png)
