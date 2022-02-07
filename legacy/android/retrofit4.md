# Retrofit - Parte 4

## Descargar proyecto inicial

Para esta sección vamos a descarga el proyecto inicial en el siguiente enlace:

[⬇️  Descargar Proyecto - Retrofit3 Inicial](../downloads/Retrofit3-Inicial.zip)

## POST

A continuación vamos a realizar una petición de tipo `POST` a la url `https://jsonplaceholder.typicode.com/posts` con el fin de agregar un registro.

En el cuerpo de la petición se deben enviar estas propiedades:

```json
{
  "title": "Nuevo post",
  "body": "Esto es una prueba",
  "userId": 1
}
```

1. Para enviar el cuerpo debemos crear una clase kotlin que represente la información enviada al servidor. En el archivo `Models.kt` definimos una clase `Post` de la siguiente forma:

```kotlin
data class Post (
    val id: Int?,
    val userId: Int,
    val title: String,
    val body: String
)
```

💡 NOTA: La propiedad `id` se define como `Int?` porque es un entero que inicialmente es nulo (null).

2. En la interfaz `ApiService` del archivo `ApiService.kt` agregamos la función `addPost` (agregar post):

```kotlin
@POST("posts")
suspend fun addPost(@Body data: Post): Post
```

NOTA: La anotación `@Body` indica que esa variable es el cuerpo de la petición.

3. En nuestro `ViewModel` agregamos una función llamada `addPost() {}`

4. Dentro de la función `addPost()` agregamos el siguiente código:

```kotlin
val data = Post(id = null,
    userId = 1,
    title = "Prueba de retrofit POST",
    body = "Esto es una prueba")

viewModelScope.launch {
    try {
        var newRecord = Api.retrofitService.addPost(data)

        Log.i("Retrofit", "Nuevo post creado con id = ${newRecord.id}")

    } catch (e: Exception) {
        Log.i("Retrofit", e.toString())
    }
}
```

## PUT

A continuación vamos a realizar una petición de tipo `PUT` a la url `https://jsonplaceholder.typicode.com/posts/:id` con el fin de actualizar un registro.

En el cuerpo de la petición se deben enviar estas propiedades:

```json
{
  "title": "Post actualizado",
  "body": "Esto es una prueba",
  "userId": 1
}
```

1. En la interfaz `ApiService` del archivo `ApiService.kt` agregamos la función `updatePost` (actualizar post):

```kotlin
@PUT("posts/{id}")
suspend fun updatePost(@Path("id") id: Int, @Body data: Post): Post
```

NOTA: La anotación `@Path` indica el valor del `id` que se especifica en la url.

2. En el `ViewModel` agregamos una función llamada `updatePost() {}`.

3. Dentro de la función `updatePost()` agregamos el siguiente código:

```kotlin
val data = Post(id = null,
    userId = 1,
    title = "Prueba de retrofit PUT",
    body = "Esto es una prueba")

viewModelScope.launch {
    try {
        var updatedRecord = Api.retrofitService.updatePost(1, data)

        Log.i("Retrofit", "Post actualizado con id = ${updatedRecord.id}")
    } catch (e: Exception) {
        Log.i("Retrofit", e.toString())
    }
}
```

## DELETE

A continuación vamos a realizar una petición de tipo `DELETE` a la url `https://jsonplaceholder.typicode.com/posts/:id` con el fin de borrar un registro.

1. Para esta petición solamente necesitamos el `id` del registro.

2. En la interfaz `ApiService` agregamos la siguiente función `deletePost`:

```kotlin
@DELETE("posts/{id}")
suspend fun deletePost(@Path("id") id: Int): ResponseBody
```

NOTA: La función nos retorna un tipo `ResponseBody`, esta clase nos ayuda a manejar la respuesta en caso que venga vacia.

3. En el `ViewModel` agregamos una función llamada `deletePost()` y agregamos dentro el siguiente código:

```kotlin
viewModelScope.launch {
    try {
        var deletedRecord = Api.retrofitService.deletePost(1)

        Log.i("Retrofit", "Post eliminado = ${deletedRecord.toString()}")
    } catch (e: Exception) {
        Log.i("Retrofit", e.toString())
    }
}
```
