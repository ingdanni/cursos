# HTTP

HTTP es un protocolo usado para obtener recursos en la web. Es la base de cualquier intercambio de datos en la Web y es un protocolo cliente-servidor, esto significa que las peticiones son iniciadas por el receptor que es usualmente un navegador web y este recibe un documento que se construye a través de diferentes recursos, por ejemplo: texto, imagenes, videos, scripts y otros.

![image](./images/67.png)

## Mejoras en HTTP/2

* `Formato binario`: HTTP/2 recurre al sistema binario, mucho más fácil de interpretar. Además de ser más compacto y con menor tendencia a sufrir fallos que los protocolos que utilizan texto. Asimismo, de las cuatro formas de interpretar la información de HTTP/1.x, con HTTP/2 se reduce a una única forma.

* `Compresión de cabeceras`: Con HTTP/1.x cada una de las solicitudes que se realicen lleva su propia cabecera con la información acerca del comportamiento del servidor o navegador. En cambio, HTTP/2 reúne todas las cabeceras en un único bloque para el envío.

* `Server Push`: Para mejorar aún más el rendimiento de una página web, con HTTP/2 es posible enviar información a la caché sin que se haya realizado una petición. El servidor predice los datos que se podrían necesitar para que, cuando se realice la solicitud, la información esté disponible de forma inmediata.

* `Multiplexación`: HTTP/1.x no permite conexiones simultáneas. Por lo que hay que esperar a obtener la respuesta a una petición antes de poder realizar la siguiente. HTTP/2 posibilita que en una única conexión se realicen, en paralelo, múltiples solicitudes y respuestas.
Transferencias más rápidas

Con HTTP/2 también se elimina el envío de información redundante. Se evita emitir datos que ya se han obtenido en anteriores solicitudes. Esto permite reducir el consumo de recursos y la latencia de forma significativa. De la misma manera, los recursos disponibles se dividen en función de la importancia otorgada a cada uno de los objetos de la página web. Todo ello contribuye a mejorar la velocidad de carga.

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

## REST API

Una API de REST, o API de RESTful, es una interfaz de programación de aplicaciones (API o API web) que se ajusta a los límites de la arquitectura REST y permite la interacción con los servicios web de RESTful.

Las API son conjuntos de definiciones y protocolos que se utilizan para diseñar e integrar el software de las aplicaciones. Suele considerarse como el contrato entre el proveedor de información y el usuario, donde se establece el contenido que se necesita por parte del consumidor (la llamada) y el que requiere el productor (la respuesta). Por ejemplo, el diseño de una API de servicio meteorológico podría requerir que el usuario escribiera un código postal y que el productor diera una respuesta en dos partes: la primera sería la temperatura máxima y la segunda, la mínima.

En otras palabras, las API le permiten interactuar con una computadora o un sistema para obtener datos o ejecutar una función, de manera que el sistema comprenda la solicitud y la cumpla.

## Métodos HTTP

> NOTA: Para hacer pruebas sobre un API Rest podemos usar [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/)

### GET

Se usa para solicitar información de un recurso. En ningun caso debe incluir información.

Por ejemplo:

* GET [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

En este caso se solicitan todos los posts disponibles.

* GET [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)

En el segundo caso se solicita el post con `id` igual a `1`

### POST

Se usa para enviar y guardar datos al servidor.

Por ejemplo:

POST [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

En el cuerpo de la petición se envia como JSON:

```json
{
  "userId": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

### PUT

Se usa para enviar y actualizar datos en el servidor.

Por ejemplo:

PUT [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)

En el cuerpo de la petición se envia como JSON:

```json
{
  "userId": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

### DELETE

Se usa para eliminar datos en el servidor.

Por ejemplo:

DELETE [https://jsonplaceholder.typicode.com/posts/1](https://jsonplaceholder.typicode.com/posts/1)

En este caso se elimina el post con `id` igual a `1`
