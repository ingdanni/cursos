
# Introducción a Kotlin - Parte 2

## Funciones

Se declaran con la palabra reservada `fun`:

```kotlin

fun double(x: Int): Int {
  return 2 * x
}

```

Los parametros se agregan especificando el `nombre`: `tipo` y cuando hay mas de un parametro se separan por comas:

```kotlin

fun sum(a: Int, b: Int): Int {
  return a + b
}

val result = sum(1, 2)
```

### Parámetros predeterminados

Se agrega un valor predeterminado usando `=` despues del tipo de dato.

```kotlin
fun sendMessage(message: String = "Hello world") {
    println(message)
}

sendMessage() // imprime "Hello world"

sendMessage("Hola mundo") // imprime "Hola mundo"

```

### Parametros nombrados

Al llamar una función se puede especificar el nombre de cada parámetro, exactamente igual a la definición de la función. De esta forma nos ayuda a tener nuestro código legible cuando tenemos varios parámetros en una función.

```kotlin
fun main() {
    sendMessage()
    sendMessage(title = "Alert", message = "this is a message")
    sendMessage(message = "This is a message")
    sendMessage(title = "Error")
    sendMessage(title = "Error", "This is a message")
    sendMessage("title", "message")
}

fun sendMessage(title: String = "Alert", message: String = "Hello world") {
    println(title)
    println(message)
}

```

### Funciones de expresión única

Se pueden omitir las llaves `{}` en el cuerpo de la funcion cuando esta solo retorna una expresión simple. Agregando el cuerpo despues del símbolo `=`.

  ```kotlin
  fun main() {
      println(double(2))
      println(sum(2, 5))
  }

  fun double(x: Int): Int = x * 2

  fun sum(a: Int, b: Int) = a + b

  ```

### Funciones genéricas

Pueden tener parámetros genéricos, que se especifican entre `<>` antes del nombre de la función:

`fun <T> functionName(parameter: T)`

Por ejemplo:

```kotlin
fun main() {
	printValue(1)
    printValue("abc")
    printValue(5.0)
    printValue(false)
    printValue<Boolean>(true)
    printValue<Int>(100)
}

fun <T> printValue(a: T) {
	println("El valor de a es $a")
}

/*
El valor de a es 1
El valor de a es abc
El valor de a es 5.0
El valor de a es false
El valor de a es true
El valor de a es 100
*/

```

## Ciclos

### Ciclo for

El ciclo `for`itera sobre cualquier elemento que array.

```kotlin
var collection: Array<Int> = arrayOf(1, 2, 3)

for (item in collection) {
    println(item)
}
```

Itera sobre un rango de números:

```kotlin
for (i in 1..10) {
    println(i)
}

// i inicia en 10 baja hasta 0 y se disminuye en 2 cada iteración
for (i in 10 downTo 0 step 2) {
    println(i)
}

// i inicia en 0 sube hasta 10 y se incrementa en 2 cada iteración
for (i in 0 until 10 step 2) {
    println(i)
}
```

Itera sobre los indices de un arreglo:

```kotlin
var collection: Array<Int> = arrayOf(10, 20, 30)

for (index in collection.indices) {
    println(collection[index])
}
```

Alternativamente podemos usar la función `withIndex()`:

```kotlin
var collection: Array<Int> = arrayOf(10, 20, 30)

for ((index, value) in collection.withIndex()) {
    println("Indice: $index, valor: $value")
}
```

### Ciclos while

Existe 2 variantes `while` y `do while`:

* `while`: valida la condición, si es `true` ejecuta el cuerpo.

```kotlin
var x = 10

while (x > 0) {
    println(x)
    x--
}

```

* `do while`: ejecuta el cuerpo y luego valida la condición. Siempre se ejecuta al menos una vez.

```kotlin
var x = 10

do {
  println(x)
  x--
} while (x > 0)
```

## Clases

Una clase se declara con la palabra reservada `class`:

```kotlin
class Person {

}
```

### Constructores

Los constructores son un tipo de función que nos ayuda a inicializar las propiedades de una clase.

Una clase puede tener un constructor primario y uno o varios constructores secundarios. El primario se define en el encabezado después del nombre de la clase.

```kotlin
class Person constructor(val name: String)

val person = Person("Mark")

println(person.name)

// Mark
```

También podemos omitir la palabra reservada `constructor`:

```kotlin
class Pet (val name: String)

var pet = Pet("Rocky")

println(pet.name)
// Rocky
```

Las propiedades en el constructor pueden ser diferentes a las propiedades de la clase:

```kotlin
class Person(name: String) {
    val fullname: String = name.uppercase()
}

val person = Person("Mark Twain")    

println(person.fullname)
// MARK TWAIN

println(person.name) // nos marca error, solamente se usa en el constructor.
```

Cuando tenemos varias propiedades en una clase, separamos por coma cada una en el constructor. Tambien podemos asignar valores por defectos a las propiedades:

```kotlin
class Person(
    val name: String,
    val lastname: String,
    val age: Int = 0,
)

val mark = Person("Mark", "Twain", 30)

var jeff = Person("Jeff", "Bezos")

println(mark.name)
println(mark.lastname)
println(mark.age)

println(jeff.name)
println(jeff.lastname)
println(jeff.age)

/*
Mark
Twain
30

Jeff
Bezos
0
*/
```

### Init

Las propiedades también pueden inicializarse en bloques `init`.

```kotlin
class Person(
    name: String,
    lastname: String,
    _age: Int = 0,
) {

   	val fullname: String
    val age: Int

    init {
        fullname = "$name $lastname".uppercase()
        age = _age

        println("Init: se inicializa con name = $name y age = $_age")
    }
}
```

### Constructores secundarios

Una clase puede tener constructores secundarios, se declaran con el prefijo `constructor`.

Cada constructor secundario necesita delegar en el constructor primario, ya sea directa o indirectamente a través de otro (s) constructor (es) secundario (s). La delegación a otro constructor de la misma clase se realiza mediante la palabra clave `this`.

```kotlin
class Login(var name: String, var password: String) {

    var token: String = ""

    constructor(_name: String, _password: String, _token: String) : this(_name, _password) {
        this.token = _token
    }
}
```
