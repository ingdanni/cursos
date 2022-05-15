---
id: flutter11
title: Navegación - Parte 3
---

El widget `Navigator` tiene la facilidad de agregar argumentos a una ruta nombrada. Por ejemplo: en una lista de productos cuando navegamos al detalle del producto, necesitamos saber cual es el producto seleccionado.

## Rutas nombradas con parámetros

1. Definimos una clase `Argument` para definir un objeto que pasaremos entre rutas.

```dart
class Argument {
  final String title;
  final String content;

  Argument(this.title, this.content);
}
```

2. Declaramos un widget llamado `FourthScreen` que internamente procesa u obtiene los argumentos que pasamos para ser usados dentro del widget.

```dart
class FourthScreen extends StatelessWidget {

  const FourthScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {

    final args = ModalRoute.of(context)!.settings.arguments as Argument;

    return Scaffold(
      appBar: AppBar(
        title: Text(args.title),
      ),
      body: Center(
        child: Text(args.content),
      ),
    );
  }
}
```

3. Por último agregamos un nuevo botón en nuestra ruta inicial para navegar y pasar nuestro objeto de tipo `Argument`.

```dart
ElevatedButton(
   child: const Text('Ir a Cuarta pantalla'),
   onPressed: () {
     Navigator.pushNamed(
         context, // se pasa el contexto
         '/fourth', // nombre de la ruta
         arguments: Argument("Pantalla 4", "Esto es una prueba de rutas nombradas con parámetros") // argumentos o parámetros
    );
   },
),
```
