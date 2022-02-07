# RecyclerView y Adapter - Parte 2

## Proyecto

Para esta sesión vamos a retomar el proyecto de la clase anterior, podemos descargarlo en el siguiente enlace:

[⬇️  Proyecto - RecyclerView Terminado](../downloads/RecyclerView-Terminado.zip)

## Agregar dependencia de CardView

En nuestro archivo Gradle (module) agregamos la siguiente dependencia para que podamos utilizar el componente `CardView`:

```kotlin
implementation("androidx.cardview:cardview:1.0.0")`
```

## Crear ViewHolder

Vamos a reemplazar el ViewHolder simple que solamente nos muestra texto con otro que nos permita mostrar más información de los eventos. El `TextItemViewHolder` solamente nos muestra un `TextView` en cada fila pero vamos a crear otro `ViewHolder` para mostrar una fila con un componente `CardView` que contenga varios elementos para mostrar el nombre, valor y fecha de cada evento.

1. Creamos un archivo de Layout y lo nombramos `list_item_event`.

2. Reemplazamos el código generado por el siguiente:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

    <androidx.cardview.widget.CardView
        xmlns:card_view="http://schemas.android.com/apk/res-auto"
        android:id="@+id/card_view"
        android:elevation="16dp"
        android:layout_gravity="center"
        android:layout_margin="8dp"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        card_view:cardCornerRadius="8dp">

        <LinearLayout
            android:padding="8dp"
            android:orientation="vertical"
            android:layout_width="match_parent"
            android:layout_height="match_parent">

            <LinearLayout
                android:orientation="horizontal"
                android:layout_width="match_parent"
                android:layout_height="wrap_content">
                <TextView
                    android:id="@+id/name_text"
                    android:layout_height="match_parent"
                    android:layout_width="wrap_content"
                    android:layout_weight="1"
                    android:text="Sumar"
                    android:textSize="20sp"
                    />

                <TextView
                    android:id="@+id/value_text"
                    android:text="100"
                    android:textSize="40sp"
                    android:layout_width="wrap_content"
                    android:layout_height="match_parent" />
            </LinearLayout>

            <TextView
                android:id="@+id/date_text"
                android:text="10/10/2021"
                android:textSize="18sp"
                android:layout_width="match_parent"
                android:layout_height="match_parent" />

        </LinearLayout>
    </androidx.cardview.widget.CardView>
</LinearLayout>
```

3. Abrimos el archivo `EventAdapter.kt`.

4. Creamos una clase llamada `EventViewHolder` y la hacemos heredar de `RecyclerView.ViewHolder`:

```kotlin
class EventViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {

}
```

5. Dentro de la clase `EventViewHolder` vamos a crear una referencia a cada uno de los componentes `TextView` que mostraran la información de los eventos:

```kotlin
val nameText: TextView = itemView.findViewById(R.id.name_text)
val valueText: TextView = itemView.findViewById(R.id.value_text)
val dateText: TextView = itemView.findViewById(R.id.date_text)
```

## Actualizar EventAdapter

1. Nos aseguramos que la clase `EventAdapter` use el `ViewHolder` que acabamos de crear.

```kotlin
class EventAdapter: RecyclerView.Adapter<EventViewHolder>()
```

2. Actualizamos la función `onBindViewHolder` para que maneje un objeto `EventViewHolder`:

```kotlin
override fun onBindViewHolder(holder: EventViewHolder, position: Int) {
    val item = data[position]

    holder.nameText.text = item.name?.uppercase()

    if (item.name == "add") {
        holder.nameText.setTextColor(Color.GREEN)
    } else {
        holder.nameText.setTextColor(Color.RED)
    }

    holder.valueText.text = item.value.toString()

    val createdAt = convertLongToTime(item.createdAt)

    holder.dateText.text = "Fecha: ${createdAt}"
}
```

3. Actualizamos la función `onCreateViewHolder` para que nos retorne un objeto `EventViewHolder`:

```kotlin
override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): EventViewHolder {
    val layoutInflater = LayoutInflater.from(parent.context)

    val view = layoutInflater
        .inflate(R.layout.list_item_event, parent, false)

    return EventViewHolder(view)
}
```

4. Por último agregamos la función `convertLongToTime` para dar formato a la fecha:

```kotlin
fun convertLongToTime(time: Long): String {
    val date = Date(time)
    val format = SimpleDateFormat("dd/MM/yyyy HH:mm")
    return format.format(date)
}
```

## Resultado final

![image](./images/66.png)
