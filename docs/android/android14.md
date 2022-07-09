---
id: android14
title: Navegación - Parte 4
---

## Parámetros entre Fragments

### Safe Args Plugin

Para pasar parámetros entre fragmentos agregamos el plugin `Safe Args`. Además del paso de valores, este plugin nos puede ayudar a evitar algunos errores que podrián darse durante la navegación, como por ejemplo:

* **Discrepancia entre tipos de datos:** por ejemplo si el `Fragmento A` envia un String pero el `Fragmento B` espera un `Int`, la App nos marcaria un error en tiempo de ejecución (crash).

* **Error en el nombre del parámetro:** por ejemplo si el `Fragmento B` requiere un parámetro con un nombre que el `Fragment A` no ha enviado, entonces la app nos marcaría un error en tiempo de ejecución.

Para evitar estos problemas y capturar los errores en tiempo de compilación usaremos el plugin **Safe Args** que genera código y clases que ayudan a detectar errores en tiempo de compilación que de otro modo podrían pasar por alto hasta que se ejecute la app.

### Configurar Plugin

1. En nuestro archivo gradle del proyecto *(build.gradle: project)* en la parte superior agregamos las siguiente lineas:

```
buildscript {
    ...

    repositories {
        google()
    }

    dependencies {
        classpath("androidx.navigation:navigation-safe-args-gradle-plugin:$navigationVersion")
    }
}
```

2. En nuestro archivo gradle de la app *(build.gradle: module)*, luego de la sección `plugins` agregamos la siguiente linea:

```
id 'androidx.navigation.safeargs.kotlin'
```

3. Hacemos `Sync` en los archivos Gradle y en el caso que nos pida instalar algo lo hacemos.

### Clases NavDirection

El plugin *Safe Args* nos va a generar clases `NavDirection` para cada fragmento. Estas clases repesentan la navegación para todas las **actions** en la aplicación. Por ejemplo para un fragmento `RegistrationFragment` se genera una clase `RegistrationFragmentDirections`, esto nos permite tener un tipado seguro en los parámetros entre los fragmentos.

### Configurar parámetro

1. En la vista de diseño del Navigation Graph seleccionamos el fragmento `VerifyFragment`.

2. En el panel de atributos buscamos la sección Argumentos (Arguments) y presionamos el botón `+`.

3. Nos aparece una ventana donde podemos configurar el paramétro que necesitemos. En nuestro caso se llamará `carnet` y será de tipo `String`.

4. Repetimos el proceso anterior para definir un paramétro llamado `phone` de tipo `String`.

### Implementación

Dentro del Click Listener definido para el botón "Verificar" borramos el código existente y agregamos:

```kotlin
// Obtenemos los valores de carnet y phone
val carnet = carnetEditText.text.toString()
val phone = phoneEditText.text.toString()

// Validamos los datos no esten vacios y tengan longitudes correctas.
if (phone.isEmpty() || carnet.isEmpty() || phone.length != 8 || carnet.length != 6) {
    showErrorMessage()
} else {
    // Invocamos la clase Nav Direction con la acción correspondiente.
    val action = RegistrationFragmentDirections.actionRegistrationFragmentToVerifyFragment(carnet = carnet, phone = phone);

    // Navegamos a la acción.
    it.findNavController().navigate(action)
}
```

### Agregar mensaje de error

Agregaremos un método llamado `showErrorMessage` para mostrar el mensaje al usuario, indicandole el error a través del componente `AlertDialog`:

```kotlin
fun showErrorMessage() {
    val dialog = AlertDialog.Builder(this.context)

    dialog.setTitle("Error")
    dialog.setMessage("Ingrese los datos solicitados. El teléfono debe contener 8 caracteres y el carné 6 caracteres.")
    dialog.setNeutralButton("OK") { dialogInterface, which ->
        // Nada por hacer...
    }

    dialog.show()
}
```

### Recuperar parámetros enviados

* En la clase `VerifyFragment` vamos a utilizar los parámetros que se enviaron desde `RegistrationFragment`.

* En el método `onViewCreated` recuperamos el parámetro a través de `VerifyFragmentArgs`:

```kotlin
// Las clases "FragmentArgs" son autogeneradas para cada fragmento y contienen los parámetros enviados
var arguments = VerifyFragmentArgs.fromBundle(requireArguments())

titleTextView.text = "Se ha enviado un código de acceso al teléfono: ${arguments.phone}"
```
