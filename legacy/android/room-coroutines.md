# Coroutines

## Introducción

Una de las prioridades al desarrollar una app es mantenerla ejecutandose de una manera fluida sin interrupciones, que siempre responda a las interacciones del usuario. Para esto podemos mejorar el desempeño de la interfaz moviendo algunas tareas como las operaciones de base de datos a segundo plano (background).

En esta sección vamos a aprender:

* Que son las `Coroutines`
* Como usar `Coroutines` para realizar operaciones en segundo plano.
* Como usar `LiveData` para mostrar datos del BD.

## Concepto

En kotlin, las `Coroutines` son una manera de manejar tareas largas de ejecutar y asíncronas de una manera elegante y eficiente en vez de los callbacks. De esta forma el código se hace más flexible, fácil de leer y mantener.

![image](./images/60.png)

### Características

* Las Coroutines son asincronas y no bloqueantes del hilo principal.
* Las Coroutines usan funciones `suspend` para hacer que el código asíncrono sea semejante al secuencial.

![image](./images/61.png)

Para usar corrutinas en Kotlin, necesita tres cosas:

* Un Job
* Un dispatcher
* Un scope

`Job`: Básicamente, un job (trabajo) es cualquier cosa que pueda cancelarse. Cada coroutine tiene un trabajo. Los trabajos se pueden organizar en jerarquías de padres e hijos. Al cancelar un trabajo principal, se cancelan inmediatamente todos los hijos del trabajo, lo que es mucho más conveniente que cancelar cada rutina de forma manual.

`Dispatchers`: el despachador envía coroutines para que se ejecuten en varios subprocesos. Por ejemplo, `Dispatchers.Main` ejecuta tareas en el subproceso principal.

`Scope`: el alcance de una coroutine define el contexto en el que se ejecuta la coroutine. Un Scope combina información sobre el trabajo de una coroutine y los despachadores. Los scopes realizan un seguimiento de las corrutinas.

## Coroutines de Kotlin con componentes de Arquitectura

Un `CoroutineScope` realiza un seguimiento de todas sus coroutines y le ayuda a administrar cuándo deben ejecutarse. También puede cancelar todas las corrutinas iniciadas dentro de él. Cada operación asincrónica o corrutina se ejecuta dentro de un `CoroutineScope` particular.

Los componentes de la arquitectura brindan soporte de primera clase para corrutinas para ámbitos lógicos en su aplicación. Los componentes de la arquitectura definen los siguientes ámbitos integrados que puede utilizar en su aplicación. Los alcances de corrutina incorporados se encuentran en las extensiones KTX para cada componente de Arquitectura correspondiente. Asegúrese de agregar las dependencias adecuadas cuando utilice estos ámbitos.

* ViewModelScope
* LifecycleScope
* liveData

`ViewModelScope`: se define un ViewModelScope para cada ViewModel en su aplicación. Cualquier corrutina lanzada en este ámbito se cancela automáticamente si se borra ViewModel. En este ejemplo, usaremos `ViewModelScope` para iniciar las operaciones de la base de datos.

## Room y Dispatchers

Cuando se usa la biblioteca de Room para realizar una operación de base de datos, Room usa un `Dispatchers.IO` para realizar las operaciones de la base de datos en un hilo de segundo plano. No es necesario que especifique explícitamente ningún despachador. Room hace esto por nosotros.

## Actualizar Dao

En el archivo `EventDao.kt` agregamos la palabra reservada `suspend` a todos los métodos, excepto a `getAll()` porque Room ya utiliza un hilo en segundo plano para los métodos marcados con `@Query` que retornan `LiveData`.

```kotlin
@Dao
interface EventDao {
    @Query("SELECT * FROM event")
    fun getAll(): LiveData<List<Event>>

    @Query("SELECT * FROM event WHERE name LIKE :name")
    suspend fun getAllByName(name: String): List<Event>

    @Insert
    suspend fun insertAll(vararg events: Event)

    @Delete
    suspend fun delete(event: Event)
}
```

## Actualizar FirstViewModel

1. En nuestro `ViewModel` agregamos la variable `events` que tendra todos los eventos que se han guardado en la tabla.

```kotlin
var events = database.getAll()
```

2. Modificar los métodos `add`, `subtract` y `reset` para guardar información de cada evento.

```kotlin
fun add() {

    viewModelScope.launch {
        val newEvent = Event(0, "add", count.value?.plus(1))
        database.insertAll(newEvent)
    }

    _count.value = (count.value)?.plus(1)
}

fun subtract() {

    viewModelScope.launch {
        val newEvent = Event(0, "subtract", count.value?.minus(1))
        database.insertAll(newEvent)
    }

    if (_count.value!! > 0) {
        _count.value = (count.value)?.minus(1)
    }
}

fun reset() {

    viewModelScope.launch {
        val newEvent = Event(0, "reset", count.value)
        database.insertAll(newEvent)
    }

    _count.value = 0
}

```

## Agregar recurso String

En nuestro archivo `string.xml` agregamos este recurso:

```xml
<string name="events_format">Eventos: %d</string>
```

## Actualizar layout

En nuestro layout agregamos una etiqueta para mostrar la cantidad de eventos que hemos guardado.

```xml
<TextView
  android:id="@+id/events_text"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
  android:layout_marginBottom="16dp"
  android:padding="16dp"
  android:text="@{@string/events_format(firstViewModel.events.size)}"
  android:textAlignment="center"
  android:textSize="18sp" />
```

## 🏠 Ejercicio

* Agregar una etiqueta para contar separadamente las sumas y restas.
