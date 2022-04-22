---
id: android14
title: Navegación - Parte 4
---

## Parámetros entre Fragments

[ **Descargar Proyecto Inicial**](./assets/class7_starter.zip)

### Safe Args Plugin

Necesitamos pasar valores entre fragmentos y agregaremos el plugin `Safe Args` para evitar algunos errores que podrian darse durante la navegación, como por ejemplo:

* **Discrepancia entre tipos de datos:** por ejemplo si el `Fragmento A` envia un String pero el `Fragmento B` espera un `Int`, la App nos marcaria un error en tiempo de ejecución.

* **Error en el nombre del parámetro:** por ejemplo si el `Fragmento B` requiere un parámetro con un nombre que el `Fragment A` no ha enviado, entonces la app nos marcaria un error en tiempo de ejecución.

Para evitar estos problemas y capturar los errores en tiempo de compilación usaremos una caracteristica del componente **Navigation Architecture** de Android, llamado **Safe Args**.

Es un Plugin de Gradle que genera código y clases que ayudan a detectar errores en tiempo de ejecución que de otro modo podrían pasar por alto hasta que se ejecute la app.

### Configurar Plugin

1. En nuestro archivo gradle del proyecto (build.gradle: project) en la parte superior agregamos las siguiente lineas:

```
buildscript {
    repositories {
        google()
    }
    dependencies {
        classpath("androidx.navigation:navigation-safe-args-gradle-plugin:2.3.0")
    }
}
```

2. En nuestro archivo gradle de la app (build.gradle: module), luego de la sección `plugins` agregamos la siguiente linea:

```
id 'androidx.navigation.safeargs.kotlin'
```

3. Hacemos rebuild del proyecto en Android Studio y en el caso que nos pida instalar algo lo hacemos.

> 💡 IMPORTANTE: El plugin Safe Args nos va a generar clases `NavDirection` para cada fragmento. Estas clases repesentan la navegación para todas las **actions** en la app. Por ejemplo para el fragmento `FirstFragment` se genera una clase `FirstFragmentDirections`, esto nos permite tener un tipado seguro en los parámetros entre fragmentos.

### Preparar fragmentos

1. Para este ejercicio vamos a utilizar dos fragmentos llamados: `FirstFragment` y `SecondFragment` con sus respectivos layouts y un Navigation Graph de la misma forma que se realizo en la sección anterior.

2. Para el layout del primer fragmento **fragment_first.xml** vamos a agregar los siguientes componentes:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <LinearLayout
        android:padding="20dp"
        android:orientation="vertical"
        android:layout_height="match_parent"
        android:layout_width="match_parent">

        <TextView
            android:id="@+id/title_text"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="20dp"
            android:text="Ingresa tu correo electrónico"
            android:textAlignment="textStart"
            android:textSize="20dp"
            android:textStyle="bold">
        </TextView>

        <EditText
            android:id="@+id/email_edit_text"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:ems="10"
            android:inputType="textEmailAddress" />

        <Button
            android:id="@+id/login_button"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="16dp"
            android:text="Restaurar contraseña"
            android:textSize="20dp" />

        <Button
            android:id="@+id/crear_cuenta_button"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:backgroundTint="@color/white"
            android:textColor="@color/black"
            android:padding="16dp"
            android:text="Crear una cuenta"
            android:textSize="18dp" />

    </LinearLayout>
</LinearLayout>
```

2. Para el layout del segundo fragmento **fragment_second.xml** vamos a agregar los siguientes componentes:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <LinearLayout
        android:padding="20dp"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical">

        <TextView
            android:id="@+id/second_fragment_text"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:padding="20dp"
            android:text="Mensaje"
            android:textAlignment="center"
            android:textSize="20dp"
            android:textStyle="bold" />

    </LinearLayout>
</LinearLayout>
```

3. En la clase `FragmentFirst` agregamos tres variables:

```kotlin
lateinit var loginButton: Button
lateinit var createAccountButton: Button
lateinit var emailTextEdit: EditText
```

4. Dentro de la función `onCreateView` las inicializamos:

```kotlin
loginButton = view.findViewById(R.id.login_button)
createAccountButton = view.findViewById(R.id.crear_cuenta_button)
emailTextEdit = view.findViewById(R.id.email_edit_text)
```

5. Dentro de la función `onViewCreated` agregamos un Click Listener:

```kotlin
loginButton.setOnClickListener {
  // acá se enviaran los parámetros al otro fragmento
}
```

### Configurar parámetro

1. En la vista de diseño del Navigation Graph seleccionamos el segundo fragmento.

2. En el panel de atributos buscamos la sección Argumentos (arguments) y presionamos el botón `+`.

3. Nos aparece una ventana donde podemos configurar el paramétro que necesitemos. En nuestro caso se llamará `email` y será de tipo `String`

### Implementación

Dentro del click listener definido anteriormente agregamos la siguiente llamada a la clase `FirstFragmentDirections` que contiene todas las acciones (actions) disponibles:

```kotlin
val email = emailTextEdit.text.toString()

val action = FirstFragmentDirections.actionFirstFragmentToSecondFragment(email)

it.findNavController().navigate(action)
```

### Agregar validación

Antes de navegar hacia la otra pantalla podemos validar el parámetro para no enviarlo vacío.

1. Agregamos la siguiente validación en el Click Listener:

```kotlin
val email = emailTextEdit.text.toString()

if (email.isEmpty()) {
       showMessage()
} else {
    val action = FirstFragmentDirections.actionFirstFragmentToSecondFragment(email)

    it.findNavController().navigate(action)
}
```

2. Agregamos la función `showMessage` para mostrar un mensaje usando la clase `Toast`:

```kotlin
fun showMessage() {
    val text = "Ingrese un correo electrónico"

    val duration = Toast.LENGTH_SHORT

    val toast = Toast.makeText(context, text, duration)

    toast.show()
}
```

### Recuperar parámetros enviados

* En la clase `SecondFragment` vamos a utilizar el parámetro que se envió (email).

* Agregamos una variable de referencia al TextView:

```kotlin
lateinit var secondFragmentText: TextView
```

* En el método `onCreateView` inicializamos la variable `secondFragmentText`:

```kotlin
secondFragmentText = view.findViewById(R.id.second_fragment_text)
```

* En el método `onViewCreated` recuperamos el parámetro a través de `requireArguments()`:

```kotlin
val args = SecondFragmentArgs.fromBundle(requireArguments())

val email = args.email

secondFragmentText.text = "Se ha enviado un código de acceso al correo: ${email}"
```
