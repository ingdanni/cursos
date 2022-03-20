---
id: flutter3
title: Introducción - parte 2
---

## Funciones con párametros nombrados

Al llamar una función podemos asignar un valor a cada parámetro usando su nombre, con la diferencia que los parámetros de la función se definen entre llaves `{}`:

```dart
void enviarEmail({ String? msj }) {
  print(msj);
}

enviarEmail(msj: "Prueba"); // prueba
enviarEmail(); // null
```

Los parámetros nombrados son opcionales por defecto, pero se puede agregar la palabra reservada `required` para definir que son requeridos:

```dart
void enviarSMS({ required String msj }) {
  print(msj);
}

enviarSMS(msj: "Prueba sms"); // Prueba sms
enviarSMS(); // error
```

## Interpolación de cadenas

Podemos agregar el valor de una variable dentro de una cadena usando `$`:

```dart
var nombre = "Mary";

print('Hola $nombre');
```

En el caso de una expresión podemos usar `${}`:

```dart
var nombre = "Mary";

print('Hola ${nombre.toUpperCase()}');

print('2 + 2 = ${ 2 + 2 }');
```

## Cadenas multilineas

Para crear una cadena multilinea podemos usar triple comilla simple o triple comilla doble:

```dart
var mensaje = '''
  Esto es un mensaje
  con varias lineas
  ....
''';

print(mensaje);

var ejemplo = """
  2x1 = 2
  2x2 = 4
  ....
""";

print(ejemplo);
```

## Expresiones condicionales

Para evaluar una condición usamos if/else:

```dart
var nota = 55;

if (nota > 59) {
  print('Aprobado');
} else {
  print('Reprobado');
}
```

Cuando necesitamos asignar un valor en base a una expresión condicional podemos usar `?` y `:`

```dart
var msj = nota > 59 ? 'Aprobado' : 'Reprobado';

print(msj);
```
