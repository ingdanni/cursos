# Javascript asíncrono

Para comprender el término `asíncrono` debemos comprender también que es `síncrono`. Las funcionalidades que hemos estudiado hasta ahora son operaciones síncronas, es decir se van ejecutando de forma secuencial tan pronto como sea posible en el navegador.

Por otro lado las operaciones `asíncronas` son aquellas en las cuales no sabemos el tiempo exacto que tomará obtener un resultado. Por ejemplo al obtener algún recurso de un dispositivo externo como un archivo desde internet, acceder a una base de datos remota, acceder a un video en streaming, etc...

## Promesas

Las promesas son una de las formas en que podemos trabajar promesas asíncronas en JS. Una promesa tiene 2 resultados posibles: se obtiene un resultado cuando llegue un determinado momento o no (rechazada).

Una promesa es un objeto y tiene 3 estados:

* `Pendiente`: estado inicial, antes de que la promesa tenga éxito o falle.
* `Resuelto`: Promesa completada.
* `Rechazado`: promesa fallida.

![./images/3.png](./images/3.png)

Por ejemplo, cuando solicitamos datos del servidor mediante una Promesa, estará en modo pendiente hasta que recibamos nuestros datos.

Si logramos obtener la información del servidor, la Promesa se resolverá con éxito. Pero si no obtenemos la información, entonces la Promesa estará en el estado rechazado.

Además, si hay múltiples solicitudes, luego de que se resuelva (o rechace la primera Promesa), comenzará un nuevo proceso al que podemos adjuntarlo directamente mediante un método llamado **encadenamiento**.

### Ejemplo de una promesa

```js
function calcularDistancia(posicion) {

    return new Promise(function (resolve, reject) {
        if (posicion > 0) {
            var distancia = posicion * 60 * 60 * 24;
            // se cumple la promesa
            resolve(distancia);
        } else {
            var mensaje = 'Ocurrio un error al calcular la distancia';
            // se rechaza la promesa
            reject(mensaje);
        }
    });
}
```

Llamando a la función que nos devuelve una promesa:

```js

// en este caso se cumple la promesa
calcularDistancia(100)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));

// en este caso se rechaza la promesa
calcularDistancia(-5)
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));

```

### Encadenamiento de promesas

Si tenemos varias operaciones asíncronas por resolver podemos encadenar varias promesas.

1. Agregamos la función `calcularVelocidad`:

```js
function calcularVelocidad(distancia) {

    return new Promise((resolve, reject) => {
        if (distancia > 0) {
            resolve(distancia/5);
        } else {
            reject('Ocurrio un error al calcular la velocidad.');
        }
    });
}
```

2. Llamamos a la función `calcularDistancia` y luego al obtener el resultado retornamos otra promesa que seria el resultado de `calcularVelocidad`:

```js
calcularDistancia(100)
    .then((distancia) => {
        console.log('distancia: ' + distancia);

        return calcularVelocidad(distancia);
    })
    .then((velocidad) => {
        console.log('velocidad: ' + velocidad);
    })
    .catch((error) => console.log(error));
```

## Fetch

La API Fetch provee métodos para manipular consultas HTTP y acceder a sus respuestas (datos).

Para realizar pruebas con `fetch` usaremos un servicio REST gratuito que nos permite realizar pruebas con la siguiente [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/).

## REST API

Una API de REST, o API de RESTful, es una interfaz de programación de aplicaciones (API o API web) que se ajusta a los límites de la arquitectura REST y permite la interacción con los servicios web de RESTful.

Las API son conjuntos de definiciones y protocolos que se utilizan para diseñar e integrar el software de las aplicaciones. Suele considerarse como el contrato entre el proveedor de información y el usuario, donde se establece el contenido que se necesita por parte del consumidor (la llamada) y el que requiere el productor (la respuesta). Por ejemplo, el diseño de una API de servicio meteorológico podría requerir que el usuario escribiera un código postal y que el productor diera una respuesta en dos partes: la primera sería la temperatura máxima y la segunda, la mínima.

En otras palabras, las API le permiten interactuar con una computadora o un sistema para obtener datos o ejecutar una función, de manera que el sistema comprenda la solicitud y la cumpla.

## JSON

**JSON**, cuyo nombre corresponde a las siglas **JavaScript Object Notation**, es un formato ligero de intercambio de datos, que resulta sencillo de leer y escribir para los desarrolladores y simple de interpretar y generar para las máquinas.

JSON es un formato de texto completamente independiente de lenguaje, pero utiliza convenciones que son ampliamente conocidos por los desarrolladores.

## Estados HTTP

Los códigos de estado en las respuestas HTTP indican si un petición HTTP ha sido completada satisfactoriamente. Estan agrupados en 5 clases:

1. Informativos (100 - 199)
2. Satisfactorios (200 - 299)
3. Redirección (300 - 399)
4. Error en el cliente (400 - 499)
5. Error en el servidor (500 - 599)

Fuentes:
- [HTTP Status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [https://httpstatuses.com/](https://httpstatuses.com/)

## Métodos HTTP

### GET

Se usa para solicitar información de un recurso. En ningún caso debe incluir información.

GET `api.ejemplo.com/recursos`

1. En la función `onload` hacemos una llamada al endpoint para obtener una lista de usuarios usando promesas.

```js
window.onload = function() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response.status);

            return response.json();
        })
        .then(usuarios => {
            cargarUsuarios(usuarios);
            cargarUsuarios2(usuarios);
        })
        .catch(error => {
            console.log(error);
        })
}
```

2. En nuestro HTML, dentro de la etiqueta `body` agregamos las siguientes etiquetas.

```html
<ul id="usuarios"></ul>

<section id="usuarios2"></section>
```

3. Escribimos una función llamada `cargarUsuarios` que recibe un arreglo de objetos desde el servicio con información de los usuarios. Una vez teniendo la información listamos los nombres de los usuarios dentro de la etiqueta `ul` que tiene un ID igual a `usuarios`.

```js
function cargarUsuarios(usuarios) {
    var ul = document.getElementById('usuarios');

    usuarios.forEach(usuario => {
        var li = document.createElement('li');

        li.innerText = usuario.name;

        ul.appendChild(li);
    });
}
```

4. Para visualizar una estructura con más elementos de la información de los usuarios agregamos una función `cargarUsuarios2`. En esta función listamos el nombre, email, website y empresa del usuario dentro de la etiqueta `section` que tiene un ID igual a `usuarios2`.

```js

function cargarUsuarios2(usuarios) {
    var section = document.getElementById('usuarios2');

    usuarios.forEach(usuario => {

        var div = document.createElement('div');
        div.className = 'usuario';

        var nombre = document.createElement('p');
        nombre.innerText = usuario.name;
        nombre.className = 'nombre';

        var email = document.createElement('p');
        email.innerText = usuario.email;

        var website = document.createElement('a');
        website.href = 'https://' + usuario.website;
        website.target = '_blank';
        website.innerText = usuario.website;

        var empresa = document.createElement('p');
        empresa.innerText = usuario.company.name;

        div.appendChild(nombre);
        div.appendChild(email);
        div.appendChild(website);
        div.appendChild(empresa);

        section.appendChild(div);
    });
}
```

### POST

Se usa para enviar y guardar datos al servidor.

POST `api.ejemplo.com/recursos`

```js
function guardarPost() {

    var nuevoPost = {
        title: "Nuevo post",
        body: "Este es un nuevo post que se guardara en el servidor de BD",
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(nuevoPost)
    })
    .then((response) => {
        return response.json();
    })
    .then((post) => {
        console.log(post);
    })
    .catch((error) => {
        console.log(error);
    });

}
```

### PUT

Se usa para enviar y actualizar datos en el servidor.

PUT `api.ejemplo.com/recursos/:id`

> NOTA: La variable `:id` representa el identificador único o llave primaria de la Base de Datos.

```js
function actualizarPost() {

    var postActualizado = {
        title: "Nuevo post actualizado",
        body: "Este es un post actualizado que se guardara en el servidor de BD",
        userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify(postActualizado)
    })
    .then((response) => {
        return response.json();
    })
    .then((post) => {
        console.log(post);
    })
    .catch((error) => {
        console.log(error);
    });
}
```

### DELETE

Se usa para eliminar datos en el servidor.

DELETE `api.ejemplo.com/recursos/:id`

> NOTA: La variable `:id` representa el identificador único o llave primaria de la Base de Datos.

```js
function eliminarPost() {

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    })
    .then((response) => {
        return response.json();
    })
    .then((post) => {
        console.log(post);
    })
    .catch((error) => {
        console.log(error);
    });

}
```
