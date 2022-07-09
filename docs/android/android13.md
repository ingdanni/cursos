---
id: android13
title: Navegación - Parte 3
---

## Menú de opciones (Options Menu)

### Descargar proyecto inicial

* [PROYECTO INICIAL ⬇️](./assets/NavigationInFragments_Part3_Starter.zip)

### Agregar menú

En Android tenemos diferentes tipos de Menú, uno de ellos es el **Options Menu**. Este aparece en el app bar y por defecto está representado por 3 puntos verticales.

1. En el folder **res**, clic derecho y seleccionar **New > Android Resource File**.

2. En la ventana **New Resource File**, nombramos el archivo como `options_menu`.

3. Definimos **Resource type** como **Menu** y damos clic en OK.

4. Abrimos el archivo **options_menu.xml** y seleccionamos la vista de diseño.

5. Desde la paleta de componentes arrastramos un **Menu Item**.

6. Seleccionamos el nuevo **Menu Item** y definimos el ID como **aboutFragment** y el title como **Acerca de**.

7. Agregamos otro **Menu Item** y definimos el ID como **helpFragment** y el title como **Ayuda**.

> IMPORTANTE: Si usamos el mismo ID en nuestro Menu Item que el ID del fragmento en el Navigation Graph, el proceso será simple.

### Configurar menú

8. En la clase `WelcomeFragment` en el metodo **onCreateView()**, antes del return, llamamos la función **setHasOptionsMenu** y le mandamos parametro **true**.

```kotlin
// Indica que este fragmento mostrará un menú del tipo "Options Menu".
setHasOptionsMenu(true)
```

9. Después de la función **onCreateView()**, sobreescribimos la función **onCreateOptionsMenu()**. Dentro agregamos el menú e inicializamos el archivo de recurso.

```kotlin
override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {
    super.onCreateOptionsMenu(menu, inflater)

    // Inicializa el contenido del menú a través del nombre (en este caso se llama "options_menu")
    inflater.inflate(R.menu.options_menu, menu)
}
```

10. Sobreescribimos la función **onOptionsItemSelected** para ejecutar la acción cada vez que se haga tap en un item del menu. En este caso se navega hacia el fragmento que tiene el mismo ID que el item del menu.

```kotlin
override fun onOptionsItemSelected(item: MenuItem): Boolean {
    // Navegar hacia el destino asociado al Menu Item
    return NavigationUI.onNavDestinationSelected(item, requireView().findNavController())
      || super.onOptionsItemSelected(item)
}
```
