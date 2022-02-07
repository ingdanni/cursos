# Retrofit - Parte 1

## Proyecto inicial

Para esta sesión descargamos el proyecto inicial en el siguiente enlace:

[⬇️  Proyecto - RecyclerView Inicio](../downloads/Retrofit-Inicial.zip)

## Agregar dependencias

En el archivo Gradle (Project:) agregamos las siguiente definición de variables dentro de la sección `ext`:

```kotlin
ext {
  ...
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

* En el archivo `ApiService.kt` tenemos una variable llamada `BASE_URL` que se refiere a la URL de nuestro servicio. Debajo de esa variable vamos a usar Retrofit Builder para crear un objeto `Retrofit`.

```kotlin
private val retrofit = Retrofit.Builder()
    .addConverterFactory(ScalarsConverterFactory.create())
    .baseUrl(BASE_URL)
    .build()
```

* Retrofit necesita al menos 2 cosas para consumir el servico. Necesita una URL y un Converter Factory que le dice a Retrofit que hacer con la información que recibe desde el servicio. En este caso Retrofit toma la respuesta JSON y la convierte a una cadena.

* Debajo del objeto **retrofit**, definimos una interfaz que define como retrofit se comunicara con el servicio web. Se importan las librerias necesarias que nos marque el compilador.

```kotlin
interface ApiService {

    @GET("posts")
    fun getPosts():
            Call<String>
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

## Llamar el servicio desde el ViewModel

1. En el archivo `FirstViewModel`, dentro de la función `getAllPosts()` reemplazamos el cuerpo por la siguiente instrucción:

```kotlin
Api.retrofitService.getPosts().enqueue(
    object: Callback<String> {

    }
)
```

2. La función `Api.retrofitService.getPosts()` retorna una un objeto `Call`. Después se llama la función `enqueue()` en ese objeto para inciar la petición en un hilo secundario.

3. Damos clic en la palabra `object`, que esta subrayada en rojo. Seleccionamos en el menú **Code > Implement methods** y seleccionamos `onResponse()` y `onFailure()` de la lista.

![image](./images/68.png)

4. Vemos que se agrega el siguiente código:

```kotlin
override fun onFailure(call: Call<String>, t: Throwable) {
       TODO("not implemented")
}

override fun onResponse(call: Call<String>,
   response: Response<String>) {
       TODO("not implemented")
}
```

5. Asignamos la funcionalidad correspondiente a cada caso:

```kotlin
override fun onResponse(call: Call<String>, response: Response<String>) {
    _response.value = response.body()
}

override fun onFailure(call: Call<String>, t: Throwable) {
    _response.value = t.message
}
```

## Resultado

Al correr la app vemos que los datos en JSON se agregan en formato de texto. En la siguiente sección veremos como convertir estos datos a un objeto en kotlin usando la libreria `moshi`.

![image](./images/69.png)
