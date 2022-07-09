---
id: android15
title: Navegación - Tarea
---

## Orientaciones

* Investigar y crear un ejemplo de como Navegar y pasar parámetros entre actividades haciendo uso de `Intents`.

* Valor: 10pts

* Fecha de entrega: Julio, 17

<!-- ## Navegar hacia otro Activity

En algunas ocasiones es necesario mostrar otro `Activity` en vez de trabajar con `Fragmentos`.

* En ese caso debemos crear otra `Activity`, damos click derecho en el folder `res > layout` y seleccionamos `activity > empty activity`.

* La vamos a llamar `CreateAccountActivity`, se crearán 2 archivos `CreateAccountActivity.kt` y `activity_create_account.xml`.

### Configurar layout

En el layout de la actividad vamos a agregar un solo componente, que es un **TextView** el cual mostrará un `email` que se pasará como parámetro desde la pantalla anterior:

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".CreateAccountActivity">

    <TextView
        android:id="@+id/email_text"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="24dp"
        android:layout_marginTop="24dp"
        android:layout_marginEnd="24dp"
        android:text="email"
        android:textAlignment="center"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
</androidx.constraintlayout.widget.ConstraintLayout>
```

### Crear un Intent

Un `Intent` es un objeto que proporciona enlace de tiempo de ejecución entre componentes separados, como dos actividades. El `Intent` representa la intención de una aplicación de hacer algo. Puede usar intenciones para una amplia variedad de tareas, pero en esta lección, su intención inicia otra actividad.

* En la clase `FirstFragment` agregamos un click listener para el botón `createAccountButton`:

```kotlin
createAccountButton.setOnClickListener {
  // agregar intent
}
```

* Dentro del click listener agregamos nuestro `Intent`

```kotlin
val email = emailTextEdit.text.toString()

if (email.isEmpty()) {
    showMessage()
} else {
    val intent = Intent(context, CreateAccountActivity::class.java).apply {
        putExtra("param.email", email)
    }

    startActivity(intent)
}
```

* El constructor de `Intent` recibe 2 parámetros, un `Context` y una `Class`.

* El primer parámetro se refiere al contexto (activity) desde donde se realiza el `Intent`.

* El segundo parámetro se refiere al componente al cual se entrega el `Intent`.

* El método `putExtra()` se agrega  el valor del `email` que necesitamos enviar. Un `Intent` puede transportar tipos de datos como pares de clave-valor llamados extras.

* El método `startActivity()` crea una instancia de la clase que se especifica en el `Intent`.

### Obtener datos del Intent

En la clase `CreateAccountActivity` vamos a recuperar los datos que se han enviado en el Intent.

* Agregamos una variable para acceder al `TextView`.

```kotlin
lateinit var emailText: TextView
```

* Dentro del método `onCreate` agregamos:

```kotlin
emailText = findViewById(R.id.email_text)

val email = intent.getStringExtra("param.email")

emailText.text = email
```

* Con el método `getStringExtra` obtenemos el valor del parámetro enviado en el `Intent` y lo mostramos en el TextView.

### Agregar navegación hacia atrás

Cada pantalla de la aplicación que no sea el punto de entrada principal, que son todas las pantallas que no son la pantalla de inicio, debe proporcionar una navegación que dirija al usuario a la pantalla principal lógica en la jerarquía de la aplicación. Para hacer esto, agregue un botón **Up** en la barra de la aplicación (representado por la flecha).

Para agregar un botón **Up**, se debe declarar qué actividad es el padre lógico en el archivo `AndroidManifest.xml`. Abrir el archivo en aplicación > manifests > AndroidManifest.xml, busque la etiqueta `<activity>` para `CreateAccountActivity` y reemplazar con lo siguiente:

```xml
<activity
    android:label="Crear cuenta"
    android:name=".CreateAccountActivity"
    android:exported="false">
    <meta-data
        android:name="android.support.PARENT_ACTIVITY"
        android:value=".MainActivity">
    </meta-data>
</activity>
```

[ **Descargar Proyecto Finalizado**](./assets/class7_final.zip) -->
