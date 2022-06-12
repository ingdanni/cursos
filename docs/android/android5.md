---
id: android5
title: Linear layout
---

## Contenido

1. Linear Layouts.
2. Layout Editor.
3. Archivos de recursos.

## Crear nuevo proyecto

Para esta clase creamos un proyecto con las siguientes especificaciones:

1. Nombre del proyecto: `LinearLayoutAndroid`
2. Seleccionamos `Empty Activity`
3. SDK mínimo: `API 21 - Android 5 (Lollipop)`

## Introducción

El `Linear Layout` es un contenedor que agrupa todos sus hijos (Views) en una sola dirección, ya se **vertical u horizontal**. Se puede especificar la orientación del layout con el atributo `android:orientation`. Todos los hijos en un LinearLayout son apilados uno después del otro.

## View Groups

Un `ViewGroup` es una vista que puede contener vistas hijas u otro `ViewGroup`.

En un ViewGroup de tipo **LinearLayout**, los elementos se organizan horizontalmente o verticalmente.

![image](/img/android/img12.png)

## Crear nuestro primer Layout

Vamos a cambiar el layout raiz en el archivo `activity_main.xml`.

1. En el directorio `app/res/layout`, abrimos el archivo `activity_main.xml`.
2. Seleccionamos la pestaña `Text`.
3. Cambiamos el ViewGroup de `ConstraintLayout` a `LinearLayout`.
4. Removemos el `TextView` existente y agregamos el atributo `android:orientation` y le damos el valor de `vertical`.

Antes:

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

Despues:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">
    <!-- Dentro de este linear layout vamos a definir nuestros elementos hijos -->
</LinearLayout>
```

1. `orientation`: Indica la orientación de los elementos internos.

2. `layout_width`: Indica la anchura del elemento (layout). El valor `match_parent` indica que la anchura será igual a la del elemento padre.

3. `layout_height`: Indica la altura del elemento (layout). El valor `match_parent` indica que la altura será igual a la del elemento padre.

## Layout Editor

Es una herramienta de diseño visual dentro de **Android Studio**. En vez de escribir **XML** podemos construir el layout arrastrando los elementos (Views) dentro del editor de diseño.

![image](/img/android/img13.png)

### Toolbar

Tiene opciones de configuración para la apariencia del editor de layout.

![image](/img/android/img14.png)

### Palette

Tiene una lista de **views y view groups** que podemos arrastrar hacia el editor de layout o hacia el árbol de componentes.

![image](/img/android/img15.png)

### Attributes

Nos muestra los atributos de la **view o view group** que tengamos seleccionados.

![image](/img/android/img16.png)

### Components tree

Nos muestra la jerarquia del layout en forma de árbol.

![image](/img/android/img17.png)

## Agregar elementos en el Layout Editor

1. En el archivo `activity_main.xml` seleccionamos la pestaña diseño.

2. Arrastramos desde la paleta de componentes un `TextView` hacia nuestra activity.

3. Abrimos el panel de Atributos y colocamos los siguientes atributos a nuestro `TextView`:

| Atributo        | Valor                   |
| :-------------  | :-------------          |
| ID (identificador único)              | name_text               |
| text            | Su nombre               |
| textSize        | 20sp                    |
| textColor       | @android:color/black    |
| textAlignment   | center                  |

## Recursos

Los recursos son los archivos adicionales y el contenido estático que usa tu código, como mapas de bits, definiciones de diseño, cadenas de interfaz de usuario, instrucciones de animación y más.

Siempre se debe externalizar los recursos de la aplicación, como imágenes y cadenas de texto de su código, para que puedan mantenerse de forma independiente.

### Crear un recurso String

1. Los recursos de tipo **String** son cadenas de texto estáticas en nuestra aplicación. Al mantenerse separadas de la interfaz de usuario es más fácil de actualizar una sola vez, en lugar de actualizarse en cada `activity` en la que sea utilizada.

2. Abrimos el archivo `res/values/strings.xml` y agregamos la siguiente `string` dentro de la etiqueta `<resources> </resources>`:

```xml
<string name="my_name">Juan Pérez</string>
```

3. Para usar este recurso en el Panel de atributos, agregamos el valor `@string/my_name` al aributo `text`.

4. Tambien podemos buscarlo en la ventana **Seleccionar recurso**, dando clic sobre el icono al extremo derecho del atributo (en este caso el atributo text).

![image](/img/android/img18.png)

> 💡 IMPORTANTE: Desde esta misma ventana podemos agregar recursos y se agregarán automaticamente al archivo `strings.xml`.

### Crear un recurso Dimen

1. Los recursos de tipo **Dimen** son valores de dimensiones (unidades de medida). Al mantenerse separadas de la interfaz de usuario es más fácil de actualizar una sola vez, en lugar de actualizarse en cada `activity` en la que sea utilizada.

2. Abrimos el archivo `res/values/dimens.xml` y agregamos la siguiente `dimen` dentro de la etiqueta `<resources> </resources>`

```xml
<dimen name="text_size">20sp</dimen>
```

3. Para usar este recurso en el Panel de atributos, agregamos el valor `@dimen/text_size` al aributo `textSize`.

4. Tambien podemos buscarlo en la ventana **Seleccionar recurso**, dando clic sobre el icono al extremo derecho del atributo (en este caso el atributo textSize).

> 💡 IMPORTANTE: Desde esta misma ventana podemos agregar recursos y se agregarán automaticamente al archivo `dimens.xml`. Si el archivo `dimens.xml` no existe, Android Studio lo creará.

## Ejecutar 📱

Si abrimos el archivo `MainActivity.kt` y miramos la funcion `onCreate()`. El archivo de recurso de layout especificado es: `R.layout.activity_main`.

```kotlin
setContentView(R.layout.activity_main)
```

* `R` es una clase autogenerada por el compilador y conteniene referencias a todos los recursos de nuestra aplicación.

* `layout.activity_main` indica el folder y nombre del archivo de recurso (por ejemplo: `res/layout/activity_main.xml`).

Si corremos la aplicación debería mostrar la pantalla de la siguiente forma:

![image](/img/android/img19.png)
