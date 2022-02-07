# Data Binding con ViewModel y LiveData

Para completar esta sección usaremos el proyecto terminado de la sección anterior: [LiveData Observers](./live-data-observers.html).

Puede descargar el proyecto terminado de la sección anterior en el siguiente enlace:

[⬇️  Proyecto - LiveData2](../downloads/LiveData2.zip)

## Introducción

En la app las vistas se definen en un archivo de layout XML y los datos se mantienen en los objetos `ViewModel`.

Para cada vista existe una clase **UI Controller** y una clase ViewModel.

![image](./images/58.png)

Por ejemplo:

* El botón "Sumar" se define como un **Button** en el archivo `fragment_first.xml`

* En la clase `FirstFragment` se llama a través de un clic listener al método que corresponda de la clase `FirstFragmentViewModel`.

* El contador `count` se actualiza en el ViewModel.

En este caso el botón en la vista no se comunica directamente con el ViewModel. Seria más simple si los elementos en el layout se comunicaran directamente con los datos en el ViewModel. En ese sentido vamos a asociar la clase `FirstViewModel` con su layout XML correspondiente.

## Enlazar DataBinding con el ViewModel

En nuestro archivo de layout agregamos una etiqueta `data` dentro de la etiqueta `layout`. Dentro de esta etiqueta se define una variable usando una etiqueta `variable` de la siguiente forma:

```xml
<data>
    <variable
        name="firstViewModel"
        type="com.example.fragments.first.FirstViewModel" />
</data>
```

En la clase del fragmento `FirstFragment` vamos a enlazar la propiedad `variable` del layout que acabamos de agregar con el `ViewModel`. Agregamos la siguiente linea después de inicializar la propiedad `binding`:

```kotlin
binding.firstViewModel = viewModel
```

## Manejo de eventos

Para manejar los eventos usaremos `Listener bindings` que son expresiones que se ejecutan cuando eventos `onClick()`, `onZoomIn()` o `onZoomOut()` son llamados y se definen como expresiones lambda.

Vamos a agregar una llamada a las funciones de nuestro `ViewModel` usando la propiedad `onClick` de cada uno de los botones de nuestro layout.

1. Para el botón `add_button`:

```xml
android:onClick="@{ () -> firstViewModel.add() }"
```

2. Para el botón `subtract_button`:

```xml
android:onClick="@{ () -> firstViewModel.subtract() }"
```

3. Para el botón `reset_button`:

```xml
android:onClick="@{ () -> firstViewModel.reset() }"
```

4. En la clase del fragmento `FirstFragment` borramos las funciones `add()`, `subtract()` y `reset()`.


## Agregar DataBinding para LiveData Observers

En el ViewModel tenemos una propiedad `count` que vamos a enlazar con nuestro layout. Usando la propiedad `text` del componente `TextView` asignamos el valor de la propiedad `count`.

Al ser un `LiveData` de tipo `Int`, usamos la function `String.valueOf()` para convertirlo a `String`.

```xml
android:text="@{ String.valueOf(firstViewModel.count) }"
```

Para manejar cambios en el ciclo de vida asignamos `viewLifecycleOwner` a la propiedad `lifecycleOwner` de `binding`. Agregamos la siguiente linea luego de inicializar la propiedad `binding`:

```kotlin
binding.lifecycleOwner = viewLifecycleOwner
```

En nuestra clase `FirstFragment` podemos remover el `Observer` que habiamos creado, ya que los datos se enlazan directamente del `ViewModel` al `Layout`.

```kotlin
// remover el observer
viewModel.count.observe(viewLifecycleOwner, Observer { newValue ->
  binding.countText.text = newValue.toString()
})
```

## Resultado final

### Clase FirstFragment

```kotlin
class FirstFragment : Fragment() {

    private lateinit var binding: FragmentFirstBinding

    private lateinit var viewModel: FirstViewModel

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {

        viewModel = ViewModelProvider(this).get(FirstViewModel::class.java)

        binding = DataBindingUtil.inflate<FragmentFirstBinding>(
            inflater,
            R.layout.fragment_first,
            container,
            false)

        binding.firstViewModel = viewModel

        binding.lifecycleOwner = viewLifecycleOwner

        return binding.root
    }

    // Ciclo de vida

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Log.i("Live data", "On create...")
    }

    override fun onDestroy() {
        super.onDestroy()

        Log.i("Live data", "On Destroy...")
    }
}
```

### Archivo fragment_first.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    tools:context="com.example.fragments.first.FirstFragment">

    <data>
        <variable
            name="firstViewModel"
            type="com.example.fragments.first.FirstViewModel" />
    </data>

    <LinearLayout
        android:orientation="vertical"
        android:padding="16dp"
        android:layout_height="match_parent"
        android:layout_width="match_parent">

        <TextView
            android:id="@+id/count_text"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="50dp"
            android:padding="16dp"
            android:text="@{ String.valueOf(firstViewModel.count) }"
            android:textAlignment="center"
            android:textSize="60sp" />

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="vertical">

            <Button
                android:id="@+id/add_button"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_weight="0"
                android:text="Sumar"
                android:onClick="@{ () -> firstViewModel.add() }"
                android:textSize="16dp" />

            <Button
                android:id="@+id/subtract_button"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_weight="0"
                android:onClick="@{ () -> firstViewModel.subtract() }"
                android:text="Restar" />

            <Button
                android:id="@+id/reset_button"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                android:layout_weight="0"
                android:onClick="@{ () -> firstViewModel.reset() }"
                android:text="Reset" />

        </LinearLayout>

    </LinearLayout>
</layout>
```

### Clase FirstViewModel

```kotlin
class FirstViewModel : ViewModel() {

    private var _count = MutableLiveData<Int>()

    val count: LiveData<Int> get() = _count

    init {
        Log.i("Live data", "FirstViewModel creado...")

        _count.value = 0
    }

    override fun onCleared() {
        super.onCleared()

        Log.i("Live data", "FirstViewModel destruido...")
    }

    fun add() {
        _count.value = (count.value)?.plus(1)
    }

    fun subtract() {
        if (_count.value!! > 0) {
            _count.value = (count.value)?.minus(1)
        }
    }

    fun reset() {
        _count.value = 0
    }
}
```

### Descargar proyecto terminado

Puede descargar el proyecto terminado de esta sección en el siguiente enlace:

[⬇️  Proyecto - LiveData2-Terminado](../downloads/LiveData2-Terminado.zip)
