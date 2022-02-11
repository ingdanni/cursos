---
id: android5
title: Linear layout
---

## Intro

Es un contenedor que agrupa todos sus hijos (Views) en una sola dirección, ya se vertical u horizontal. Se puede especificar la orientación del layout con el atributo `android:orientation`. Todos los hijos en un LinearLayout son apilados uno después del otro.

## Crear nuevo proyecto

Ahora creamos un proyecto con las siguientes especificaciones:

1. Nombre: AboutMe
2. Seleccionamos `Empty Activity`
3. SDK mínimo: `API 21 - Android 5 (Lollipop)`

## View groups

Un `ViewGroup` es una vista que puede contener vistas hijas u otro `ViewGroup`.

En un ViewGroup de tipo **LinearLayout**, los elementos se organizan horizontalmente o verticalmente.

![image](/img/android/img12.png)

## Actualizar el Layout

Vamos a cambiar el layout raiz en el archivo `activity_main.xml`.

1. En el directorio `app/res/layout`, abrimos el archivo `activity_main.xml`.
2. Seleccionamos la pestaña `Text`.
3. Cambiamos el ViewGroup de `ConstraintLayout` a `LinearLayout`.
4. Removemos el `TextView` y agregamos el atributo `android:orientation` y le damos el valor de `vertical`.


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
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

</LinearLayout>
```

## Layout Editor

Es una herramienta de diseño visual dentro de **Android Studio**. En vez de escribir XML podemos construir el layout arrastrando los elementos (Views) dentro del editor de diseño.

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

1. Seleccionar el archivo `activity_main.xml` en la pestaña diseño.

2. Arrastramos desde la Paleta un `TextView` hacia nuestro editor de diseño.

3. Abrimos el panel de Atributos y colocamos los siguientes atributos a nuestro `TextView`:

| Atributo        | Valor                   |
| :-------------  | :-------------          |
| ID              | name_text               |
| text            | Tu nombre               |
| textSize        | 20sp                    |
| textColor       | @android:color/black    |
| textAlignment   | center                  |

## Recursos

### Crear un recurso String

Abrimos el archivo `res/values/strings.xml` y agregamos la siguiente `string` dentro de la etiqueta `<resources> </resources>`

```xml
<string name="my_name">Juan Pérez</string>
```

Para usar este recurso en el Panel de atributos, agregamos el valor `@string/my_name` al aributo `text`.

Tambien podemos buscarlo en la ventana **Seleccionar recurso**, dando clic sobre el icono al extremo derecho del atributo (en este caso el atributo text).

![image](/img/android/img18.png)

> 💡 IMPORTANTE: Desde esta misma ventana podemos agregar recursos y se agregarán automaticamente al archivo `strings.xml`.

### Crear un recurso Dimen

Abrimos el archivo `res/values/dimens.xml` y agregamos la siguiente `dimen` dentro de la etiqueta `<resources> </resources>`

```xml
<dimen name="text_size">20sp</dimen>
```

Para usar este recurso en el Panel de atributos, agregamos el valor `@dimen/text_size` al aributo `textSize`.

Tambien podemos buscarlo en la ventana **Seleccionar recurso**, dando clic sobre el icono al extremo derecho del atributo (en este caso el atributo textSize).

> 💡 IMPORTANTE: Desde esta misma ventana podemos agregar recursos y se agregarán automaticamente al archivo `dimens.xml`. Si el archivo dimens.xml no existe, Android Studio lo crea.

## Ejecutar 📱

Si abrimos el archivo `MainActivity.kt` y miramos la funcion `onCreate()`. El archivo de recurso de layout especificado es: `R.layout.activity_main`.

```kotlin
setContentView(R.layout.activity_main)
```

* `R` es una referencia al recurso. Es una clase auto-generada con deficiniciones para todos los recursos de la app.

* `layout.activity_main` indica el nombre del archivo de recurso.

Si corremos la app deberia aparecernos la pantalla como la siguiente:

![image](/img/android/img19.png)
