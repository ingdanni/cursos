---
id: flutter18
title: UNP app - parte 2
---

## Descargar proyecto

Descargar proyecto en el siguiente [ENLACE](./assets/unp_app.zip)

## Navigation Drawer

* En el archivo `main_navigation_screen.dart` vamos a consultar la API para obtener la información del usuario, a través del endpoint `/auth/user`.

* Declaramos una variable llamada usuario dentro de la clase `_MainNavigationScreenState`

```dart
late Future<UserResponse> usuario;
```

* Luego dentro del método initState() llamamos al servicio correspondiente `AuthService` y el método `getUser()` y asignamos a la variable `usuario`:

```dart
@override
void initState() {
  super.initState();

  usuario = AuthService.getUser();
}
```

### Mostrar información del usuario

* Dentro del método `build()` vamos a editar y agregar un widget `FutureBuilder`

```dart
@override
Widget build(BuildContext context) {

  return FutureBuilder<UserResponse>(
    future: usuario,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          return buildContent(snapshot.data!);
        } else {
          return const Center(
            child: CircularProgressIndicator(),
          );
        }
      });
}
```

* Por último actualizamos el método `buildContent()` para que reciba una variable llamada `usuario` de tipo `UserResponse`. De esta forma tendremos la información del usuario lista para mostrarse en el Navigation Drawer y actualizamos los valores correspondientes.

```dart
Widget buildContent(UserResponse usuario) {
  // ...
  // ...
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      SizedBox(
        height: 60,
        width: 60,
        child: CircleAvatar(
          backgroundImage: NetworkImage(usuario.picture),
        ),
      ),

      const SizedBox(height: 16,),

      Text("${usuario.name} ${usuario.lastname}", style: TextStyle(color: Colors.white),),

      const SizedBox(height: 4,),

      Text(usuario.email, style: TextStyle(color: Colors.white, fontSize: 12),),
    ],
  ),
  // ...
  // ...
}
```

## Asignación 2

* Editar las pantallas home, history y teachers para mostrar la información correspondiente del API para cada una, haciendo uso de los servicios previamente definidos.

* En cada pantalla se muestran en forma de lista y para cada fila de la lista agregar un widget `Card`.

* Agregar estilos según estime conveniente.
