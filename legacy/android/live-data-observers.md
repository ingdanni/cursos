
# LiveData y LiveData Observers

En esta sección utilizamos el proyecto finalizado de la sección anterior: [App Architecture](./app-architecture.html).

## El patrón Observer

El patrón de Observer es un patrón de diseño de software. Especifica la comunicación entre los objetos: un observable (el "sujeto" de observación) y los observadores. Un observable es un objeto que notifica a los observadores sobre los cambios en su estado.

![image](./images/57.png)

`LiveData` es una clase que contiene un dato Observable y que está pendiente del ciclo de vida. Por ejemplo podemos definir la variable `count` dentro de un LiveData.

Algunas caracteristicas de `LiveData` son:

* Es un `Observable`, esto significa que emite notificaciones cuando su valor es actualizado.

* Puede ser usado con cualquier tipo de dato.

* Puede tener `Observers` que escuchan sus cambios de estado o actualizaciones.

## Agregar LiveData

1. En la clase FirstViewModel cambiamos el tipo de dato de `count` a `MutableLiveData`.

2. Inicializamos su valor a través de la propiedad `value`.

```kotlin

var count = MutableLiveData<Int>()

init {
  ...
  count.value = 0
}

```

3. En la función `add()` cambiamos la operación de suma por la función `plus()`.

```kotlin
count.value = (count.value)?.plus(1)
```

4. En la función `subtract()` cambiamos la operación de suma por la función `minus()`.

```kotlin
if (count.value!! > 0) {
    count.value = (count.value)?.minus(1)
}
```

5. En la función `reset()` agregamos la propiedad value:

```kotlin
fun reset() {
    count.value = 0
}
```

6. En nuestro fragmento también agregamos la propiedad value:

```kotlin
binding.countText.text = viewModel.count.value.toString()
```

## Adjuntar Observers a objetos LiveData

Ahora que `count` es un tipo `LiveData` podemos agregar un `Observer` en el Fragmento.

1. Dentro de `onCreateView()` agregamos un Observer y usamos una expresion Lambda para simplificar el codigo. (Una expresión Lambda es una función anónima que no es declarada, pero se pasa inmeditamente como una expresión).

```kotlin
viewModel.count.observe(viewLifecycleOwner, Observer { newValue ->
    binding.countText.text = newValue.toString()
})
```

## Encapsular LiveData

Encapsular es una manera de restringir el acceso a algunos campos. Cuando encapsulamos un objeto, exponemos un conjunto de funciones publicas que pueden modificar los campos privados. De esta forma controlamos como otras clases manipulan los campos internos.

Actualmente en nuestro ViewModel cualquier clase externa podría modificar la variable `count` usando la propiedad `value` pero la forma correcta seria controlar el acceso sobre los datos en nuestro `ViewModel`.

Solamente el ViewModel deberia poder editar los datos en la App mientras que los Fragmentos o Actividades solamente necesitan leer los datos. Para esto usaremos `MutableLiveData` y `LiveData`:

* Un objeto de tipo `MutableLiveData` puede cambiar dentro del ViewModel, entonces debe ser editable.

* Usamos un objecto `LiveData` para que los datos sean leidos pero no cambiados desde fuera del ViewModel. Deben ser legibles pero no editables.

Para lograrlo agregamos:

1. Una variable `_count` de tipo `MutableLiveData` que sea privada.

2. Actualizamos `count` para que haga uso de un `getter` que se utiliza para retornar un valor.

3. Actualizamos las referencias de `count` hacia `_count`.

```kotlin
private var _count = MutableLiveData<Int>()

val count: LiveData<Int> get() = _count
```

```kotlin
fun add() {
    _count.value = (count.value)?.plus(1)
}

fun subtract() {
    if (_count.value!! > 0) {
        _count.value = (count.value)?.minus(1)
    }
}

fun reset() {
    _count.value = 0
}
```
