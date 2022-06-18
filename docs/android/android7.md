---
id: android7
title: Constraint Layout
---

Es un `ViewGroup` que permite posicionar y dimensionar las vistas de una manera flexible, creando diseños grandes y complejos con jerarquias de vista.

Para crear un **ConstraintLayout** puede usar el editor de diseño para agregar restricciones y para arrastrar y soltar las vistas.

## ¿Qué es un Constraint?

 Es una conexión o alineación entre 2 elementos del UI (User Interface). Cada constraint conecta o alinea una vista con otra o al layout padre. En un **ConstraintLayout** se posiciona un elemento definiendo al menos un constraint horizontal o vertical.

 ![image](/img/android/img25.png)

1. **Constraint horizontal**: B siempre debe estar a la derecha de A. (En una app real B tambien necesitaria al menos un constraint vertical adicional)

2. **Constraint vertical**: C siempre debe permanecer debajo de A. (En una app real C tambien necesitaria al menos un constraint horizontal adicional)

> 💡 Un constraint puede definirse como una regla que se debe cumplir en nuestro layout.


## Proyecto incial

* Se debe crear un proyecto nuevo y vacio, lenguaje **kotlin** y especificar cualquier nombre.

* Abrir el `activity_main.xml` con la pestaña de diseño activada.

* Agregaremos constraints manualmente entonces en el toolbar desactivamos la opcion `Autoconnect`.

* En el toolbar también agregamos margen de `16dp` en la opción **margin defaults**.

![image](/img/android/img26.png)

* Seleccionamos el text view que está dentro del activity para ver sus atributos y mostrar el **View Inspector** que incluye controles para atributos de diseño como constraints, tipos de constraints, constraint bias y margenes de vista.

![image](/img/android/img27.png)

### Constraint Bias

Coloca el elemento de vista a lo largo de los ejes horizontal y vertical. De forma predeterminada, la vista se centra entre las dos restricciones con un sesgo del 50%.

### Margins

En el view inspector tenemos valores para margenes de arriba, abajo, izquierda y derecha con un valor por defecto de 0.

### Tipo de constraint

* **Wrap Content:** el elemento se expande solamente cuanto necesite para mostrar su contenido. Simbolo `>>>`

* **Fixed:** se agrega una dimension como margen de vista en el cuadro de texto junto a las flechas. Simbolo `|---|`

* **Match constraints:** el elemento se expande tanto como sea posible para cumplir la constraint en cada lado, teniendo en cuenta los propios margenes de la vista. Este constraint es muy flexible y nos permite adaptar a diferentes tamaños y orientaciones de pantalla. Simbolo `|-vvv-|`

> Para cambiar el tipo de constraint se debe presionar sobre el símbolo del constraint en el View Inspector.

## Configurar TextView

1. Para el top (superior) definimos un margin de 16.

2. Para izquierda y derecha definimos un margin de 16 y tipo match constraints.

3. Para el bottom (inferior) eliminamos presionando el circulo en el View Inspector.

## Agregar estilos para los TextViews

Agregamos un archivo de recursos llamado **styles.xml** y agregamos:

```xml
<style name="whiteBox">
    <item name="android:background">@android:color/holo_green_light</item>
    <item name="android:textAlignment">center</item>
    <item name="android:textStyle">bold</item>
    <item name="android:textColor">@android:color/black</item>
    <item name="android:textSize">24dp</item>
</style>
```

En el archivo **strings.xml** agregamos:

```xml
<string name="box_one">Box one</string>
<string name="box_two">Box two</string>
<string name="box_three">Box three</string>
<string name="box_four">Box four</string>
<string name="box_five">Box five</string>
```

A nuestro textView agregamos los atributos:

```xml
android:id="@+id/box_one_text"
android:text="@string/box_one"
style="@style/whiteBox"

```

## Agregar segundo TextView

1. Arrastramos un TextView debajo de 'Box One' en el activity.

2. Seleccionamos el nuevo TextView y creamos un constraint hacia el elemento de arriba. Manteniendo presionado el punto superior (constraint handle) y arrastrando hacia el punto inferior de 'Box One'

![image](/img/android/img28.png)

3. Seleccionamos el punto izquiero y arrastramos hacia el borde izquierdo del layout.

![image](/img/android/img29.png)

4. Agregamos los atributos a nuestra segunda caja.

```xml
android:id="@+id/box_two_text"
android:text="@string/box_two"
style="@style/whiteBox"
android:layout_width="130dp"
android:layout_height="130dp"
```

5. Tendremos lo siguiente:

![image](/img/android/img30.png)

## Cadena de elementos (chain)

Una cadena es un grupo de elementos que estan enlazadas entre si por constaints bidireccionales y pueden ser distribuidas horizontal o verticalmente.

### Cabeza de la cadena (head)

El primer elemento de una cadena se le llama **head**. Los atributos que se le asignen son distribuidos a los demás elementos de la cadena. Para una cadena horizontal el head sería la primera a la izquierda y en una cadena vertical el head seria la primera desde arriba.

![image](/img/android/31.png)

### Estilos de una cadena

Se define un estilo para distribuir y alinear los elementos de una cadena.

1. `Spread`: es por defecto, los elementos se distribuyen uniformemente en el espacio disponible, teniendo en cuenta los margenes.

2. `Spread inside`: el primer y último elemento se adjuntan al padre en cada extremo de la cadena. El resto de los elementos se distribuyen uniformemente en el espacio disponible.

3. `Weighted`: Los elementos se redimensionan para llenar todo el espacio, según los valores establecidos en los atributos **layout_constraintHorizontal_weight o layout_constraintVertical_weight**.

4. `Packed`: Las elementos se empaquetan juntos, una vez que se tienen en cuenta los márgenes.

![image](/img/android/32.png)

## Agregar una cadena a nuestro activity

1. Arrastramos **3 TextViews** debajo de **box one** y a la derecha de **box two**.

2. Agregamos **estilo, texto y Id** para los elementos.

3. Seleccionamos los 3 elementos, damos clic derecho, seleccionamos **chains** y luego **create vertical chain**.

![img](/img/android/33.png)

4. Agregamos un constraint del **top** de **Box Three** hacia el **top** de **Box Two**.

![img](/img/android/34.png)

5. Agregamos un constraint del **bottom** de **Box Five** hacia el **bottom** de **Box Two**.

![img](/img/android/35.png)

### Agregar constrains a los lados

1. Agregamos un constraint de la izquierda de **Box Three** hacia la derecha de **Box Two** (de tipo match constraint).

2. Agregamos un constraint de la derecha de **Box Three** hacia la derecha del Layout (de tipo match constraint).

3. Repetir los dos pasos anteriores para **Box Four** y **Box Five**.

![img](/img/android/36.png)

### Agregar margin

1. **Box Three** agregar **margin** de **16dp** a la izquierda y derecha.

2. Repetir el paso anterior para **Box Four** y **Box Five**.

3. En **Box Three** agregamos margin top de **0dp**.

4. En **Box Five** agregamos margin bottom de **0dp**.

### Definir chain style

En el primer TextView (Box three) de la cadena agregar el siguiente atributo para definir el estilo de la cadena:

```
app:layout_constraintVertical_chainStyle="spread_inside"
```

![img](/img/android/37.png)

### Ejecutar la app

Al ejecutar nuestra app en el emulador podemos ver el resultado y si giramos el dispositivo los elementos deben alinearse según sus constraints.

[Proyecto finalizado](./assets/ConstraintLayoutExample1.zip)

<!-- ## Resultado final

### Vertical

![img](/img/android/38.png)

### Horizontal

![img](/img/android/39.png) -->
