---
id: android12
title: Navegación - parte 2
---


## Agregar fragments al navigation graph

1. Abrir navigation.xml, en el editor de navegación, clic en New destination. Una lista de fragments y activities aparece.

2. Seleccionamos fragment_title primeramente.

3. De la misma forma agregamos el SecondFragment.

Si en la vista previa aparece un mensaje "Preview Unavailable", vamos al codigo de navigation.xml y nos aseguramos que nuestro segundo frament tenga la propiedad `tools:layout="@layout/fragment_second"`.

Nos quedara de la siguiente forma:

```xml
<fragment
    android:id="@+id/titleFragment"
    android:name="com.example.fragments.TitleFragment"
    android:label="fragment_title"
    tools:layout="@layout/fragment_title" />

<fragment
    android:id="@+id/secondFragment"
    tools:layout="@layout/fragment_second"
    android:name="com.example.fragments.SecondFragment"
    android:label="SecondFragment" />
```

4. Seleccionamos el titleFragment, aparecera un circulo al lado derecho y arrastramos hacia secondFragment.

5. Seleccionamos la flecha que se agrego entre los dos fragments y observamos el panel de atributos, el ID de la accion debe aparecer como `action_titleFragment_to_secondFragment`

## Agregar click listener al boton

1. En TitleFragment.kt, dentro del método `onCreateView()`, agregamos la siguiente linea antes del return:

```kotlin
binding.navigateButton.setOnClickListener {
  it.findNavController().navigate(R.id.action_titleFragment_to_secondFragment)
}
```

En esta parte debemos asegurarnos que tenemos el siguiente import:

```kotlin
import androidx.navigation.findNavController
```

Ahora corremos la app, al dar tap al botón ir al fragmento 2, el secondFragment se abre.
