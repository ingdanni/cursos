# Manipulación del DOM - Parte 2

## Función createElement

La función `createElement` crea un elemento HTML especificado por el nombre de la etiqueta. Su sintaxis básica es:

```js
var elemento = document.createElement('div');
```

### Ejemplo 1

1. Vamos a crear un directorio nuevo con los archivos `index.html` e `index.js` respectivos.

2. En nuestro archivo `index.js` creamos la siguiente función:

```js
function crearProductoSimple(nombre) {

}
```

3. Dentro de la función creamos un elemento `div`:

```js
var div = document.createElement('div');
```

4. Creamos un nodo de texto para asignarlo a nuestro `div` con el nombre del producto:

```js
var text = document.createTextNode(nombre);
```

5. Usando la función `appendChild` le agregamos el nodo de texto a nuestro `div`:

```js
div.appendChild(text);
```

6. Luego agregamos nuestro `div` al body del documento:

```js
document.body.appendChild(div);
```

7. Al inicio de nuestro `index.js` agregamos la función `onload` y dentro llamamos nuestra función `crearProductoSimple`:

```js
window.onload = function() {
  crearProductoSimple("iPhone 12 pro max");
}
```

8. Recargar nuestro `index.html` en el navegador para ver el resultado.

### Ejemplo 2

1. Agregar el siguiente arreglo de objetos en nuestro archivo `index.js`:

```js
const productos = [
    {
        id: 1,
        nombre: "Producto A",
        descripcion: "desc: poducto A",
        precio: 100,
    },
    {
        id: 2,
        nombre: "Producto B",
        descripcion: "desc: poducto B",
        precio: 200,
    },
    {
        id: 3,
        nombre: "Producto C",
        descripcion: "desc: poducto C",
        precio: 300,
    }
];
```

2. Agregar una función llamada `crearProductoCompleto`:

```js
function crearProductoCompleto(producto) {

}
```

3. Dentro de la función creamos un elemento `div` y le agregamos un *id* y una *clase*:

```js
var div = document.createElement('div');
div.id = producto.id;
div.className = "producto";
```

4. Luego agregamos los elementos para definir el **nombre, precio y descripción** del producto:

```js
var nombre = document.createElement('h1');
nombre.innerText = producto.nombre;

var precio = document.createElement('p');
precio.innerText = producto.precio;

var descripcion = document.createElement('p');
descripcion.innerHTML = '<strong>'+ producto.descripcion +'</strong>'

```

5. Luego agregamos nuestros elementos al `div`:

```js
div.appendChild(nombre);
div.appendChild(precio);
div.appendChild(descripcion);
```

6. Por último se agrega el `div` al body del documento:

```js
document.body.appendChild(div);
```

7. Para llamar a nuestra función `crearProductoCompleto` podemos usar un `forEach` para recorrer cada elemento de nuestro arreglo `productos` dentro de la función `onload`:

```js
productos.forEach(producto => {
    crearProductoCompleto(producto);
});
```

## Función remove

* Para cada uno de nuestros productos vamos a agregar un botón para "eliminar", entonces dentro de la función `crearProductoCompleto` agregamos el siguiente elemento:

```js
var botonBorrar = document.createElement('button');
botonBorrar.innerText = "Eliminar"
```

* Agregamos un `Event Listener` al elemento `botonBorrar`:

```js
botonBorrar.addEventListener('click', function(evento) {
    // se busca por id y se remueve el elemento
    var elemento = document.getElementById(producto.id);
    elemento.remove();
});
```

* Por último se agrega el botón al div:

```js
div.appendChild(botonBorrar);
```

## Event listener keyup

1. En nuestro HTML vamos a agregar los siguientes elementos:

```html
<h1>Ingresar clave</h1>

<input type="password" id="clave">

<p id="mensaje"></p>

<button id="mostrarClave">Mostrar clave</button>
```

2. Creamos una referencia al elemento con `id` igual a `clave`:

```js
var elemento = document.getElementById("clave");
```

3. Agregamos un `Event listener` que escuche el evento `keyup` del elemento `input`:

```js
elemento.addEventListener('keyup', function(evento) {

});
```

4. Obtenemos el valor del input:

```js
var clave = document.getElementById("clave").value;
```

5. Creamos una referencia al elemento con `id` igual a `mensaje`:

```js
var mensaje = document.getElementById("mensaje");
```

6. Agregamos la siguiente validación para determinar si la clave escrita cumple cierta regla:

```js
if (clave.length > 8) {
    mensaje.innerText = "La clave es valida.";
    mensaje.style.color = 'green';
} else {
    mensaje.innerText = "Clave debe tener al menos 8 caracteres.";
    mensaje.style.color = 'red';
}
```

## Event listener click

1. En nuestro HTML tenemos un botón con `id` igual a `mostrarClave`, entonces creamos una referencia:

```js
var mostrarClave = document.getElementById("mostrarClave");
```

2. Agregamos un Event Listener que escuche el evento `click`:

```js
mostrarClave.addEventListener('click', function(evento) {

});
```

3. Creamos una referencia al elemento input con `id` igual a `clave`:

```js
var clave = document.getElementById("clave");
```

4. Creamos una validación para el atributo `type` para cambiar su valor entre `text` y `password`:

```js
if (clave.type == "password") {
    clave.type = "text";
} else {
    clave.type = "password";
}
```

## Funciones de flecha

La sintaxis de flecha (Arrow functions) es una manera más corta de definir una función. Por ejemplo:

```js
// Forma normal
function elevarAlCuadrado(numero) {
    return numero * numero;
}

// Tipo flecha
var elevarAlCuadrado = (numero) => numero * numero;
```

Si el cuerpo de la función es de varias lineas podemos usar `{ }` y un `return`

```js
var elevarAlCuadrado = (numero) => {
  // varias lineas
  return numero * numero
};
```

## Callbacks

Un callback es una función que se pasa como argumento a otra función. Generalmente se ejecuta cuando otra función ha terminado.

```js
function imprimir(valor) {
    console.log(valor);
}

function mostrarAlerta(valor) {
    alert(valor);
}

function multiplicar(a, b, callback) {
    var resultado = a * b;
    // Esta operacion podria tardar varios segundos

    callback(resultado);
}
```

## 🏠 Tarea

1. Investigar que son las promesas en Javascript (promises).

2. Retomar el proyecto realizado sobre `Responsive Design` y agregar el producto principal y productos relacionados usando Javascript.

Ejemplo:

```js
// definir variable producto

var producto = {
  nombre: "",
  precio: 0,
  // etc...
}

// definir otra variable productos relacionados
var productosRelacionados = [
    // varios elementos
];

// crear funciones para agregar los elementos a HTML
```
