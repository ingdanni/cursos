---
id: flutter6
title: Widgets - parte 2
---

## Imports

En flutter podemos usar paquetes propios del Framework o bien paquetes desarrollados por otros e incorporados a nuestro proyecto.

Es por eso que nuestro archivo `main.dart` comienza con la siguiente linea:

```dart
import 'package:flutter/material.dart';
```

En esta instrucción definimos que vamos a importar el paquete `material` de `flutter` (en este caso para utilizar los componentes de UI).

## Imports relativos

Se refieren a importar cualquier archivo dentro del folder `lib` en nuestro proyecto.

Por ejemplo:

```dart
// en el mismo directorio
import 'calculadora.dart'

// en un subdirectorio
import 'math/operaciones.dart'

// en un subdirectorio del directorio padre
import '../ui/botones.dart'
```

## Configurar proyecto inicial

1. Crear un proyecto de flutter ya sea en Android Studio o Flutlab.

2. En nuesto archivo `main.dart` vamos a definir clase llamada `App`, la cual es el punto de partida de nuestra app:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {

  const App({Key? key}) : super(key: key);

  // Este widget es la raiz de nuestra app
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Widgets',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text("Widgets part 2"),
        ),
        body: Container(),
      ),
    );
  }
}
```

3. En el folder `lib` creamos un archivo llamado `perfil_screen.dart`.

4. En el folder `lib` creamos un folder llamado `widgets`.

5. Dentro del folder `widget` vamos a crear 3 archivos:

  * imagen_perfil_widget.dart
  * informacion_perfil_widget.dart
  * opcion_menu_widget.dart

> NOTA: Para identificar de forma fácil nuestros archivos podemos agregar el sufijo `_screen` cuando el widget sea una pantalla completa y el sufijo `_widget` cuando sea una porción de la pantalla.

## Configurar pantalla principal

En el archivo `perfil_screen.dart` vamos a crear un Stateless Widget llamado `PerfilScreen`. En el método build tendremos un `Container` y dentro un `ListView`.

El widget `ListView` nos permite mostrar un grupo de elementos de forma lineal con scroll habilitado.

```dart
import 'package:flutter/material.dart';

class PerfilScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView(
        children: [
          // Imagen de perfil

          // Informacion de perfil

          // opciones

          // botones

        ],
      ),
    );
  }
}

```
