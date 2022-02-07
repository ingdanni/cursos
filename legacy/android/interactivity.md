# Interactividad

## Configurar Activity

Creamos un nuevo proyecto en blanco y difinimos nuestro **activity_main.xml** de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">


</LinearLayout>

```

En la paleta de componentes seleccionamos `Text` y luego arrastramos un `Plan Text` a nuestro Layout.

Definimos los siguientes atributos para el `EditText`:

* id -> name_edit
* layout_width -> match_parent
* layout_height -> wrap_content

Agregamos el siguiente recurso a nuestas Strings:

```xml
<string name="enter_name">Ingresa tu nombre</string>
```

Agregamos las siguientes propiedades a nuestro EditText:

* `android:textAlignment="center"`
* `android:hint="@string/enter_name"`

## Configurar el inputType

El atributo `inputType` especifica el tipo de entrada que el usuario puede escribir en el EditText. El sistema entonces despliega el teclado apropiado dependiendo del inputType que se haya definido.

Para nuestro caso seleccionamos `textPersonName`.

## Agregar un botón

Arrastramos desde la paleta de componentes en `Common > Button` a nuestro layout.

Agregamos un nuevo String:

```xml
<string name="save">Guardar</string>
```

Definimos los siguientes atributos en el botón:

* id -> save_button
* text -> @string/save
* layout_gravity -> center_horizontal
* layout_width -> wrap_content

## Agregar un TextView

Arrastramos desde la paleta de componentes en `Text > TextView` a nuestro layout.

Asignamos los siguientes atributos:

* id -> name_text
* textAlignment -> center
* text -> "" (cadena vacia)

### Definir visibilidad

El atributo `visibility` puede ser alguno de estos tres valores:

1. Visible: se puede ver el elemento.
2. Invisible: oculta el elemento pero ocupa espacio en el layout.
3. Gone: oculta el elemento pero no ocupa espacio en el layout.

En nuestro caso ocupamos `Gone`.

## Vista completada

Al final nuestra activity quedará de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:visibility="visible"
    tools:context=".MainActivity">

    <EditText
        android:id="@+id/name_edit"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:autofillHints="name"
        android:ems="10"
        android:hint="@string/enter_name"
        android:inputType="textPersonName"
        android:textAlignment="center"
        tools:ignore="TouchTargetSizeCheck,TouchTargetSizeCheck" />

    <Button
        android:id="@+id/save_button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_horizontal"
        android:text="@string/save" />

    <TextView
        android:id="@+id/name_text"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text=""
        android:textAlignment="center"
        android:visibility="gone" />

</LinearLayout>
```

## Click listeners

### Agregar click listener al botón

Un click listener en nuestro **Button** especifica la acción que se debe realizar cuando la vista es presionada por el usuario (tap).

Abrimos el archivo `MainActivity.kt`, dentro de la clase `MainActivity` agregamos la siguiente funcion:

```kotlin
private fun addName(view: View) {

}
```

Dentro de la función **addName** agregamos lo siguiente:

```kotlin

// 1. usamos la funcion findViewById() para tener una referencia los elementos name_edit y name_text
val nameEditText = findViewById<EditText>(R.id.name_edit)
val nameTextView = findViewById<TextView>(R.id.name_text)

// 2. asignamos el texto de name_edit en name_text
nameTextView.text = nameEditText.text

// 3. Ocultamos name_edit
nameEditText.visibility = View.GONE

// 4. Ocultamos el botón
view.visibility = View.GONE

// 5. Mostramos name_text
nameTextView.visibility = View.VISIBLE

// 6. Ocultamos el teclado
val inputMethodManager = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
        inputMethodManager.hideSoftInputFromWindow(view.windowToken, 0)
```

Dentro de la función `onCreate()`, creamos una referencia al botón **save_button**. Usamos el método `setOnClickListener` y llamamos a `addName()`:

```kotlin
findViewById<Button>(R.id.save_button).setOnClickListener {
    addName(it)
}
```

En este código, `it` se refiere al botón `save_button`, que se pasa como argumento.

### Agregar click listener al botón al TextView

De la misma forma agregaremos una función para actualizar el nombre al hacer tap en el name_text.

```kotlin
private fun updateName(view: View) {

}
```

Agregamos lo siguiente dentro de la función:

```kotlin

// 1. Referencia a name_edit y save_button
val nameEditText = findViewById<EditText>(R.id.name_edit)
val saveButton = findViewById<Button>(R.id.save_button)

// 2. Ocultamos y mostramos los elementos
nameEditText.visibility = View.VISIBLE
saveButton.visibility = View.VISIBLE
view.visibility = View.GONE

// 3. Pedimos se haga focus sobre el name_edit (cursor)
nameEditText.requestFocus()

// 4. Mostramos el teclado
val inputMethodManager = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
inputMethodManager.showSoftInput(nameEditText, 0)
```

Al final de la función `onCreate()` agregamos:

```kotlin
findViewById<TextView>(R.id.name_text).setOnClickListener {
    updateName(it)
}
```

## Completado

Al final nuestra clase `MainActivity` queda de la siguiente forma:

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_main)

        findViewById<Button>(R.id.save_button).setOnClickListener {
            addName(it)
        }

        findViewById<TextView>(R.id.name_text).setOnClickListener {
            updateName(it)
        }
    }

    private fun addName(view: View) {

        val nameEditText = findViewById<EditText>(R.id.name_edit)
        val nameTextView = findViewById<TextView>(R.id.name_text)

        nameTextView.text = nameEditText.text

        nameEditText.visibility = View.GONE

        view.visibility = View.GONE

        nameTextView.visibility = View.VISIBLE

        val inputMethodManager = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
        inputMethodManager.hideSoftInputFromWindow(view.windowToken, 0)
    }

    private fun updateName(view: View) {
        val nameEditText = findViewById<EditText>(R.id.name_edit)
        val saveButton = findViewById<Button>(R.id.save_button)

        nameEditText.visibility = View.VISIBLE

        saveButton.visibility = View.VISIBLE

        view.visibility = View.GONE

        nameEditText.requestFocus()

        val inputMethodManager = getSystemService(Context.INPUT_METHOD_SERVICE) as InputMethodManager
        inputMethodManager.showSoftInput(nameEditText, 0)
    }
}
```
