# Introducción a HTML 5

## Objetivos

* Interactuar con el editor de código.
* Aprender algunos elementos básicos de HTML 5.
* Iniciar a trabajar con algunos selectores de CSS.
* Aprender a importar diferentes recursos dentro HTML.

## Crear proyecto inicial

1. Crear un directorio con cualquier nombre, por ejemplo: `website`.

2. Dentro del directorio creado, se debe crear un archivo llamado `index.html`.

3. En el archivo `index.html` podemos crear la estructura básica de un documento **HTML** como vimos en la clase anterior:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>
```

> NOTA: Si usamos el editor ATOM, podemos escribir **html** y presionar tab para que se autocomplete la estructura.

## Agregar etiquetas meta

La etiqueta `<meta>` define información (metadata) sobre nuestro documento HTML. Siempre van dentro de la etiqueta `<head>` y su contenido no es visible en la página pero es usada por los navegadores y motores de búsqueda.

Agregar las siguiente etiquetas dentro de `<head>`:

```html

<meta name="keywords" content="Noticias, Nicaragua, Managua, Economia, Deportes">
<meta name="description" content="Noticias de Nicaragua y el mundo">
<meta name="author" content="Juan Perez">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* `keywords`: son palabras claves usadas por los motores de búsqueda.
* `description`: una descripción de la página web.
* `author`: define el autor de la página.
* `viewport`: se establece para que el website se vea bien en todos los dispositivos.

### Viewport

El `viewport` es el área visible de una página web. Varia dependiendo del tamaño del dispositivo.

* `width=device-width`: define que el ancho de la página sea igual al dispositivo.
* `initial-scale=1.0`: define el enfoque (zoom) inicial para la página cuando es cargada por primera vez por el navegador.

## Etiqueta header

La etiqueta `<header>` representa contenido introductorio. Tipicamente puede contener elementos como encabezados, logo, barra de búsqueda entre otros. A partir de aca todo el contenido sera definido dentro de la etiqueta `<body>`:

```html
<header>
  <h1>Nicaragua Times</h1>
  <h2>Noticias de Nicaragua y el mundo</h2>

</header>
```

## Etiquetas h1 a h6

Las etiquetas `h` son usadas para definir encabezados y van desde 1 hasta 6. La etiqueta `<h1>` se define como el encabezado más importante y `<h6>` se define como el menos importante.

> Recomendación: se debe tratar de tener un `h1` por página y no se deberia omitir los niveles de encabezado.

## Etiqueta div

La etiqueta `<div>` define una división o una sección dentro de un documento **HTML**. Se puede utilizar como contenedor de otros elementos.

Dentro de la etiqueta `header` antes del cierre vamos a agregar un `div` que contiene un menú de navegación:

```html
<div>
  <ul id="menu-principal">
    <li>
      <a href="#">Nacionales</a>
    </li>
    <li>
      <a href="#">Política</a>
    </li>
    <li>
      <a href="#">Deportes</a>
    </li>
    <li>
      <a href="#">Sucesos</a>
    </li>
    <li>
      <a href="#">Salud</a>
    </li>
    <li>
      <a href="#">Ciencia</a>
    </li>
    <li>
      <a href="#">Economia</a>
    </li>
    <li>
      <a href="#">Videos</a>
    </li>
  </ul>
</div>
```

## Etiquetas ul y li

La etiqueta `ul` define una lista desordenada (con viñetas) y se usa en conjunto con `li` que representa cada elemento de la lista.

## Etiqueta a

La etiqueta `a` define un hipervinculo (enlace) que se puede usar para enlazar de una página hacia otra. El atributo más importante de la etiqueta `a` es `href`, que nos indica el destino del enlace.

```html
<a href="otra-pagina.html">Ir a otra página</a>
```

## Etiqueta section

La etiqueta `section` define un sección en un documento **HTML**. En nuestra página agregamos una `section` debajo de `header` con un atributo `id` con el valor `portada` y luego otra `section` con un atributo `id` con el valor de `destacados`:

```html
<section id="portada">

</section>

<section id="destacados">

</section>
```

## Etiqueta img

Antes de ver la etiqueta `img` descargamos el siguiente archivo zip y copiamos a la raiz de nuestro proyecto:

[⬇️  Recursos de imagen](../downloads/img.zip)

La etiqueta `img` es usada para embeber una image dentro de una página HTML. Este etique requiere 2 atributos que son:

1. `src`: especifica la ruta de la imagen.
2. `alt`: especifica un texto alternativo para la image, si en algun caso no es mostrada.

Dentro de la sección `portada` agregamos lo siguiente:

```html
<img src="img/portada.jpeg" alt="Fotografia de Managua" style="width: 100%;">

<h3>Nicaragua es considerado el mejor país para vivir</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

## Etiqueta p

La etiqueta `p` define un párrafo. Por ejemplo:

```html
<p>Esto es un párrafo.</p>
```

## Agregar un archivo CSS

Antes de continuar con otras etiquetas vamos a agregar un poco de **CSS**, creamos un archivo llamado `css/styles.css` y lo enlazamos a través de la etiqueta `link` dentro de `<head>` de la siguiente forma:

```html
<link rel="stylesheet" href="css/styles.css">
```

Para comenzar agregamos la siguiente regla en nuestro `css`:

```css
* {
  margin: 0;
  padding: 0;
  border: 0;
}
```

1. Haciendo uso del caracter `*` le decimos a `css` que aplique esa regla a todos los elementos `HTML`.

2. La propiedad `margin` se usa para agregar espacio alrededor de un elemento, fuera de sus bordes.

3. La propiedad `padding` se usa para agregar espacio alrededor de un elemento, dentro de sus bordes.

4. La propiedad `border` agrega el estilo a los bordes de un elemento.

### Estilo en body

Agregamos otro bloque con las siguientes reglas para agregar estilos al `body`:

```css
body {
  background-color: #fef1e5;
}
```

La propiedad `background-color` define el color de fondo de un elemento. Se puede definir con un color, código hexadecimal o valor rgba. Por ejemplo: `black`, `#FFF` o `rgba(201, 76, 76, 0.3)`.

### Estilo en varias etiquetas

Vamos a definir estilos para varias etiquetas de tipo `h` y `p`, en este caso se separan por coma:

```css
h1, h2, p {
  color: #262933;
}

h3, h4, h5, h6 {
  color: #990f3c;
}
```

La propiedad `color` se usa para definir el color del texto de un elemento.

### Estilo en header

Agregamos reglas para definir el estilo en `header`. La propiedad `text-align` sirve para definir el alineado del texto dentro de un contenedor. Sus posibles valores son `center`, `left`, `right` y `justify`.

```css
header {
  margin: 20px;
  text-align: center;
}
```

### Estilos en etiquetas anidadas

Cuando queramos agregar estilos a una etiqueta anidada entonces agregamos la **[etiqueta padre + espacio + etiqueta hija]**.

```css
header ul {
  margin: 20px;
}

header ul li {
  list-style: none;
  display: inline-block;
}

li a {
  text-decoration: none;
  color: #0a5e66;
  margin: 10px;
}
```

1. La propiedad `list-style` especifica el tipo de marcador en una lista. Puede ser `circle`, `square`, `disc`, `none`, entre otros.

2. La propiedad `text-decoration` define el tipo de decoración para el texto. Pueden ser `overline`, `underline`, `none`, entre otros.

### Estilo en section

```css
section {
  width: 80%;
  margin: auto;
}
```

1. La propiedad `width` define el ancho de un elemento y se puede definir como porcentaje o valor en pixeles (px), por ejemplo: `500px` o `50%`.

2. La propiedad `margin` con valor `auto` centra horizontalmente el elemento dentro de su contenedor.

### Estilo en clases

Para dar estilo a una clase lo hacemos con la nomenclatura `[punto + nombreDeClase]`. Por ejemplo a la clase `noticia` se accede por `.noticia`.

```css
.noticia {
  margin: 10px;
  width: 200px;
  height: 250px;
  display: inline-block;
  border-style: solid;
  border-color: #000;
  border-width: 1px;
}

.noticia img {
  width: 200px;
  height: 200px;
}
```

1. La propiedad `height` define la altura de un elemento. Siendo la contraparte de `width`.

2. La propiedad `display` define el comportamiento de un elemento al posicionarse. Al definir el valor `inline-block` se alinean los elementos horizontalmente en una fila.

3. La propiedad `border-style` define el estado del borde. Puede ser `solid`, `dotted`, `dashed`, `none`, entre otros.

4. La propiedad `border-color` define el color del borde.

5. La propiedad `border-width` define el ancho del borde.

## Class vs ID

* El atributo `class` se usa para definir una clase para un elemento HTML. Comunmente se usa para referencia en una hoja de estilos y varios elementos pueden pertenecer a una clase.

* El atributo `id` se usa para especificar un identificador unico en un elemento HTML. No podemos tener mas de un elemento con el mismo `id` en el documento HTML.

## Etiqueta footer

La etiqueta `footer` define el pie de pagina de un documento HTML.

```html
<footer>
  <section>

    <div>
      <ul>
        <li>Nacionales</li>
        <li>Deportes</li>
        <li>Sucesos</li>
        <li>Ciencia</li>
        <li>Tecnología</li>
        <li>Farandula</li>
      </ul>
    </div>

    <div id="redes">
      <ul>

      </ul>
    </div>

    <div>
      <p>Grupo editorial La Hoguera</p>
      <p>Managua, Nicaragua</p>
      <p>Calle de la Amargura, Plaza San Pedro</p>
      <p>Todos los derechos reservados 2021</p>
    </div>
  </section>
</footer>
```

### Estilos del footer

Agregamos algunos estilos para el `footer` y sus elementos:

```css

footer {
  background-color: #262933;
  min-height: 200px;
}

footer * {
  color: #F2F2F2;
}

footer div {
  margin: 20px;
  min-width: 300px;
  display: inline-block;
  vertical-align: top;
}

footer ul li {
  list-style: none;
}

#redes ul li {
  list-style: none;
  display: inline-block;
  font-size: 30px;
}

```

1. La propiedad `min-height` define la altura mínima de un elemento.

2. La propiedad `min-width` define el ancho mínimo de un elemento.

3. La propiedad `vertical-align` define la alineación vertical de un elemento. Su valor puede ser `top`, `bottom`, `middle`, entre otros.

4. La propiedad `font-size` define el tamaño del texto.

## Agregar iconos a nuestro proyecto

Por ahora vamos a utilizar la libreria [Font Awesome](https://fontawesome.com/) que es un set de iconos muy popular usado en muchas websites y aplicaciones.

Lo hacemos a través de la etiqueta `link` enlazando como recurso externo, esto quiere decir que el recurso esta en otro servidor.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
```

Luego agregamos en el `footer` dentro del `div` con `id="redes"` los siguientes elementos:

```html
<li><i class="fab fa-facebook-square"></i></li>
<li><i class="fab fa-instagram-square"></i></li>
<li><i class="fab fa-youtube-square"></i></li>
<li><i class="fab fa-twitter-square"></i></li>
```

1. La etiqueta `i` define un rango de texto con caracteristicas semanticas diferentes al texto que lo rodea. Inicialmente se usaba para representar texto en estilo _italico_ pero en nuestro caso lo usamos para mostrar los iconos de **Font Awesome**.

2. Las clases `fab` y `fab-[nombre]` son clases propias de **Font Awesome**.

## Agregar fuentes a nuestro proyecto

Para agregar fuentes en nuestro proyecto podemos usar [Google fonts](https://fonts.google.com/) y podemos buscar las fuentes que necesitemos, para este ejercicio usaremos:

* Roboto
* Petemoss

Las agregamos a nuestro documento **HTML**:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Petemoss&family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap" rel="stylesheet">
```

Para definir las fuentes de los elementos lo hacemos desde **CSS**, en la elemento `body` definiremos `Roboto` y en nuestro elemento `h1` definiremos `Petemoss`:

```css

body {
  ...
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-family: 'Petemoss', cursive;
  font-size: 70px;
}
```
