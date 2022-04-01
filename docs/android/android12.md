---
id: android12
title: Navegación - parte 2
---

## Agregar fragmentos al navigation graph

1. Abrir `navigation.xml`, en el editor de navegación, clic en `New destination`. Una lista de fragmentos y actividades aparece.

2. Seleccionamos **FirstFragment** primeramente.

3. De la misma forma agregamos **SecondFragment** y **ThirdFragment**.

> NOTA: Si en la vista previa aparece un mensaje "Preview Unavailable", vamos al codigo de `navigation.xml` y nos aseguramos que en nuestro framento tenga la propiedad `tools:layout="@layout/fragment_first"`.

4. Seleccionamos el `FirstFragment`, aparecera un circulo al lado derecho y arrastramos hacia `SecondFragment`.

5. Seleccionamos la flecha que se agrego entre los dos fragments y observamos el panel de atributos, el ID de la accion debe aparecer como `action_firstFragment_to_secondFragment`.

6. Repetir este proceso para crear una acción desde `SecondFragment` hacia `ThirdFragment` y viceversa.

Al finalizar tendremos el navigation graph de la siguiente forma:

![image](/img/android/72.png)

## Agregar click listener al boton

1. En la clase `FirstFragment`, dentro del click listener de navigateButton, agregamos la siguiente linea indicando que se va a ejecutar la acción:

```kotlin
it.findNavController().navigate(R.id.action_firstFragment_to_secondFragment)
```

2. Repetir el paso anterior para los click listeners en `SecondFragment` y `ThirdFragment` con sus acciones correspondientes.

En esta parte debemos asegurarnos que tenemos el siguiente `import`:

```kotlin
import androidx.navigation.findNavController
```
