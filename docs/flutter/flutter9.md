---
id: flutter9
title: Navegación - Parte 1
---

Flutter tiene un mecanismo de enrutamiento, el widget `Navigator`, para navegar entre pantallas que nos muestran diferente información. Por ejemplo: una app que nos muestra Productos, cuando el usuario presiona la imagen de un producto, una nueva pantalla despliega una pantalla con detalles de ese mismo producto.

> En flutter, se les llama `rutas` a las pantallas o páginas entre las que se esté navegando.

En Android, una ruta equivale a un `Activity` y en iOS equivale a un `ViewController`. En Flutter, una ruta es solo un `Widget`.

## Crear rutas

1. Crear un archivo llamado `FirstScreen.dart` y agregar la siguiente pantalla:

```dart
class FirstScreen extends StatelessWidget {

  const FirstScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Primer ruta'),
      ),
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              child: const Text('Ir a segunda pantalla'),
              onPressed: () {
                // Agregar navegación
              },
            ),

          ],
        )
      ),
    );
  }
}
```

2. Crear un archivo llamado `SecondScreen` y agregar la siguiente pantalla:

```dart
class SecondScreen extends StatelessWidget {

  const SecondScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Segunda pantalla'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navegar hacia atrás
          },
          child: const Text('Regresar!'),
        ),
      ),
    );
  }
}
```

3. Modificar el archivo `main.dart` para que `FirstScreen` sea nuestra pantalla inicial:

```dart
class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Navigation',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const FirstScreen(),
    );
  }
}
```

## Navegar hacia una ruta

En la función `onPressed` del botón de nuestra primer pantalla invocamos al Widget `Navigator` y el método `push` para realizar la navegación:

```dart
Navigator.push(context, MaterialPageRoute(builder: (context) => const SecondScreen()));
```

## Regresar a la primer pantalla

En la función `onPressed` del botón de nuestra segunda pantalla invocamos al widget `Navigator` y el método `pop` para regresar a la primer pantalla:

```dart
Navigator.pop(context);
```
