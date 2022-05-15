---
id: flutter13
title: ListView
---

Es un widget que nos permite mostrar una lista widgets y permite hacer scroll de la pantalla. Podemos definir sus hijos a través de la propiedad `children`.

```dart
class EstudiantesScreen extends StatelessWidget {
  const EstudiantesScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Lista de estudiantes"),
      ),
      body: ListView(
        children: [
          ListTile(
            title: Text("Maria Perez"),
            subtitle: Text("Ing. Industrial"),
            leading: Icon(Icons.school),
            onTap: () {
                // Evento tap del usuario
            },
          ),

          ListTile(
            title: Text("Mario Rodriguez"),
            subtitle: Text("Lic. en Contabilidad"),
            leading: Icon(Icons.school),
            onTap: () {

            },
          ),
        ],
      ),
    );
  }
}
```

> El widget `ListTile` es un widget que representa una fila (item) de una lista. Tipicamente contiene texto e iconos a la derecha e izquierda.

## ListView Builder

Para trabajar con listas largas y/o dinámicas podemos utilizar `ListView Builder`, que a diferencia del constructor convencional que crea todos los elementos de una vez, `ListView builder` los crea mientras se va haciendo scroll en la pantalla.

```dart
class EstudiantesScreen extends StatelessWidget {

  const EstudiantesScreen({Key? key, required this.estudiantes}) : super(key: key);

  final List<String> estudiantes;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Lista de estudiantes"),
      ),
      body: ListView.builder(
        itemCount: estudiantes.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(estudiantes[index]),
          );
        })
    );
  }
}
```

## Ejercicio práctico

Usando ListView builder del ejemplo anterior:

* Cuando el usuario presione el nombre del estudiante se debe navegar hacia otra pantalla.

* Se debe enviar como parámetro el nombre del estudiante y mostrarlo en la otra pantalla.
