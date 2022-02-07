# Debugging

```js

function configurarBotonSumar() {
  var botonSumar = document.getElementById('boton-sumar');

  botonSumar.addEventListener('click', function() {
    var mensaje = document.getElementById('mensaje');

    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    if (num1 === "" && num2 === "") {
      mensaje.style.color = "red";
      mensaje.innerText = "Ingrese ambos números"
      return;
    }

    var resultado = sumar(num1, num2);

    mensaje.style.color = "blue";
    mensaje.innerText = "El resultado es: " + resultado;
  });
}

function sumar(a, b) {
  return a + b;
}

function obtenerUsuarios() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((usuarios) => {
      console.log(usuarios);
    });
}
```

# Funciones de arreglos

```js
var personas = ["Pedro", "Pablo", "Juan", "Maria", "Julia"];

// join
console.log(personas.join(', '));

// pop
personas.pop();
console.log(personas);

// push
personas.push('Mariana');
console.log(personas);

// shift
personas.shift();
console.log(personas);

// unshift
personas.unshift('Milena');
console.log(personas);

// length
console.log(personas.length);

// concat
var estudiantes = ['Alicia', 'Melisa', 'Luis']
var todos = personas.concat(estudiantes);

console.log(todos);

todos = todos.concat('Sebastian');
console.log(todos);

// sort
todos.sort();
console.log(todos);

// reverse
todos.reverse();
console.log(todos);

```

# Clases y objetos

Una clase es una especie de plantilla que nos servirá para crear objetos de forma ya predefinida.

Las clases se utilizan para representar entidades o conceptos. Por ejemplo usuario, noticia, categoría, partida, imagen, mensaje, lo que sea, básicamente sirve para representar cualquier sustantivo, cualquier entidad.

Cada clase tiene definida una serie de variables y de funciones, o mejor dicho de atributos y métodos, métodos que operan con los atributos de la clase.
La clase sirve para crear objetos, cada objeto creado de la clase, lo llamaremos una instancia de la clase.

```js
class Persona {

  constructor(nombre, apellidos, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
    console.log(`Tengo ${this.edad} años`);
  }

  imprimirNombreCompleto() {
    console.log(`${this.nombre} ${this.apellidos}`);
  }
}

var persona = new Persona('Manuel', 'Lopez', 40);
console.log(persona);

persona.saludar();
persona.imprimirNombreCompleto();
```
