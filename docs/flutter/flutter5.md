---
id: flutter5
title: Widgets - parte 1
---

## Estructura del proyecto

En un proyecto inicial de Flutter tendremos los siguientes directorios:

* `android`: este folder contiene un proyecto nativo de Android que es usado para ejecutar la aplicación en **Android**. En este caso el código Flutter es compilado e inyectado en este proyecto de Android, teniendo como resultado una aplicación Android nativa.

* `ios`: este folder contiene un proyecto nativo de XCode para ejecutar la aplicación en **iOS**. Al igual que en Android se compila y se inyecta el código Flutter para tener un aplicación iOS nativa.

* `lib`: dentro de este folder vamos a encontrar archivos `.dart` que contienen el código de nuestra aplicación. Acá es donde vamos a trabajar todo lo relacionado a nuestro proyecto y funcionalidades.

* `test`: contiene código relacionado a pruebas unitarias.

* `web`: contiene archivos relacionados al proyecto web de Flutter, que desde la versión 2.0 nos permite crear aplicaciones web. En este caso el código se compila y traduce a HTML, CSS y Javascript para crear una Single Page Application (SPA).

* Archivo `pubspect.yaml`: es el archivo de configuración y lo usaremos para:

  * Definir configuraciones generales del proyecto como nombre, descripción o versión.
  * Administrar dependencias (librerias).
  * Administrar assets (recursos) que deberan estar disponibles en nuestro proyecto.

* `.metadata` y `packages.md`: son archivos autogenerados para rastrear propiedades y dependencias del proyecto de Flutter. Nunca lo vamos a editar manualmente.

### Archivos .dart

Al crear archivos con `.dart` para nuestras clases o widgets se deben nombre con nomenclatura `snake case` en minúscula. Por ejemplo al tener 2 clases de la siguiente forma:

```dart
// estudiante.dart
class Estudiante {

}

// estudiante_regular.dart
class EstudianteRegular {

}
```

El nombre del archivo sería `estudiante.dart` y en el caso de nombres compuestos como `EstudianteRegular` el nombre del archivo sería `estudiante_regular.dart`.

## Widgets

Para construir una aplicación en Flutter, debemos usar o crear Widgets que son los componentes de la interfaz de usuario. Los widgets describen como se deberian ver depediendo de su configuración y estado (state). Cuando el estado de un Widget cambia, el widget se actualiza al hacer la transición de un estado a otro.

## Widgets esenciales

* `MaterialApp`: es un Widget que define una aplicación que usa `Material Design` y configura un navegador de nivel superior para aplicación.

* `Scaffold`: implementa la estructura visual de Material Design. Provee diferentes opciones para nuestro layout como Barras de navegacion, botones flotantes.

```dart
MaterialApp(
  home: Scaffold(
    appBar: AppBar(
      title: Text('Titulo')
    ),
    body: Center(
      child: MyWidget(),
    ),
  ),
)
```

## Widgets básicos

Flutter por defecto viene con un conjunto de Widgets, de los cuales los más usados son los siguientes:

* `Text`: nos permite crear texto con estilos en nuestra app.

```dart
Text('Texto simple'),
```

* `Center`: nos permite centrar otro widget que este anidado dentro.

```dart
Center(
    child: Text('Texto Simple'),
),
```

* `Row, Columns`: nos permiten crear layouts flexibles en dirección vertical y horizontal.

Ejemplo con Row:
```dart
Row(
    children: [
      Text('Elemento 1'),
      Text('Elemento 2'),
      Text('Elemento 3'),
    ]
),
```

Ejemplo con Column:
```dart
Column(
    children: [
      Text('Elemento 1'),
      Text('Elemento 2'),
      Text('Elemento 3'),
    ]
),
```

* `Container`: nos permite crear un elemento visualmente rectangular. Puede tener `margin`, `padding` y un tamaño definido.

```dart
Container(
  padding: EdgeInsets.all(5),
  margin: EdgeInsets.only(top: 10),
  child: Text('Esto es un container'),
),
```

> NOTA: La clase **EdgeInsets** especifica los desplazamientos en términos de bordes visuales, izquierdo, superior, derecho e inferior.

* `TextButton`: nos permite crear un elemento de tipo botón con una etiqueta de texto. Por defecto no tiene bordes:

```dart
TextButton(
    onPressed: () {

    },
    child: const Text('Botón 1'),
),
```

* `TextField`: nos permite crear un elemento para ingresar texto.

```dart
TextField(
  decoration: InputDecoration(
    border: OutlineInputBorder(),
    labelText: 'Nombre',
  ),
),
```

## Stateful y Stateless widgets

Un Widget puede ser stateful (con estado) o stateless (sin estado). Si un widget puede cambiar mientras el usuario interactua con este, entonces es stateful.

Un stateless Widget nunca cambia. Por ejemplo Icon, IconButton o Text son stateless widgets. Estos heredan de la clase `StatelessWidget`.

Un stateful widget es dinámico. Por ejemplo pueden cambiar de apariencia en respuesta a eventos causados por interacción del usuario o cuando reciben información. Por ejemplo: Checkbox, Radio, Slider, TextField son stateful widgets. Estos hereadan de la clase `StatefulWidget`.

## Clase práctica

* Crear un stateless widget llamado `Calculadora`.

* Usar los Widgets vistos anteriormente para crear un interfaz con la siguiente estructura:

![Imagen](/img/flutter/calc.jpeg)

* Investigar como agregar estilos al Widget `Text`.
