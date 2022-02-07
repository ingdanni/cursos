# Navegación - Parte 4

## Agregar navigation drawer

### Agregar la librera Material al Proyecto

En el archivo gradle del modulo, agregamos la siguiente dependencia:

```
dependencies {
    ...
    implementation "com.google.android.material:material:$version"
    ...
}
```

### Creamos un menu drawer y el layout del drawer

1. En el folder **res**, clic derecho seleccionar **New Resource File**.

2. Nombramos el archivo **navdrawer_menu**, indicamos en resource type el valor **Menu** y damos clic en OK.

3. Abrimos **navdrawer_menu.xml**, pestaña de diseño y agregamos 2 menu items arrastrando desde la paleta de componentes.

4. Seleccionamos cada menu item y configuramos su ID, título e ícono correspondientes para `aboutFragment` y `findUsFragment`.

### Actualizar el layout de MainActivity

En nuestro archivo `activity_main.xml` actualizamos el layout de la siguiente forma:

```xml
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">

    <androidx.drawerlayout.widget.DrawerLayout
        android:id="@+id/drawerLayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent">

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">

            <fragment
                android:id="@+id/mainNavHostFragment"
                android:name="androidx.navigation.fragment.NavHostFragment"
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                app:navGraph="@navigation/navigation"
                app:defaultNavHost="true" />

        </LinearLayout>

        <com.google.android.material.navigation.NavigationView
            android:id="@+id/navView"
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:layout_gravity="start"
            app:headerLayout="@layout/nav_header"
            app:menu="@menu/navdrawer_menu" />

    </androidx.drawerlayout.widget.DrawerLayout>
</layout>

```

Se agrego un DrawerLayout como la raiz del layout. Justo antes del final del Drawer Layout se agrega el NavigationView es decir, el recurso que vamos a usar.

### Agregar botón y mostrar drawer

1. En el archivo **MainActivity.kt** agregamos una variable llamada **drawerLayout**:

```kotlin
private lateinit var drawerLayout: DrawerLayout
```

2. En la función onCreate() agregamos:

```kotlin
val binding = DataBindingUtil.setContentView<ActivityMainBinding>(this,
                R.layout.activity_main)

drawerLayout = binding.drawerLayout
```

3. Tambien agregamos **drawerLayout** como tercer parametro en la función **setupActionBarWithNavController***:

```kotlin
NavigationUI.setupActionBarWithNavController(this, navController, drawerLayout)
```

4. Agregamos la siguiente función para manejar los cambios en la navegación con el Navigation Drawer:

```kotlin
NavigationUI.setupWithNavController(binding.navView, navController)
```

5. Reemplazamos la funcion **onSupportNavigateUp** con:

```kotlin
override fun onSupportNavigateUp(): Boolean {
   val navController = this.findNavController(R.id.myNavHostFragment)
   return NavigationUI.navigateUp(navController, drawerLayout)
}
```

6. Si hace falta algun import, verificar que se haya agregado el:

```kotlin
import androidx.drawerlayout.widget.DrawerLayout
```

[⬇️  Proyecto Terminado - Fragments2](../downloads/Fragments2-Terminado.zip)
