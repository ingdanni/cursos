# Parámetros entre Fragments

## Proyecto Inicial

Para esta sección vamos a descargar el siguiente proyecto:

[⬇️  Proyecto - Params](../downloads/Params.zip)

* Este proyecto contiene 2 fragmentos y una acción que navega desde el primer fragmento hacia el segundo fragmento cuando se presiona un botón.

* Vamos a agregar un parámetro "name" hacia el segundo fragmento desde el primero.

* El segundo fragmento lee el valor del parametro y lo muestra en pantalla.

## Safe Args Plugin

Necesitamos pasar valores entre fragmentos y agregaremos el plugin `Safe Args` para evitar algunos errores que podrian darse durante la navegación, como por ejemplo:

* **Discrepancia entre tipos de datos:** por ejemplo si el Fragmento A envia un String pero el Fragmento B espera un Int, la App nos marcaria un error en tiempo de ejecución.

* **Error en el nombre del parametro:** por ejemplo si el Fragmento B requiere un parámetro con un nombre que el Fragment A no ha enviado, entonces la app nos marcaria un error en tiempo de ejecución.

Para evitar estos problemas y capturar los errores en tiempo de compilación usaremos una caracteristica del componente **Navigation Architecture** de Android, llamado **Safe Args**.

Es un Plugin de Gradle que genera código y clases que ayudan a detectar errores en tiempo de ejecución que de otro modo podrían pasar por alto hasta que se ejecute la app.

### Instalación

1. En nuestro archivo gradle del proyecto (build.gradle: project) en la sección `dependencies` agregamos la siguiente linea:

```
dependencies {
    ...
    classpath "androidx.navigation:navigation-safe-args-gradle-plugin:$navigationVersion"
    ...
}

```

2. En nuestro archivo gradle de la app (build.gradle: module), luego de la sección `plugins` agregamos la siguiente linea:

```
apply plugin: 'androidx.navigation.safeargs'
```

3. Hacemos rebuild del proyecto en Android Studio y en el caso que nos pida instalar algo lo hacemos.

> 💡 IMPORTANTE: El plugin safe args nos va a generar clases `NavDirection` para cada fragmento. Estas clases repesentan la navegación para todas las **actions** en la app. Por ejemplo para el fragmento `FirstFragment` se genera una clase `FirstFragmentDirections`, esto nos permite tener un tipado seguro en los parámetros entre fragmentos.

### Implementación

En la clase FirstFragment dentro de la función setOnClickListener, en el parámetro de la funcion `NavController.navigate()` reemplazamos el ID de la acción por la siguiente función que fue definida en la clase `FirstFragmentDirections`:

```kotlin
it.findNavController().navigate(
    FirstFragmentDirections.actionFirstFragmentToSecondFragment()
)
```

Si corremos la app, debe funcionar de la misma forma.

### Definir parametro

En nuestro **Navigation graph** con la pestaña diseño seleccionada, seleccionamos el fragmento **SecondFragment** y vemos en el panel de atributos una sección llamada **Arguments** que al lado derecho tiene un botón con el ícono +.

1. Damos clic en el ícono +.

2. Nos aparece una ventana e ingresamos un nombre y tipo de dato para nuestro parámetro. (Nombre: name, Tipo: String)

![image](./images/52.png)

### Pasar parámetro

En nuestra clase FirstFragment localizamos nuevamente la función `NavController.navigate()` y agregamos el parámetro `name` dentro de `FirstFragmentDirections.actionFirstFragmentToSecondFragment()`, quedando nuestro código de la forma siguiente:

```kotlin
it.findNavController().navigate(
    FirstFragmentDirections.actionFirstFragmentToSecondFragment(binding.nameText.text.toString())
)
```

### Leer el parámetro

En nuesta clase SecondFragment localizamos la función `onCreateView()`, luego de la declaración de `binding` agregamos el siguiente código:

```kotlin
var args = SecondFragmentArgs.fromBundle(requireArguments())

binding.nameText.text = args.name.uppercase()
```

El objeto `args` contiene cada uno de los parámetros que agregamos a nuestro Fragment.

## Resultado final

Al correr la app, ingresamos un nombre y presionar el botón enviar. Al navegar hacia el siguiente fragmento el nombre se muestra en el componente `nameText`.
