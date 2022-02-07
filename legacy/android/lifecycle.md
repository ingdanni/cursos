# Ciclo de vida

Cada actividad y fragmento tiene su propio ciclo de vida, es decir diferentes estados por los que puede pasar. Desde que una vista es creada por primera vez hasta que es destruida y liberada de la memoria del sistema.

Cada vez que el usuario abre la app, navega entre actividades, con diferentes fragmentos e incluso sale de la app, las actividades cambian de estado. El siguiente diagrama nos muestra los diferentes estados del ciclo de vida de un activity:

![image](./images/53.png)

En algunas ocasiones necesitamos cambiar algunos comportamientos o ejecutar algún código cuando el estado cambia. Es por eso que la clase `Activity` y cualquier subclase de `Activity` implementan una serie de funciones relacionadas al ciclo de vida. El sistema invoca estas funciones cada vez que una activity cambia de un estado a otro, y podemos sobreescribir estas funciones en nuestras actividades cuando necesitemos ejecutar tareas en cada cambio de estado. El siguiente diagrama nos muestra las funciones relacionadas a cada uno de los estados en el ciclo de vida:

![image](./images/54.png)

Los fragmentos también tienen un ciclo de vida, muy similar al de las actividades. El siguiente diagrama nos muestra el ciclo de vida de un fragmento:

![image](./images/55.png)

## Clase "Log"

La clase `Log` escribe mensajes en el Logcat. La ventana Logcat se encarga de desplegar mensajes (logs) en tiempo de ejecución sobre los procesos que ocurren en nuestra app y mantiene un historial de los mismos. También muestra mensajes que nosotros agreguemos en nuestro código.

En la clase `Log` tenemos 3 puntos a tomar en cuenta:

1. La importancia del mensaje.

* `Log.i()`: escribe un mensaje informativo.
* `Log.e()`: escribe un mensaje de error.
* `Log.w()`: escribe un mensaje de advertencia.

2. La etiqueta: es una cadena de texto que nos permite buscar nuestros mensajes más facilmente en el logcat. Generalmente se indica el nombre de la clase desde donde se ejecuta.

3. El mensaje: es una cadena que indica lo que queremos enviar al logcat.

## onCreate()

La función se ejecuta una sola vez, cuando la actividad es inicializada (cuando el objeto es creado en memoria).

Después de ejecutar esta función la actividad se considera "creada". Dentro de esta función podemos inflar el layout, definir click listeners y configurar el data binding.

Vamos a localizar la función onCreate en la clase MainActivity. Luego de la linea `super.onCreate()`, agregamos la siguiente linea de código:

```kotlin
Log.i("MainActivity", "Se ejecuta onCreate...")
```

## onStart()

Esta función se llama después de `onCreate()` y luego que se llama la actividad es visible en la pantalla. A diferencia de `onCreate()` que solo se llama una vez al inicializar, `onStart()` se llama muchas veces en el ciclo de vida de tu actividad.

En Android Studio sobre nuestra clase `MainActivity.kt`, seleccionamos el menu Code > Override methods, nos aparece un dialogo y podemos buscar la función en una lista con todos las funciones disponibles para esta clase, seleccionamos `onStart()` y damos clic en OK.

![image](./images/56.png)

La función se agrega a nuestra clase de la siguiente forma:

```kotlin
override fun onStart() {
    super.onStart()
}
```

Luego agregamos dentro la siguiente linea:

```kotlin
Log.i("MainActivity", "Se ejecuta onStart...")
```

## onResume()

La función `onResume()` se ejecuta después de `onStart()` cuando la actividad está en primer plano y el usuario puede interacturar con la app.

Agregamos la siguiente función en nuestra clase:

```kotlin
override fun onResume() {
    super.onResume()

    Log.i("MainActivity", "Se ejecuta onResume...")
}
```

## onPause()

La función `onPause()` se ejecuta cuando el usuario deja de interactuar con la actividad (ya no está en primer plano). Generalmente se da cuando hay alguna interrupción como una llamada telefónica, usamos esta función para pausar algún proceso.

Agregamos la función a nuestra clase:

```kotlin
override fun onPause() {
    super.onPause()

    Log.i("MainActivity", "Se ejecuta onPause...")
}
```

## onStop()

Se ejecuta cuando la actividad ya no es visible para el usuario. Ocurre por ejemplo cuando navega hacia otra actividad que cubre toda la pantalla. Dentro de esta función podemos parar cualquier funcionalidad que no necesitamos mientras la actividad no esté visible por ejemplo las animaciones ahorrando recursos para el sistema.

Agregamos la función a nuestra clase:

```kotlin
override fun onStop() {
    super.onStop()

    Log.i("MainActivity", "Se ejecuta onStop...")
}
```

## onDestroy()

Se ejecuta cuando una actividad es destruida completamente, por ejemplo:

1. Al cerrar una actividad navegando hacia atrás.

2. El sistema la destruye temporalmente debido a la rotación de la pantalla.

3. Cuando matamos la App.

Agregamos la siguiente función a nuestra clase:

```kotlin
override fun onDestroy() {
    super.onDestroy()

    Log.i("MainActivity", "Se ejecuta onDestroy...")
}
```
