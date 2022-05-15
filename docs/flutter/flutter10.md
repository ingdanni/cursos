---
id: flutter10
title: Navegación - Parte 2
---

En el ejercicio anterior, aprendimos a navegar hacia una ruta usando `Navigator.push()`. Sin embargo es posible usar otro enfoque llamado `rutas nombradas` en las que se definen nombres para cada una de nuestras rutas, por ejemplo: `/`, `/inicio` o `/carrito`. Las rutas nombradas son muy similares a las rutas en `html` en aplicaciones web.

## Navegar con rutas nombradas

1. Para comenzar agregamos un archivo `ThirdScreen.dart` y agregamos el siguiente widget:

```dart
class ThirdScreen extends StatelessWidget {
  const ThirdScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Tercera pantalla'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // pop
          },
          child: const Text('Regresar!'),
        ),
      ),
    );
  }
}
```

2. En el archivo `main.dart` cambiamos la definición dentro del widget `MaterialApp` de la siguiente forma:

```dart
// 1. Borramos la propiedad home
// home: const FirstScreen(),

// 2. Definimos la ruta inicial
initialRoute: '/',

// 3. Definimos las rutas nombradas
routes: {
  '/': (context) => const FirstScreen(),
  '/third': (context) => const ThirdScreen(),
},
```

3. En el widget `FirstScreen` agregamos otro botón:

```dart
ElevatedButton(
  child: const Text('Ir a Tercera pantalla'),
  onPressed: () {
    // pushNamed
  },
),
```

4. Dentro de la función `onPressed` llamamos al widget `Navigator` con la función `pushNamed`

```dart
Navigator.pushNamed(context, '/third');
```
