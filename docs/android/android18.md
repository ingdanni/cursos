---
id: android18
title: Retrofit
---

Retrofit es una librería para Android y java compatible con Kotlin para hacer peticiones a un API de forma sencilla.

## Proyecto inicial

* Para esta sesión creamos un proyecto nuevo (Empty Activity) con las configuraciones básicas que ya conocemos.

## Agregar dependencias

En el archivo Gradle (Project:) agregamos las siguiente definición de variables dentro de la sección `ext` después de la sección de `plugins`:

```kotlin
ext {
  version_retrofit = "2.9.0"
  version_moshi = "1.8.0"
}
```

En el archivo Gradle (Module:) agregamos las siguientes dependencias para descargar las librerias `Retrofit` y `moshi`, sincronizamos si es necesario:

```kotlin
implementation "com.squareup.retrofit2:retrofit:$version_retrofit"
implementation "com.squareup.retrofit2:converter-scalars:$version_retrofit"
implementation "com.squareup.moshi:moshi-kotlin:$version_moshi"
implementation "com.squareup.retrofit2:converter-moshi:$version_retrofit"
```

## Actualizar Android Manifest

Vamos a agregar en el archivo `AndroidManifest.xml` el permiso para que nuestra app pueda interactuar con internet, lo hacemos después del cierre de la etiqueta `<application></application>`:

```xml
 <uses-permission android:name="android.permission.INTERNET" />
```

## Crear servicio

* Creamos un archivo llamado `ApiService.kt` y agregamos una variable llamada `BASE_URL` que se refiere a la URL de nuestro servicio. Debajo de esa variable vamos a usar Retrofit Builder para crear un objeto de tipo `Retrofit`.

```kotlin
val BASE_URL = "https://jsonplaceholder.typicode.com/"

private val retrofit = Retrofit.Builder()
    .addConverterFactory(ScalarsConverterFactory.create())
    .baseUrl(BASE_URL)
    .build()
```

* **Retrofit** necesita al menos 2 cosas para consumir el servico. Necesita una URL y un Converter Factory que le dice a Retrofit que hacer con la información que recibe desde el servicio. En este caso Retrofit toma la respuesta JSON y la convierte a una cadena.

* Debajo del objeto **retrofit**, definimos una interfaz que define como retrofit se comunicara con el servicio web. Se importan las librerias necesarias que nos marque el compilador.

```kotlin
interface ApiService {

    @GET("posts")
    fun getPosts(): Call<String>
}

```

* Debajo de la interfaz `ApiService`, se define un objeto público llamado `Api` para inicializar el servicio de Retrofit. Este es un patrón de codigo muy usado en Kotlin para crear un objeto servicio.

```kotlin
object Api {
    val retrofitService : ApiService by lazy {
        retrofit.create(ApiService::class.java)
    }
}
```

## Llamar el servicio desde el Activity

* En el archivo `MainActivity.kt`, dentro de la función `onResume()` agregamos la siguiente instrucción:

```kotlin
Api.retrofitService.getPosts().enqueue(
    object: Callback<String> {

    }
)
```

* Retrofit tiene dos objetos especiales que son `Call<T>` y `Callback<T>` el primero es el objeto que realiza la petición y el segundo es el objeto que recibe el resultado de la petición.  

* `T` representa el objeto que se espera de la respuesta y en ambos tiene que ser el mismo, en este caso para la primer petición tenemos `Call<String>`, entonces, el objeto de respuesta sería `Callback<String>`.

* La función `Api.retrofitService.getPosts()` retorna una un objeto `Call`. Después se llama la función `enqueue()` en ese objeto para inciar la petición en un hilo secundario.

* Damos clic en la palabra `object`, que esta subrayada en rojo. Seleccionamos en el menú **Code > Implement methods** y seleccionamos `onResponse()` y `onFailure()` de la lista.

![image](/img/android/68.png)

* Vemos que se agrega el siguiente código:

```kotlin
override fun onFailure(call: Call<String>, t: Throwable) {
       TODO("not implemented")
}

override fun onResponse(call: Call<String>,
   response: Response<String>) {
       TODO("not implemented")
}
```

* Cambimos el cuerpo de la función correspondiente a cada caso:

```kotlin
override fun onResponse(call: Call<String>, response: Response<String>) {
    Log.i("Retrofit", response.body().toString())
}

override fun onFailure(call: Call<String>, t: Throwable) {
    Log.i("Retrofit", t.message.toString())
}
```

## Resultado final

Al correr la app vemos que los datos en formato JSON se imprimen en la consola. En la siguiente sección veremos como convertir estos datos a un **objeto** en **kotlin** usando la libreria `moshi`.
