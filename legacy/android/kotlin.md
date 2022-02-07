# Introducción al lenguaje Kotlin


> NOTA: para esta sesión se pueden ejecutar los ejemplos de código en el [Playgorund de Kotlin](https://play.kotlinlang.org/)

## Función main

La función `main` es el punto de entrada a cualquier programa hecho en Kotlin.

```kotlin
fun main() {
  println("Hello world")
}
```

## Imprimir valores en la salida estandar

```kotlin

// Imprime un valor
print("Hello world")

// println imprime y agrega un salto de linea al final

println("Hello")
println("world")

```

## Variables

Variables de solo lectura usan la palabra reservada `val`. Solo pueden ser asignadas una sola vez.

```kotlin
val a: Int = 1
val b = 2 // el tipo Int es inferido

// Se declara y luego se inicializa
val c: Int
c = 3
```

Variables que pueden ser reasignadas (su valor cambia) usan la palabra reservada `var`.

```kotlin
var x = 5
x += 1

var y = 10
y = 10 + 5
```

## Tipos de datos

**Enteros**: se especifican con la palabra reservada `Int`

```kotlin
val one: Int = 1
```

**Flotante**: se especifican con la palabra reservada `Double`.

```kotlin
val pi: Double = 3.1416
```

**Booleano**: se especifican con la palabra reservada `Boolean`.

```kotlin
var isStudent: Boolean = true
```

**Caracteres**: Se representan con la palabra reservada `Char` y van dentro de comilla simple.

```kotlin
val a: Char = 'a'
```

**Cadenas**: Se representan con la palabra reserva `String` y van dentro de comillas doble.

```kotlin
val name: String = "Roberto Gomez"

// String con salto de linea
val s = "Hello world!\n"

// String con varias lineas
val code = """
    for (c in "foo")
        print(c)
"""
```

String templates: una cadena puede contener valores concatenados.

```kotlin
val i = 10
println("i = $i")
// Imprime "i = 10"
```

o podemos utilizar llaves `{}`:

```kotlin
val s = "abc"

println("La longitud de $s es ${s.length}")
// Imprime: La longitud de abc es 3
```

## Arreglos

Se definen con la palabra reservada `Array`

```kotlin
var array: Array<Int> = arrayOf(0, 1, 2, 3, 4)

println("Longitud de array: ${array.count()}")

for (i in 0 until array.count()) {
    println(array[i])
}

/*
Longitud de array: 5
0
1
2
3
4
*/
```

## Condicionales if-else

Para evaluar condiciones podemos usar `if` y `else`.

```kotlin
val points = 61

if (points >= 60) {
    print("Aprobado!! 🍻")
} else {
	print("Ha reprobado. Gracias!")    
}
```

## Sentencia When

Sirve para evaluar en diferentes variantes. Es el equivalente a `switch` en otros lenguajes.

```kotlin
val points = 101

// evaluamos rangos con 'in'

when (points) {
  in 90..100 -> print("Excelente")
  in 80..89 -> print("Muy bueno")
  in 70..79 -> print("Bueno")
  in 60..69 -> print("Malo")
  in 0..59 -> print("Reprobado")
  else -> print("Indefinido")
}

val platform = "Android"

// evaluamos el valor directamente

when (platform) {
  "iOS" -> println("Usamos Swift")
  "Android" -> println("Usamos Kotlin")
  "Flutter" -> println("Usamos Dart")
  "React Native" -> println("Usamos Javascript")
  else -> println("No sé que usar")
}

// evaluamos un condicional (como un reemplazo de if, else)

when {
  platform == "iOS" -> println("Usamos Swift")
  platform == "Android" -> println("Usamos Kotlin")
  platform == "Flutter" -> println("Usamos Dart")
  platform == "React Native" -> println("Usamos Javascript")
  else -> print("No sé que usar")
}
```
