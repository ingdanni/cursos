---
id: android11
title: Navegación - Parte 1
---

Vamos a descargar el proyecto en el siguiente [Enlace](./assets/NavigationInFragments.zip)

## Agregar navigation components

### Agregar dependencias

**Navigation Components** es una libreria que nos permite manejar navegación compleja y animaciones de transición.

Se debe agregar en nuestro archivo Gradle, abrimos Gradle scripts y doble clic en **build.gradle (project:)** y agregamos lo siguiente dentro de `buildScript`:

```
buildscript {
    ext {
        navigationVersion = "2.3.0"
    }
}
```

Luego en el archivo **build.gradle (module: app)** agregamos lo siguiente dentro de `dependencies {...}`:

```
implementation "androidx.navigation:navigation-fragment-ktx:$navigationVersion"
implementation "androidx.navigation:navigation-ui-ktx:$navigationVersion"
```

### Agregar Navigation Graph

* Nos colocamos sobre el folder `res`, clic derecho, seleccionamos **new > Android Resource File**.

* Seleccionar **Navigation** como `Resource Type`.

* El nombre del archivo debe ser **navigation**.

* El panel de **Chose qualifiers** debe estar vacio.

* Clic en **OK**.

* Abrimos el archivo `res > navigation >  navigation.xml`, hasta el momento está vacio.

### Agregar NavHostFragment

Un **Navigation Host Fragment** actua como un host (anfitrión, propietario, padre) en el navigation graph. Usualmente se nombra `NavHostFragment`.

Cuando el usuario se mueve entre pantallas definidas en el `navigation graph`, el navigation host cambia los fragmentos según sea necesario. Tambien se ocupa de manejar la funcionalidad y fragmentos en la pila hacia atrás.

Para definir el `NavHostFragment` nos vamos a nuestro `activity_main.xml` y lo agregamos de la siguiente forma:

```xml
<fragment
    android:id="@+id/mainNavHostFragment"
    android:name="androidx.navigation.fragment.NavHostFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:navGraph="@navigation/navigation"
    app:defaultNavHost="true" />
```

1. Asignamos un ID para el fragment: `mainNavHostFragment`

2. Se define el namespace: `androidx.navigation.fragment.NavHostFragment`

3. Se especifica el navigation graph que creamos anteriormente: `@navigation/navigation`

4. Se especifica si es host por defecto `app:defaultNavHost="true"`. Ahora que es host por defecto se encarga de manejar el botón hacia atrás del sistema.
