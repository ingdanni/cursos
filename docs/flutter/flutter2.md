---
id: flutter2
title: Introducción
---

Dart es un lenguaje de programación orientado a objetos, de propósito general y de código abierto con sintaxis de estilo C desarrollado por Google en 2011. El propósito inicial de Dart fue crear interafaces de usuario para la web y las aplicaciones móviles. Está en desarrollo activo, compilado en código de máquina nativo para crear aplicaciones móviles, inspirado en otros lenguajes de programación como Java, JavaScript, C# y está fuertemente tipado. Dado que Dart es un lenguaje compilado, no puede ejecutar su código directamente; en cambio, el compilador lo analiza y lo transfiere a código de máquina.

Admite la mayoría de los conceptos comunes de los lenguajes de programación como clases, interfaces, funciones, a diferencia de otros lenguajes de programación. El lenguaje Dart no admite matrices directamente. Admite la recopilación, que se utiliza para replicar la estructura de datos, como matrices, genéricos y tipos opcionales.

Para ejecutar los ejemplos usaremos [DartPad](https://dartpad.dev), un editor online para Dart.

## Variables

Se declaran usando la palabre reservada `var`:

```dart
var nombre = 'Carlos';
```

Otra opcion es especificar el tipo de dato explicitamente:

```dart
String nombre = 'Carlos';
```

## Constantes

Se pueden usar las palabras reservadas `final` o `const` para declarar una constante:

```dart
final nombre = 'Mario';
final String apellido = 'Perez';

const pi = 3.14159;
```

> La principal diferencia es que se usa `final` en vez de `const` si no conocemos el valor en tiempo de compilación y este será calculado en tiempo de ejecución.

## Tipos de datos

* Numbers (int, double)
* Strings (String)
* Booleans (bool)
* Lists (List, también se conoce como arreglo)
* Sets (Set)
* Maps (Map)

Algunos otros tipos también tienen roles especiales en el lenguaje **Dart**:

* `Object`: La superclase de todas las clases de Dart excepto Null.

* `Future y Stream`: se utilizan en la funcionalidades con asincronía.

* `Iterable`: se utiliza en bucles for-in y en funciones de generador síncrono.

* `Never`: indica que una expresión nunca puede terminar de evaluarse correctamente. Se usa con mayor frecuencia para funciones que siempre lanzan una excepción.

* `dynamic`: indica que desea deshabilitar la verificación estática.

* `void`: Indica que un valor nunca se utiliza. A menudo se utiliza como un tipo de devolución.

### String, int, double, bool
```dart
String nombre = 'Francisco';

// String con doble comilla
String apellido = "Fernandez";

int edad = 20;

double calificacion = 33.33;

bool aprobado = false;

print(nombre);
print(apellido);
print(edad);
print(calificacion);
print(aprobado);
```

### List

Son también conocidos como arreglos:

```dart
var lista = [1, 2, 3, 4];

print(lista.length); // imprime longitud de la lista
```

Tambien se puede especificar el tipo de dato de la lista:

```dart
List<int> lista = [1, 2, 3, 4];
```

Para crear una lista que es constante, agregamos `const` antes de los valores:

```dart
List<int> lista = const [1, 2, 3, 4];
```

### Maps

En general, un `map` es un objeto que asocia claves y valores. Tanto las claves como los valores pueden ser cualquier tipo de objeto. Cada clave aparece solo una vez, pero puede usar el mismo valor varias veces.

```dart
var persona = {
  // llave:    valor
  'nombre': 'Pedro',
  'apellido': 'Fernandezs',
  'direccion': 'alguna direccion...'
};

// tambien se puede declarar usando el constructor Map

var persona = Map<String, String>();

// se puede agregar valores de la siguiente forma
persona['nombre'] = 'Pedro';
```

Se puede definir como constante:

```dart
final alumnos = const {
  1: 'Maria',
  2: 'Juana',
  3: 'Mercedes',
};

// error al compilar
alumnos[1] = 'Jose';
```

## Funciones

Las funciones en Dart son objectos y tienen un tipo de dato. Esto quiere decir que se pueden pasar como parametro a otra función o se pueden asignar a una variable.

Se definen usando la nomenclatura:

```dart
// tipo de retorno + nombre
String saludar(/* parametros: Tipo + nombre */) {
  // cuerpo
  return val // valor de retorno
}
```

Ejemplo:

```dart
String saludar(String nombre) {
  return "Hola $nombre"; // concatenacion de Strings
}
```

## Ejercicio práctico

* Crear una función que reciba un número `double` y retorne el valor elevado al cubo.

* Crear una función que reciba un número `int` y evalue si es negativo o positivo.

* Explicar cual es el error en el siguiente código:

  ```dart
  Map<String, String> estudiante = {
    'nombre': 'Alex',
    'edad': 10,
  };

  print(estudiante);
  ```
