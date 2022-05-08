---
id: flutter8
title: Stateful widgets
---

* Un widget en Flutter puede ser **Stateless** o **Stateful**. Si el widget cambia cuando el usuario interactua con el entonces es **Stateful**.

* Un **Stateless** widget nunca cambia, por ejemplo un **Icon**, **IconButton** o **Text** son Stateless.

* Un **Stateful** widget es dinámico, por ejemplo puede cambiar su apariencia en respuesta a eventos realizados por el usuario o cuando recibe datos. **Checkbox**, **Radio**, **Slider** o **TextField**.

* El estado de un Widget se almacena en un objeto `State`, separando así el estado del widget de su apariencia (UI). El estado consste en valores que pueden cambiar. Cuando el estado de un widget cambia, se llama el método `setState()` para actualizar la apariencia (UI) del widget.

## Creando un Stateful Widget

1. En Stateful widget está definido por 2 clases: una subclase de `StatefulWidget` y otra subclase de `State`.

2. La clase state contiene el estado mutable del widget y el método `build()`.

Ejemplo de stateful widget:

```dart
// Hereda de la clase StatefulWidget
class Inicio extends StatefulWidget {
  const Inicio({Key? key}) : super(key: key);

  // Sobreescribe el metodo createState()
  // ya que este widget manejara su propio estado.
  // Retorna una instancia de _InicioState.

  @override
  State<Inicio> createState() => _InicioState();
}
```

Ejemplo de subclase state:

```dart

class _InicioState extends State<Inicio> {

  // Almacena los datos que son mutables.
  int _contador = 0;

  void _incrementarContador() {

    // Se llama a setState() para indicar que el estado ha cambiado.

    setState(() {
      _contador++;
    });
  }

  // Método build en el que se define el UI

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text("Contador"),
      ),
      body: Center(

        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            // Cuando el estado cambia, se actualiza el UI.
            Text('Has presionado el boton $_contador veces'),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementarContador,
        tooltip: 'Incrementar',
        child: const Icon(Icons.add),
      ),
    );
  }
}
```

> NOTA: Las clases o variables que comienzan con guión bajo (_) en Dart tienen un nivel de acceso privado. Por ejemplo: `_InicioState`.
