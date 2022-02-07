# App Architecture

## Proyecto Inicial

Para esta clase se necesita descargar el siguiente proyecto:

[⬇️  Proyecto - LiveData](../downloads/LiveData.zip)

## Introducción

Una arquitectura define algunos principios clave a los que debe ajustarse una buena aplicación de Android y también propone una ruta segura para que el desarrollador cree una buena aplicación. Una buena aplicación deberia proporcionar una separación solida de sus elementos y manejar la UI desde un modelo.

Cualquier código que no meneje una interfaz o una interacción del sistema operativo no debe estar en una actividad o fragmento y al mantenerlos limpios nos permite evitar muchos problemas relacionados con el ciclo de vida. Entonces los modelos deben estar aislados de la interaz de usuario.

## ViewModel

La clase `ViewModel` esta designada para almacenar y manejar los datos relacionados a la interfaz de usuario (UI). Cada fragmento debe tener asociado un `ViewModel`.

Vamos a agregar la dependencia `ViewModel` en nuestro archivo **build.gradle(module:app)** dentro del bloque de dependencias y sincronizamos:

```kotlin
implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.2.0'
```

## Crear ViewModel

1. En el directorio `first/` creamos una nueva clase kotlin llamada `FirstViewModel`.

2. Hacemos que esta clase herede de la clase `ViewModel`.

3. Agregamos la función `init {}`

4. Dentro de init agregamos un mensaje usando `Log.i()`

```kotlin
class FirstViewModel : ViewModel() {

    init {
        Log.i("Live data", "FirstViewModel creado...")
    }
}
```

### Sobrecargar onCleared

1. En nuestro FirstViewModel sobrecargamos la función `onCleared()`.

2. Agregamos dentro un mensaje usando `Log.i()`

```kotlin
override fun onCleared() {
    super.onCleared()

    Log.i("Live data", "FirstViewModel destruido...")
}
```

### Asociar ViewModel al fragmento

Un ViewModel necesita estar asociado a un fragmento o una actividad. Entonces creamos una referencia desde nuestro fragmento para este caso.

1. Agregar variable en la parte superior de nuestra clase en el fragmento.

```kotlin
private lateinit var viewModel: FirstViewModel
```

### Inicializar el ViewModel

Durante los cambios de configuración en el SO como la rotación de la pantalla, los fragmentos se destruyen y se vuelven a crear. Sin embargo las instancias de `ViewModel` sobreviven si son creados usando la clase `ViewModelProvider`.

Como funciona:

* `ViewModelProvider` nos regresa un ViewModel si existe o lo crea si no existe.

* `ViewModelProvider` crea una instancia asociada al fragmento o actividad.

A continuación se inicializa el ViewModel usando la función `ViewModelProvider.get()`:

1. En la clase FirstFragment dentro de `onCreateView()`, lo agregamos despues de la definición de `binding` de la siguiente forma.

```kotlin
viewModel = ViewModelProvider(this).get(FirstViewModel::class.java)
```

> 💡 IMPORTANTE: Al usar `::class.java` obtenemos una instanacia de una clase escrita en java que se puede llamar desde Kotlin.

## Datos en el ViewModel

* El ViewModel sobrevive a cambios de configuración, entonces es el lugar ideal para poner nuestros datos que se muestran en la pantalla y también para agregar la lógica de negocio.

* El ViewModel nunca debe tener referencia a un Fragmento o Actividad ya que estos no sobreviven a cambios de configuración.

Ahora debemos mover nuestros datos y funciones del Fragmento hacia nuestro ViewModel.

1. Movemos la variable `count`.

2. Movemos las funciones `add`, `subtract` y `reset`.

3. Nos aseguramos que las funciones no sean privadas.

```kotlin
class FirstViewModel : ViewModel() {

    var count: Int = 0

    init {
        Log.i("Live data", "FirstViewModel creado...")
    }

    override fun onCleared() {
        super.onCleared()

        Log.i("Live data", "FirstViewModel destruido...")
    }

    fun add() {
        count++
    }

    fun subtract() {
        if (count > 0) {
            count--
        }
    }

    fun reset() {
        count = 0
    }
}
```

En nuestro Fragmento eliminamos la variable `count` y actualizamos las referencias quedando de la siguiente forma:

```kotlin
private fun setScore() {
   binding.countText.text = viewModel.count.toString()
}

private fun add() {
   viewModel.add()

   setScore()
}

private fun subtract() {
   viewModel.subtract()

   setScore()
}

private fun reset() {
   viewModel.reset()

   setScore()
}
```

## Resultado

Si corremos la app veremos que al girar la pantalla se mantiene el valor de `count`, el ViewModel permite que los datos sobrevivan al cambio de configuración.
