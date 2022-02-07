# Manipulación del DOM - Parte 1

## ¿Qué es el DOM?

El DOM (Document Object Model) representa una interfaz de programación para documentos web y permite que programas (navegadores) puedan cambiar la estructura, estilo y contenido. El DOM representa un documento en forma de nodos y objetos, de esta forma los lenguajes de programación (como javascript) pueden interactuar con la página.

## Window y Document

La interfaz `Window` representa una ventana que contiene un documento; la propiedad `document` representa el documento cargado en esta ventana.

Una variable global llamada `window` representa la ventana en la que esta ejecutandose nuestro código javascript. En un navegador con varias pestañas, cada pestaña contiene su propio objeto `window`.

## Window onload

La propiedad `onload` es un manejador de eventos que procesa los enventos de carga en una ventana (window).

Ejemplo:

```js
window.onload = function() {
  console.log("Se ha cargado la ventana.");
}
```

## Window location

Estable u obtiene la ubicación o URL actual del objeto window.

Ejemplo:

```js
console.log(window.location);
```

## Window innerHeight/innerWidth

La propiedad `innerHeight` retorna el valor de la altura interior de la ventana en pixeles, incluyendo la altura de la barra de scroll horizontal si está presente. En el caso del ancho de la venta se usa la propiedad `innerWidth`.

Ejemplo:

```js
console.log(window.innerHeight);
console.log(window.innerWidth);
```

## Window onrize

Se encarga de manejar los eventos `resize` que se ejecutan cada vez que la ventana cambia de tamaño.

```js
window.onresize = function() {
    console.log('altura: ' + window.innerHeight);
    console.log('anchura: ' + window.innerWidth);
}
```

## Document querySelector

Retorna el primer elemento dentro del documento que coincida con el selector o selectores especificados. Si no hay coincidencias retorna `null`.

Teniendo los siguientes elementos HTML:

```html
<p id="ancho"></p>
<p id="alto"></p>
```

Podemos manipular el contenido de esos elementos:

```js
var alto = document.querySelector("#alto");
var ancho = document.querySelector("#ancho");

alto.textContent = window.innerHeight;
ancho.textContent = window.innerWidth;
```

La propiedad `textContent` representa el contenido de texto de un nodo.

## Document querySelectorAll

Retorna una lista con los elementos en el documento que coinciden con el selector.

Teniendo los siguiente elementos HTML:

```html
<p>Parrafo 1</p>
<p>Parrafo 2</p>
<p>Parrafo 3</p>
```

Accedemos a los elementos `p`:

```js
const parrafos = document.querySelectorAll("p");

// con la propiedad length obtenemos la longitud de un arreglo.
console.log(parrafos.length);
```

## Event listener

Podemos ejecutar algunas instrucciones al ocurrir un evento en alguno de los elementos por ejemplo al hacer clic sobre un botón, usando la función `addEventListener`.

Teniendo los siguientes elementos HTML:

```html
<button id="btnAlert">Mostrar alerta</button>
<button id="btnConfirm">Mostrar confirmación</button>
```

Agregamos un event listener a cada elemento:

```js
const btnAlert = document.getElementById('btnAlert');

btnAlert.addEventListener('click', function (event) {
    // agregar instrucciones
});

const btnConfirm = document.getElementById('btnConfirm');

btnConfirm.addEventListener('click', function (event) {
    // agregar instrucciones
});
```

## Window alert

El método `alert()` muestra un mensaje en nuestra ventana con un botón **OK**. Sirve para revelar información relevante al usuario.

```js
alert("Esto es un mensaje.");
```

## Window confirm

El método `confirm()` despliega un mensaje al usuario, con un boton **OK** y otro botón **Cancelar**. Se usa cuando el usuario debe verificar o aceptar algo.

Si el usuario presiona **OK** retorna `true` y si presiona **Cancel** retorna `false`.

```js
var resultado = confirm("Cerrar sesión?");

console.log(resultado);
```

## Tarea

Investigar y agregar un ejemplo sobre:

1. Función `getElementsByClassName`
2. Funciones `createElement`, `setAttribute` y `getAttributeNames`.
3. Función `remove` y atributo `hidden`.
