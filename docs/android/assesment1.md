---
id: assesment1
title: Clase práctica 1
---

## Orientaciones

* Crear un linear layout que muestre la siguiente información del alumno:

    * Nombre completo.
    * Carrera y número de carné.
    * Lista de cursos que estudia en el semestre actual.

* Investigar como agregar recursos de imágenes a un proyecto de Android Studio y agregar una imagen (de una persona) al perfil del alumno.

* Se deben usar los elementos de UI tales como **TextView, ScrollView e ImageView**. Agregando estilos para mejorar la apariencia.

* Valor `10pts`.

## Solución

[Enlace de descarga](./assets/PersonalProfileTask1.zip)

### LinearLayout horizontal

* En la sección anterior aprendimos que el LinearLayout tiene 2 orientaciones: vertical y horizontal.

```kotlin
// horizontal
android:orientation="horizontal"

// vertical
android:orientation="vertical"
```

### LinearLayouts anidados

* Es posible que en ocasiones necesitemos anidar varios linear layouts, es decir poner uno dentro de otro.

```xml

<!-- padre -->
<LinearLayout>

  <!-- primer hijo -->
  <LinearLayout>
    <TextView />
  </LinearLayout>

  <!-- segundo hijo -->
  <LinearLayout>
    <TextView />
  </LinearLayout>

</LinearLayout>
```

### Layout weight

**LinearLayout** también admite la asignación de un peso (*weight*) a elementos individuales con el atributo `android:layout_weight`. Este atributo asigna un valor de "importancia" a una vista en términos de cuánto espacio debe ocupar en la pantalla. Un valor de peso mayor le permite expandirse para llenar cualquier espacio restante en la vista principal. Las vistas secundarias pueden especificar un valor de peso, y luego cualquier espacio restante en el grupo de vista se asigna a los elementos secundarios en la proporción de su peso declarado. El peso predeterminado es cero.

Para crear un diseño lineal en el que cada elemento use la misma cantidad de espacio en la pantalla, establezca `android:layout_height` de cada vista en "0dp" (para un diseño vertical) o `android:layout_width` de cada vista en "0dp" ( para un diseño horizontal). Luego establezca el `android:layout_weight` de cada vista en "1".
