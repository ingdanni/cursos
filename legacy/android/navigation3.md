# Navegación - Parte 3

Para esta sección vamos a descargar el proyecto en el siguiente enlace:

[⬇️  Proyecto - Fragments2](../downloads/Fragments2.zip)

## Cambiar destino del botón "Atrás"

El sistema operativo mantiene un seguimiento de la navegación del usuario. Cada vez que el usuario se va a una nueva pantalla, se agrega la pantalla a la pila (back stack).

Cuando el usuario presiona el botón atrás del sistema, la aplicación se dirige al destino que esta de último en la pila. Por defecto, el último en la pila es la pantalla que el usuario vió anteriormente.

A través de una acción de navegación (navigation action) podemos modificar el comportamiento de la pila.

### Pop behavior

* El atributo `popUpTo` de un **action** define el destino del botón atrás.

* Si el atributo `popUpToInclusive` es **true** remueve el elemento actual en la pila. Si es **false** deja el elemento actual en la pila.

### Actualizar action

1. Abrimos el archivo navigation.xml

2. seleccionamos la acción `action_secondFragment_to_thirdFragment` que navega desde seconFragment hacia thirdFragment.

3. En el panel de atributos, verificar que el atributo `popUpTo` está definido hacia secondFragment y seleccionamos popUpToInclusive en true.

4. Corremos la app, al navegar hacia thirdFragment y presionar el botón atrás del sistema, nos lleva hacia el primer fragmento (titleFragment) ignorando el segundo fragmento (secondFragment).

![Image](./images/45.png)

### Navegar hacia atrás con un clickListener

1. Definimos un action desde thirdFragment hacia secondFragment.

2. Verificar que el **ID** del action sea `action_thirdFragment_to_secondFragment`.

3. En nuestra archivo `ThirdFragment.kt` agregamos un clickListener al botón `backButton`, dentro del clickListener invocamos la función `navigate()` para llamar la acción:

```kotlin
binding.backButton.setOnClickListener {
    it.findNavController()
      .navigate(R.id.action_thirdFragment_to_secondFragment)
}
```

### Agregar un botón atrás en el App Bar

El **App Bar** también llamada **action bar**, es un espacio en el que podemos agregar algunas opciones de navegación, en este caso vamos a agregar un botón de navegación hacia atrás.

El botón por defecto tiene un ícono de una flecha `<--`, este botón solo navega dentro de la app. Nunca se usaria para sacar al usuario del app.

1. Abrimos el archivo `MainActivity.kt`. Dentro de la función `onCreate()`, agregamos el siguiente codigo para encontrar el objeto navigation controller:

```kt
val navController = this.findNavController(R.id.mainNavHostFragment)
```

2. También dentro de la función `onCreate()`, enlazamos el navigation controller con el app bar:

```kt
NavigationUI.setupActionBarWithNavController(this,navController)
```

3. Después de la función `onCreate()`, sobreescribimos la función `onSupportNavigateUp()` para llamar la función `navigateUp()` del navigation controller:

```kt
override fun onSupportNavigateUp(): Boolean {
    val navController = this.findNavController(R.id.mainNavHostFragment);
    return navController.navigateUp()
}
```

4. Ejecutamos la app y veremos en la barra aparace el botón atrás.

![image](./images/46.png)

## Agregar menú de opciones

En Android tenemos diferentes tipos de menus, uno de ellos es **options menu**. El usuario puede acceder al options menu dando tap en el menu que aparece en el **app bar** (representado por 3 puntos verticales).

1. En el folder **res**, clic derecho y seleccionar **new > Android Resource File**.

2. En la ventana **New Resource File**, nombramos el archivo como `options_menu`.

3. Definimos **Resource type** como **Menu** y damos clic en OK.

4. Abrimos el archivo **options_menu.xml** y seleccionamos la vista de diseño.

5. Desde la paleta de componentes arrastramos un **Menu Item**.

6. Seleccionamos el nuevo **Menu Item** y definimos el ID como **aboutFragment** y el title **Acerca de**.

7. Realizamos el mismo proceso para **findUsFragment**.

> IMPORTANTE: Si usamos el mismo ID en nuestro menu item que el ID del fragment en el navigation graph. Hará que el proceso sea más simple.

8. En el archivo `TitleFragment.kt` en el metodo **onCreateView()**, antes del return, llamamos la función **setHasOptionsMenu** y le mandamos parametro **true**.

```kotlin
setHasOptionsMenu(true)
```

9. Después de la función **onCreateView()**, sobreescribimos la función **onCreateOptionsMenu()**. Dentro agregamos el menú e inicializamos el archivo de recurso.

```kotlin
override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {
    super.onCreateOptionsMenu(menu, inflater)
    inflater.inflate(R.menu.options_menu, menu)
}
```

10. Sobreescribimos la función **onOptionsItemSelected** para ejecutar la acción cada vez que se haga tap en un item del menu. En este caso se navega hacia el fragmento que tiene el mismo ID que el item del menu.

```kotlin
override fun onOptionsItemSelected(item: MenuItem): Boolean {
     return NavigationUI.
            onNavDestinationSelected(item,requireView().findNavController())
            || super.onOptionsItemSelected(item)
}
```
