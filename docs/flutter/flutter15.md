---
id: flutter15
title: Formularios
---

A menudo los usuarios requieren ingresar información en la aplicación. Por ejemplo "Iniciar sesión" con su correo electrónico y contraseña. Para este tipo de funcionalidad vamos a utilizar `Forms`.

## Contenido

1. Crear un `Form` con un atributo `GlobalKey`.
2. Agregar un `TextFormField` con lógica de validación.
3. Crear un botón para validar y enviar el `Form`.

## Crear un widget

* Crear archivo llamado `basic_form_screen.dart`.

* Para iniciar vamos a crear un nuevo widget llamado `BasicFormScreen` que sea **Stateful**.

```dart
class BasicFormScreen extends StatefulWidget {
  const BasicFormScreen({Key? key}) : super(key: key);

  @override
  State<BasicFormScreen> createState() => _BasicFormScreenState();
}

class _BasicFormScreenState extends State<BasicFormScreen> {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

## Agregar GlobalKey

* Un widget `Form` es como un contenedor que agrupa y valida multiples campos o datos.

* Cuandro creamos un `Form` debemos prover un atributo `GlobalKey`. Este atributo identifica de forma única al formulario y permite la validación cuando sea necesario.

```dart
final _formKey = GlobalKey<FormState>();
```

* Agregamos un Form y agregamos `_formKey` a la propiedad `key`.

```dart

class _BasicFormScreenState extends State<BasicFormScreen> {

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Basic Form"),),
      body: Container(
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              // ...
            ],
          ),
        ),
      ),
    );
  }
}

```  

## Agregar un TextFormField

* Ahora que ya definimos un Form, agregaremos un `TextFormField` para que el usuario ingrese texto.

* En nuestro `TextFormField` proveemos una función `validator()` para validar si la información ingresada por el usuario cumple con las reglas que definamos.

```dart
TextFormField(
  validator: (value) {
    if (value == null || value.isEmpty) {
      return 'Ingrese algún dato';
    }
    return null;
  },
),
```

## Crear un botón y validar datos

* Ahora que ya definimos un `TextFormField`, agregaremos un boton para que el usuario pueda enviar la información.

* Cuando el usuario trata de enviar el `Form` se verifica si el Form es válido. Si se cumplen las condiciones mostramos un mensaje satisfactorio (con SnackBar) de lo contrario se despliegan mensejes de error.

```dart
ElevatedButton(
    onPressed: () {
      // La función validate() regresa true si el form es válido, de lo contrario es false
      if (_formKey.currentState!.validate()) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Enviando información'))
          );
      }
    },
    child: Text("Enviar")
),
```
