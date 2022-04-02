---
id: flutter7
title: Widgets - parte 3
---

## Mostrar imagen de perfil

1. En el archivo `imagen_perfil_widget.dart` creamos un stateless widget llamado `ImagenPerfil`.

2. Definimos un variable llamada `url` de tipo `String`.

3. Dentro del método `build` retornamos un `Container` con padding de 20 a cada lado, un `Center` para centrar la imagen, un `CircleAvatar` para mostrar la imagen de forma redonda y un `NetworkImage` para obtener una imagen desde internet.

```dart
import 'package:flutter/material.dart';

class ImagenPerfil extends StatelessWidget {

  final String url;

  ImagenPerfil({
    required this.url
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(20),
      child: Center(
        child: CircleAvatar(
          radius: 100,
          backgroundImage: NetworkImage(url),
        ),
      ),
    );
  }
}

```

4. Agregamos una instancia de `ImagenPerfil` dentro de nuestro `ListView` en la pantalla de perfil.

```dart
ImagenPerfil(url: "https://images.dog.ceo/breeds/boxer/IMG_0002.jpg"),
```

## Mostrar información del perfil

1. En el archivo `informacion_perfil_widget.dart` agregamos un stateless widget llamado `InformacionPerfil`.

2. Se definen 3 variables `nombre`, `email` y `telefono`.

3. En el método `build` retornamos la siguiente structura `Container` > `Column` > `[Text]` con sus respectivas configuraciones de estilos.

```dart
import 'package:flutter/material.dart';

class InformacionPerfil extends StatelessWidget {

  final String nombre;
  final String email;
  final String telefono;

  InformacionPerfil({
    required this.nombre,
    required this.email,
    required this.telefono
  });

  @override
  Widget build(BuildContext context) {
    return  Container(
      child: Column(
        children: [
          // nombre
          Text(
            nombre,
            style: TextStyle(
              fontSize: 26,
              color: Colors.black38,
              fontWeight: FontWeight.bold,
            ),
          ),
          // email
          Text(
            email,
            style: TextStyle(
                fontSize: 16
            ),
          ),
          // telefono
          Text(
            telefono,
            style: TextStyle(
                fontSize: 16
            ),
          ),
        ],
      ),
    );
  }
}
```

4. Agregamos la información del perfil en el ListView de la pantalla principal.

```dart
InformacionPerfil(
  nombre: "Ada Stark",
  email: "adastark@gmail.com",
  telefono: "+505 99665588"
),
```

## Mostrar menu de opciones

1. En el archivo `opcion_menu_widget.dart` agregar un stateless widget llamado `OpcionMenu`.

2. Declaramos 2 variables `icon` de tipo `Icon` (es un widget) y `text` de tipo `String`.

3. El método build retorna un `Container` > `Row` > `Icon`, `SizedBox`, `Text`

```dart
import 'package:flutter/material.dart';

class OpcionMenu extends StatelessWidget {

  OpcionMenu(this.icon, this.text);

  final Icon icon;
  final String text;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(20), // padding a cada lado
      child: Row(
        children: [
          icon,

          SizedBox(width: 20,), // espacio entre icono y texto

          Text(
            text,
            style: TextStyle(color: Colors.black54, fontSize: 20),),
        ],
      ),
    );
  }
}
```

4. Agregar diferentes opciones a nuesto `ListView` de la pantalla principal:

```dart

OpcionMenu(
    Icon(Icons.favorite, color: Colors.red,),
    "Favoritos"
),

OpcionMenu(
    Icon(Icons.person, color: Colors.green,),
    "Contactos"
),

OpcionMenu(
    Icon(Icons.phone, color: Colors.blue,),
    "Llamadas"
),

OpcionMenu(
    Icon(Icons.notifications_on, color: Colors.deepOrange,),
    "Notificaciones"
),

OpcionMenu(
    Icon(Icons.message, color: Colors.blueAccent,),
    "Mensajes"
),

OpcionMenu(
    Icon(Icons.place, color: Colors.amber,),
    "Ubicaciones"
),

OpcionMenu(
    Icon(Icons.card_giftcard, color: Colors.lightGreen,),
    "Puntos acumulados"
),

```

## Ejercicio práctico

* Agregar 3 botones (`ElevatedButton`) en la parte inferior de la pantalla con las siguientes opciones:

1. Pausar cuenta
2. Eliminar cuenta
3. Cerrar sesión
