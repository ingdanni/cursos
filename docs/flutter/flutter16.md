---
id: flutter16
title: Formularios y Estilos
---

Por defecto un `TextFormField` es decorado con un linea en la parte inferior, pero también podemos agregrar un icono, etiquetas o texto de sugerencia agregando un `InputDecoration` en la propiedad `decoration`.

## Crear Widget

* Crear un archivo llamado `styled_form_screen.dart`.

* Crear un widget llamado `StyledFormScreen` que sea **stateful**.

```dart

class StyledFormScreen extends StatefulWidget {
  const StyledFormScreen({Key? key}) : super(key: key);

  @override
  State<StyledFormScreen> createState() => _StyledFormScreenState();
}

class _StyledFormScreenState extends State<StyledFormScreen> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Styled Form"),),
      body: Container(),
    );
  }
}
```

* Agregamos a nuestro widget un GlobalKey:

```dart
final _formKey = GlobalKey<FormState>();
```

* Dentro del Container agregamos nuestro Form:

```dart
@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(title: const Text("Styled Form"),),
    body: Container(
        padding: const EdgeInsets.all(16),
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
```

## Agregar TextFormFields

* Agregamos nuestro primer `TextFormField` para ingresar el correo electrónico:

```dart
TextFormField(
  keyboardType: TextInputType.emailAddress,
  decoration: const InputDecoration(
    border: OutlineInputBorder(),
    hintText: 'Ingrese su correo'
  ),
  validator: (value) {
    if (value == null || value.isEmpty) {
      return 'Ingrese su correo electrónico';
    }

    return null;
  },
),
```

* Agregamos nuestro segundo `TextFormField` para ingresar la contraseña:

```dart
TextFormField(
  obscureText: true,
  decoration: const InputDecoration(
      border: OutlineInputBorder(),
      hintText: 'Ingrese su contraseña'
  ),
  validator: (value) {
    if (value == null || value.isEmpty) {
      return 'Ingrese su contraseña';
    }

    return null;
  },
),
```

* Para agregar un espacio entre los TextFields podemos agregar un `SizedBox`:

```dart
const SizedBox(height: 16),
```

## Agregar botón enviar

Para validar y enviar los datos agregamos un `ElevatedButton`:

```dart
ElevatedButton(
    onPressed: () {
      // ...
    },
    child: const Text("Iniciar sesión")
),
```

## TextEditingController

Para acceder al valor (texto) de nuestros `TextFields` podemos usar un `TextEditingController` que siempre esta escuchando cambios en `TextField` correspondiente.

### Crear TextEditingController

Definimos un Controller para cada TextField en nuestro widget:

```dart
final emailController = TextEditingController();
final passwordController = TextEditingController();
```

### Llamar a método dispose()

Se sobreescribe el método `dispose()` del widget para limpiar los TextFields cuando se remueve el widget de la pantalla:

```dart
@override
void dispose() {
  emailController.dispose();
  passwordController.dispose();
  super.dispose();
}
```

### Asignar controllers

Para cada TextField debemos asignar su controlador correspondiente a través de la propiedad `controller`:

```dart
TextFormField(
  controller: emailController,
  // ...
),

TextFormField(
  controller: passwordController,
  // ...
),
```

### Acceder al valor del controller

En el método `onPressed` del botón enviar agregamos la siguiente validacion:

```dart
// Si todos los datos son correctos se debe mostrar un AlertDialog
if (_formKey.currentState!.validate()) {
  showDialog(context: context, builder: (context) {
    // Accedemos al valor de cada Controller con la propiedad Text.
    return AlertDialog(
      content: Text("Email: ${emailController.text}, password: ${passwordController.text}"),
    );
  });
}
```

## Tarea en clases

Usando el ejemplo anterior:

* Agregar validación para la contraseña (que tenga más de 6 caracteres) de lo contrario mostrar un mensaje de error que diga: "La contraseña debe contener más de 6 caracteres"

* Agregar un ícono (Icons.person) al InputDecoration del correo electrónico.

* Agregar un ícono (Icons.key) al InputDecoration de la contraseña.

* Por debajo de los TextFields agregar un componente `Switch` con una etiqueta que diga "Recordar usuario y contraseña" y manejar su correspondiente estado *true* o *false*.
