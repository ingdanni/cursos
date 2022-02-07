# Introducción a Javascript

* **Javascript** es un lenguaje de alto nivel creado por **Brendan Eich** de la empresa **Netscape** en 1995.
* Es un lenguaje multiparadigma y que soporta compilación **Just in time**, esto quiere decir que se compila mientras se ejecuta.
* Junto con **HTML y CSS** son las bases de las tecnologías web.
* Se adhiere al estandar **ECMAScript** para asegurar la interoperabilidad de las páginas web en los diferentes navegadores.
* **Javascript** no tiene ninguna relación con el lenguaje **Java**.
* Un archivo de **Javascript** utiliza la extension `.js`.

## Etiqueta script

1. Creamos un directorio para nuestro proyecto con un archivo `index.html`.

2. Dentro creamos un directorio `js` y agregamos un archivo llamado `index.js`.

3. En nuestro `index.html` dentro de la etiqueta `head` agregamos nuestro archivo `index.js` usando la etiqueta `script`:

```html
<script src="js/index.js"></script>
```

4. En nuestro archivo `index.js` agregamos la siguiente instrucción:

```js
console.log("Se ha cargado index.js");
```

5. En google chrome cargamos la página, hacemos clic derecho, seleccionamos inspeccionar elemento y seleccionamos la pestaña `Console`. Podremos ver que se imprime el mensaje que hemos mandado.

## Variables y constantes

Las variables se declaran haciendo uso de la palabra reservada `var` y asignamos un valor haciendo uso del signo `=`.

```js
// Declaración
var x;

// asignación
x = 10;

// Declaración y asignación
var x = 10;

console.log(x);
```

Una constante se declara haciendo uso de la palabra reservada `const` y asignamos un valor haciendo uso del signo `=`.

```js

const y = 10;

console.log(y);
// el valor de y no puedo cambiar una vez que ha sido asignado
```

## Operadores

Los operadores principales para hacer operaciones matemáticas son:

1. Suma `+`
2. Resta `-`
3. Multiplicación `*`
4. División `/`

Ejemplo:

```js
var suma = 100 + 200;
var resta = 20 - 10;
var mult = 100 * 1;
var division = 50 / 5;
```

## Cadenas

Una cadena de texto se representa siempre dentro de comillas dobles, por ejemplo: `"Cadena"`.

```js

var nombre = "Donald";
var apellido = "Trump";

// Concatenar cadenas
const nombreCompleto = nombre + " " + apellido;
```

## Booleanos

Un valor booleano puede ser representado como `true` o `false`:

```js
var verdadero = true;
var mentira = false;
```

## Arreglos

Se definen los valores de un arreglo haciendo uso de corchetes `[]` y sus valores separados por comas `,`.

```js
var personas = ["Juan", "Pedro", "Marcos"]

var numeros = [1, 2, 3, 4]
```

## Undefined

Indica que a una variable no se ha asignado ninguna valor.

```js
var car;

console.log(car);

car = "Ford";

console.log(car);
```

## Funciones

Se definen con la palabra reservada `function` y cuando devuelven un valor se hace con la palabra reservada `return`.

```js
function elevarAlCuadrado(numero) {
    return numero * numero;
}

var valor = elevarAlCuadrado(2);
```

## Objetos

Son variables, pero pueden contener varios valores o propiedades. Se definen haciendo uso de llaves `{}`:

```js
var alumno = {
    nombre: "John",
    apellido: "Kennedy",
    edad: 68,
    aprobado: false
};

// acceder al objeto
console.log(alumno);

// Acceder a una propiedad
console.log(alumno.nombre);
console.log(alumno.edad);

// Otra forma de acceder a una propiedad
console.log(alumno["nombre"]);
```
## if / else

Nos permite ejecutar acciones dependiendo de una o varias condiciones.

```js
var edad = 20;

if (edad > 18) {
    console.log("Es mayor de edad.")
}

// if con else
if (edad > 18) {
    console.log("Es mayor de edad.")
} else {
    console.log("Es menor de edad.")
}
```

## Switch

También nos permite ejecutar acciones dependiendo de una o varias condiciones.

```js
var dia = 0;
var diaNombre = "";

switch (dia) {
  case 0:
      diaNombre = "Domingo";
      break;
  case 1:
      diaNombre = "Lunes";
      break;
  case 2:
      diaNombre = "Martes";
      break;
  case 3:
      diaNombre = "Miercoles";
      break;
  case 4:
      diaNombre = "Jueves";
      break;
  case 5:
      diaNombre = "Viernes";
      break;
  case 6:
      diaNombre = "Sabado";
      break
  default:
      diaNombre = ""
}
```

## 🧑‍💻 Clase práctica

1. Investigar sobre los ciclos `for`, `for in` y `while` en Javascript.

2. Realizar una función que reciba 3 números y nos devuelva el mayor.

3. Determinar que pasa cuando sumamos los siguientes valores: `"cadena" + 1 + 2`.

4. Leer y analizar sobre el `HTML DOM`.
