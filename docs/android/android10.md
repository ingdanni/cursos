---
id: android10
title: Interactividad
---

> Para esta sección vamos a retomar el proyecto de Fragmentos.

## Layout

En nuestro layout `fragment_first` vamos a agregar 3 componentes: 1 TextView y 2 Buttons, definiendo algunas propiedades:

* `id`: counter_text, button_add, button_subtract
* `Text`: "0", "Sumar", "Restar"
* `margin`: 20 dp para cada elemento.

## Clase R

La clase `R` contiene la definición a todos los recursos disponibles en nuestro proyecto. Por ejemplo si tenemos un elemento con el siguiente atributo id:

`android:id="@+id/example_button"`

Podemos referenciar ese id desde kotlin de la siguiente forma:

`R.id.example_button`

> Esta clase es autogenerada por Android

## Modificar clase FirstFragment

En la parte superior de la clase FirstFragment vamos a agregar 4 propiedades:

```kotlin
var counter: Int = 0

lateinit var counterText: TextView
lateinit var buttonAdd: Button
lateinit var buttonSubtract: Button
```

En la función `onCreateView` sustituimos el código existente por el siguiente:

```kotlin
// creamos una referencia de la vista del fragmento
var view = inflater.inflate(R.layout.fragment_first, container, false)

// creamos una referencia a cada elemento dentro de la vista (usando su respectivo id)
counterText = view.findViewById(R.id.counter_text)
buttonAdd = view.findViewById(R.id.button_add)
buttonSubtract = view.findViewById(R.id.button_subtract)

return view
```

Luego sobreescribimos la función `onViewCreated`:

```kotlin
override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
  super.onViewCreated(view, savedInstanceState)
  // agregar codigo
}
```

## Event Listener

Dentro de la función `onViewCreated` vamos a agregar el siguiente código para agregar eventListeners a nuestros botones y configurar la etiqueta del contador:

```kotlin
counterText.text = counter.toString()

buttonAdd.setOnClickListener {
    counter++
    counterText.text = counter.toString()
}

buttonSubtract.setOnClickListener {
    counter--
    counterText.text = counter.toString()
}
```

> Un EventListener es una función que se ejecuta cuando ocurre un evento determinado (clic, tap, drag, scroll, etc...).
