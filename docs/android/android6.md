---
id: android6
title: Estilos
---

## Agregar estilos a un TextView

### Padding

Es el espacio dentro de los límites de una vista o elemento. Es el espacio entre los bordes de la vista y el contenido de la vista.

Los siguientes atributos se usan para definir el padding:

* `android:padding` para los 4 lados del elemento.
* `android:paddingTop` para el borde superior.
* `android:paddingBottom` para el borde inferior.
* `android:paddingStart` para el borde inicial.
* `android:paddingEnd` para el borde final.

### Margin

Es el espacio que se agrega fuera de los bordes del elemento. Es el espacio entre los bordes del elemento y el contenedor (padre).

Los siguientes atributos se usan para definir el margin:

* `android:layout_margin` para los 4 lados del elemento.
* `android:layout_marginTop` para el borde superior.
* `android:layout_marginBottom` para el borde inferior.
* `android:layout_marginStart` para el borde inicial.
* `android:layout_marginEnd` para el borde final.

![image](/img/android/img20.png)

### Agregar Padding

* Agregamos un nuevo recurso de tipo `dimen` que se llame `small_padding` con un valor de `8dp`.

```xml
<dimen name="small_padding">8dp</dimen>
```

* Asignamos el padding a nuestro TextView con la propiedad `padding`.

```xml
...
android:padding="@dimen/small_padding"
...
```

### Agregar Margin

* Agregamos un nuevo recurso de tipo `dimen` que se llame `layout_margin` con un valor de `16dp`.

```xml
<dimen name="layout_margin">16dp</dimen>
```

* Asignamos el margin a nuestro TextView en la propiedad `layout_marginTop`.

```xml
android:layout_marginTop="@dimen/layout_margin"
```

### Agregar una fuente

* Seleccionamos nuestro TextView.
* Seleccionamos el atributo **fontFamily**.
* Presionamos el botón **"+"**, seleccionamos **más fuentes**.
* Buscamos en la lista y seleccionamos `Roboto > Regular`

![image](/img/android/img21.png)

## Agregar un ImageView

* Desde la paleta de componentes arrastramos un `ImageView` justo debajo de nuestro TextView.
* Nos aparece una ventana, seleccionamos la pestaña `drawable` y seleccionamos un recurso de imagen de lo que ya vienen por defecto en Android Studio (podemos agregar *btn_star_big_on*).

![image](/img/android/img22.png)

* Seleccionamos el atributo `id` y le damos el valor de `star_image`
* Seleccionamos la propiedad `layout_marginTop` y le damos el valor de `@dimen/layout_margin`.

## Agregar un ScrollView

1. Agregamos un nuevo recurso **Dimen**:

```xml
<dimen name="layout_padding">16dp</dimen>
```

2. Agregamos un nuevo recurso **String**:

```xml
<string name="bio_text">Hi, my name is Juan. \n\nI love fish. \n\nThe kind that is alive and swims around in an aquarium or river, or a lake, and definitely the ocean. \nFun fact is that I have several aquariums and also a river. \n\nI like eating fish, too. Raw fish. Grilled fish. Smoked fish. Poached fish - not so much. \nAnd sometimes I even go fishing. \nAnd even less sometimes, I actually catch something. \n\nOnce, when I was camping in Canada, and very hungry, I even caught a large salmon with my hands. \n\nI\'ll be happy to teach you how to make your own aquarium. \nYou should ask someone else about fishing, though.\n\n</string>
```

3. Arrastramos un componente `ScrollView` y removemos el Linear Layout que está dentro.

4. Arrastramos un **TextView** dentro del **ScrollView**.

5. Cambiamos el `id` de nuestro TextView a `@+id/bio_text`.

6. Agregamos a las propiedades `paddingStart` y `paddingEnd` el valor de `@dimen/layout_padding`.

7. Agregamos a la propiedad `text` el valor de `@string/bio_text`.

8. Agregamos a la propiedad `lineSpacingMultiplier` el valor de `1.2`

Nos queda de la siguiente forma:

```xml
<ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent">

    <TextView
        android:id="@+id/bio_text"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:lineSpacingMultiplier="1.2"
        android:paddingStart="@dimen/layout_padding"
        android:paddingEnd="@dimen/layout_padding"
        android:text="@string/bio_text" />

</ScrollView>
```

## Resultado final

Al final nuestro archivo `activity_main.xml` debe quedar de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/name_text"
        style="@style/NameStyle"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:fontFamily="@font/roboto"
        android:text="@string/my_name" />

    <ImageView
        android:id="@+id/star_image"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginTop="@dimen/layout_margin"
        android:contentDescription="@string/yellow_star"
        app:srcCompat="@android:drawable/btn_star_big_on"
        tools:ignore="ImageContrastCheck" />

    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <TextView
            android:id="@+id/bio_text"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:lineSpacingMultiplier="1.2"
            android:paddingStart="@dimen/layout_padding"
            android:paddingEnd="@dimen/layout_padding"
            android:text="@string/bio_text" />
    </ScrollView>

</LinearLayout>
```

Y al ejecutar la aplicación:

![image](/img/android/img23.png)
