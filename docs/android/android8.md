---
id: android8
title: Fragmentos
---

## ¿Qué son los Fragmentos?

Un fragment representa una porción de la interfaz de usuario dentro de un Activity. Podemos combinar varios fragmentos en una Activity para construir una interfaz de varios paneles y puedes reutilizar un fragment en diferentes Activities.

Podriamos definirlo como una sección modular de un Activity, como un "sub-activity".

## Características

1. Tiene su propio ciclo de vida y recibe sus propios eventos de entrada.

2. Podemos agregar o remover un Fragment mientras el activity se está ejecutando.

3. Un fragment se define en una `clase` Kotlin.

4. La interfaz se define en un archivo XML al igual que las `Activities`.

## Crear un proyecto

* Crear un proyecto en Android Studio llamado `Fragments`;

* Seleccionar `Blank Activity`.

## Agregar Fragment

1. En el folder `res/layout`, clic derecho, seleccionar `new/fragment/fragment (blank)`.

2. Definimos el nombre como `FirstFragment`.

## Actualizar Main Activity

Actualizamos nuestro `main activity` agregando un linear layout de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">


</LinearLayout>
```

## Actualizar el fragmento

Actualizamos el layout de nuestro fragment y agregamos un `linear layout` con un `text view` dentro de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:id="@+id/title_text"
        android:text="Fragmento 1"
        android:textAlignment="center"
        android:padding="16dp"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />

</LinearLayout>
```

## Actualizar la clase del fragmento

En el archivo **TitleFragment.kt** borramos algunas partes del código innecesarias debajo de los **imports** hasta dejarlo de la siguiente forma:

```kotlin
class FirstFragment : Fragment() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_first, container, false)
    }

}
```

## Agregar fragmento al activity

Dentro del LinearLayout en el MainActivity agregamos lo siguiente:

```xml
<fragment
    android:id="@+id/fragment_first"
    android:name="com.example.fragments.FirstFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

</fragment>
```

## Resultado final

Al correr la app tendremos el siguiente resultado:

![image](/img/android/41.png)
