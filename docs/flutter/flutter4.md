---
id: flutter4
title: Clases y objetos
---

Una clase se declara con la palabra reservada `class` y puede contener variables de instancia.

```dart
class Persona {
  String? nombre;
  String? apellidos;
  int edad = 0;
}
```

Para crear una instancia y darle valores a las variables lo hacemos de la siguiente forma:

```dart
var p1 = Persona();

p1.nombre = "Mary";
p1.apellidos = "Johnson";
p1.edad = 30;
```

## Constructor

Se declaran creando una función con el mismo nombre de la clase.

```dart
class Persona {
  String? nombre;
  String? apellidos;
  int edad = 0;

  Persona(String nombre, String apellidos, int edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }
}
```

Otra forma más corta de definir un constructor es:

```dart
class Persona {
  String? nombre;
  String? apellidos;
  int edad = 0;

  Persona(this.nombre, this.apellidos, this.edad);
}

```

## Constructores nombrados

Se usa un constructor con nombre para implementar múltiples constructores para una clase o para brindar mayor claridad:

```dart
class Persona {
  String? nombre;
  String? apellidos;
  int edad = 0;
  String? cedula;

  Persona(this.nombre, this.apellidos, this.edad, this.cedula);

  // constructor nombrado
  Persona.sinCedula(this.nombre, this.apellidos, this.edad);
}

// Instancia
var p1 = Persona.sinCedula("Erick", "Johnson", 20);
```

## Métodos de instancia

Son funciones a las que se pueden acceder desde las instancias de una clase.

```dart
class Persona {
  String? nombre;
  String? apellidos;
  int edad = 0;
  String? cedula;

  Persona(this.nombre, this.apellidos, this.edad, this.cedula);

  Persona.sinCedula(this.nombre, this.apellidos, this.edad);

  void saludar() {
    print('Hola, mi nombre es $nombre');
  }
}

var p1 = Persona.sinCedula("Mike", "Rose", 20);

p1.saludar();
```

## Herencia

Se usa la palabra reservada `extends` para crear una subclase y `super` para referirse a la clase padre.

```dart
class Persona {
  String? nombre;
  String? apellidos;
  int edad = 0;
  String? cedula;

  void saludar() {
    print('Hola, mi nombre es $nombre $apellidos');
  }
}

class Estudiante extends Persona {
  String? carne;
  String? carrera;

  @override
  void saludar() {
    super.saludar();

    print('Mi carrera es $carrera');
  }
}

var p1 = Estudiante();

p1.nombre = "Maria";
p1.apellidos = "Perez";
p1.carne = "001-002";
p1.carrera = "Ing. Industrial";

p1.saludar();
```

## Extension methods

Sirven para agregar funcionalidad a ciertas librerias o clases ya existentes.

```dart
extension OperacionesMatematicas on int {

  int alCubo() {
    return this * this * this;
  }

  int alCuadrado() {
    return this * this;
  }

}
```

Ejemplo 2:

```dart
class Ventana {
  // Implementacion existente
}

extension Alertas on Ventana {

  void mostrarError(String msj) {
    print(msj);
  }

  void mostrarAdvertencia(String msj) {
    print(msj);
  }
}

var iniciarSesion = Ventana();

iniciarSesion.mostrarAdvertencia('Datos incorrectos');
iniciarSesion.mostrarError('El usuario no existe');
```

## Clase práctica

* Usando ciclo `for` imprimir todos los números múltiplos de 3.

* Crear un `extension method` para tipos `double` que retorne el mismo valor con el signo contrario. Ejemplo: si el valor es 1 retornar -1.

* Teniendo la siguiente clase `Imagen` agregar un `extension method` que se llame `cargarDesdeURL` e imprima el valor de la URL recibida:

  ```dart

  class Imagen {

    void redimensionar(double alto, double ancho) {
      // ...
    }

    void cargarDesdeArchivoLocal(String nombre) {
      print('El nombre del archivo es $nombre');
    }
  }
  ```

* Teniendo la siguiente clase `Boton`, crear 2 subclases `BotonRedondo` y `BotonFlotante`. Agregar sus respectivos constructores y sobrecargar el método `onTap`.

  ```dart
  class Boton {

    String? titulo;
    String? icono;
    String? colorDeFondo;

    void onTap() {
      print('Usuario presiono el botón');
    }
  }
  ```

* Definir la diferencia entre una función y un método.
