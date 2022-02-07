# CSS: Selectores, pseudo-clases y pseudo-elementos

## Objetivos

* Aprender a utilizar selectores de clases en CSS.
* Conocer que son las pseudo-clases y pseudo-elementos.
* Aplicar conocimientos de HTML de las sesiones anteriores.

## Selector de clase

Un selector de clase nos permite seleccionar un elemento con un atributo `class` especifico. Para seleccionar un elemento, lo hacemos con un caracter punto (.) seguido del nombre de la clase. Por ejemplo:

```css

.fila {
  /* accede a todos los elementos que
  tengan atributo class="fila" */
}

.verde {
  /* accede a todos los elementos que
  tengan atributo class="verde" */
}

```

### Ejemplo de clases

1. Creamos un archivo `index.html` y dentro de la etiqueta `body` agregamos lo siguiente:

```html
<section>

  <div class="verde">
      Verde
  </div>

  <div class="azul">
    Azul
  </div>

  <div class="amarillo">
    Amarillo
  </div>
</section>
```

2. Agregamos un archivo `styles.css` y enlazamos a nuestro **html** haciendo uso de la etiqueta `link`.

3. En el archivo `styles.css` agregamos lo siguiente:

```css
.verde {
  background-color: green;
  border: 2px dotted yellow;
}

.azul {
  background-color: blue;
  border: 2px dashed yellow;
}

.amarillo {
  background-color: yellow;
  color: black;
  border: 2px solid blue;
  font-size: 20px;
  font-weight: bold;
}
```

4. Para agregar estilos a varias clases en un solo bloque lo hacemos agregando los nombres de class separadas por coma (,):

```css
.verde, .azul, .amarillo {
  color: white;
  margin: 16px;
  height: 120px;
  width: 120px;
  text-align: center;
}
```

## Pseudo-clases

En **CSS** una pseudo-class es una palabra clave que se agrega a un selector que especifica un estado especial del elemento. Por ejemplo `:hover` puede ser usado para aplicar estilos cuando el puntero pasa sobre el elemento.

### Ejemplo 1

1. En nuestro archivo `styles.css` agregamos el siguiente código:

```css
div:hover {
  background-color: black;
  height: 140px;
  width: 140px;
}
```

2. En este caso cuando el puntero pase sobre cualquier elemento `div` se aplicaran las reglas correspondientes.

3. Se pueden usar Pseudo-clases con clases de la misma foma:

```css
.verde:hover {
  /* estilos */
}
```

### Ejemplo 2

1. En nuestro **HTML** agregamos una lista de elementos haciendo uso de la etiqueta `li`:

```html
<ul>
  <li>
    <a href="page.html">Enlace 1</a>
  </li>
  <li>
    <a href="page.html" target="_blank">Enlace 2</a>
  </li>
  <li>
    <a href="#">Enlace 3</a>
  </li>
  <li>
    <a href="#">Enlace 4</a>
  </li>
</ul>
```

2. En nuestro **CSS** agregamos estilos al primer y ultimo elemento de tipo `li` (que sean hermanos) haciendo uso de `:first-child` y `last-child`:

```css
li:first-child {
  font-size: 30px;
}

li:last-child {
  font-size: 35px;
}
```

## Pseudo-elementos

En **CSS** un pseudo-elemento es una palabra clave que se agrega a un selector para agregar estilos a una parte especifica del elemento. Por ejemplo `::first-line` puede ser usado para cambiar estilos de la primera linea de un párrafo.

### Ejemplo

1. En nuestro **HTML** agregamos un párrafo haciendo uso de la etiqueta `p`:

```html
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
```

2. En nuestro **CSS** agregamos la siguiente regla para cambiar el estilo de la primera linea haciendo uso de `::first-line`:

```css
p::first-line {
  font-weight: bold;
}
```

3. En este ejemplo se agrega estilo (texto en negrita) a la primera linea de cada etiqueta `p`.


## 👨‍💻 Clase práctica

1. Crear un director y agregar los archivos `index.html` y `styles.css` correspondientes.

2. Agregar estructura básica de un documento **HTML**.

3. Agregar información en la página correspondiente a su Hoja de Vida (CV) con las siguientes secciones:

* Fotografia.
* Datos personales: nombre completo, fecha de nacimiento, ciudad, teléfono, email.
* Descripción personal y expectativas.
* Experiencia laboral.
* Estudios realizados (carrera, cursos).
* Referencias, menciones y otra información relevante.

4. En la estructura se debe procurar utilizar las etiquetas HTML que hemos venido estudiando. Por ejemplo: `header`, `div`, `section`, `p`, `ul`, `h1`, etc...

5. Agregar estilos en **CSS** y agregar una fuente desde `google fonts`.

## 🏠 Tarea

1. Investigar al menos 2 pseudo-clases de CSS (concepto y ejemplo).

2. Investigar al menos 2 pseudo-elementos de CSS (concepto y ejemplo).

3. Crear un archivo PDF con la información y enviarlo a través del AV.
