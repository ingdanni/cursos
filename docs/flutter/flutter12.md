---
id: flutter12
title: BottomNavigationBar
---

Es un widget que se muestra en la parte inferior de la pantalla y nos permite seleccionar entre una cantidad de vistas, tipicamente son entre 3 y 5 vistas. El BottomNavigationBar está conformado de múltiples items que pueden contener una etiqueta de texo, un ícono o ambos. Este componente provee una navegación rápida entre las vistas principales de una app.

```dart
class BottomNavigationScreen extends StatefulWidget {
  const BottomNavigationScreen({Key? key}) : super(key: key);

  @override
  State<BottomNavigationScreen> createState() => _BottomNavigationState();
}

class _BottomNavigationState extends State<BottomNavigationScreen> {

  // controla el indice seleccinado para mostrar la vista correspondiente
  int _indiceSeleccionado = 0;

  static const TextStyle optionStyle =
  TextStyle(fontSize: 30, fontWeight: FontWeight.bold);

  // Lista de widgets que se van a mostrar
  static const List<Widget> _opciones = <Widget>[
    Text(
      'Página 1',
      style: optionStyle,
    ),
    Text(
      'Página 2',
      style: optionStyle,
    ),
    Text(
      'Página 3',
      style: optionStyle,
    ),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _indiceSeleccionado = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('BottomNavigationBar ejemplo'),
      ),
      body: Center(
        child: _opciones.elementAt(_indiceSeleccionado),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Página 1',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.business),
            label: 'Página 2',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.school),
            label: 'Página 3',
          ),
        ],
        currentIndex: _indiceSeleccionado,
        selectedItemColor: Colors.amber[800],
        onTap: _onItemTapped,
      ),
    );
  }
}
```
