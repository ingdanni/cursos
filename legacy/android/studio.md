# Android Studio

## Introducción

### Crear un proyecto

1. Abrimos Android Studio y seleccionamos `Iniciar un proyecto nuevo de Android Studio`

![Imagen](./images/img2.png)

2. Luego seleccionamos la opción `Empty activity`

![Imagen](./images/img3.png)

3. Escribimos el nombre de nuestro proyecto `HelloWorld`. Dejamos el package name por defecto `com.example.com.helloword`.

![Imagen](./images/img4.png)

4. Verificamos donde vamos a guardar el proyecto.

5. Aseguramos que el lenguaje sea `kotlin`

6. Aseguramos que el API mínimo sea `API 20: Android 5.0 (Lollipop)`.

7. Seleccionamos `finalizar`.

> Android Studio creará el proyecto, puede llevarse algún tiempo. No deberian tener errores.

### Exploramos el proyecto

1. Seleccionarmos la pestaña `Project` en la barra vertical izquierda de Android Studio.

![Imagen](./images/img5.png)

2. Seleccionamos tipo de vista `Android` en el menu superior de la pestaña `Project`. Se puede visualizar el proyecto de diferentes maneras, incluyendo el sistema de archivos. Sin embargo la manera más adecuada es la vista `Android`

![Imagen](./images/img6.png)

### Directorio app

1. Expandimos el directorio `app` en el que tenemos 3 subdirectorios: `manifests`, `java` y `res`.

2. En el directorio `java` tenemos el codigo Kotlin necesario para nuestra app Android.

3. La clase `MainActivity` es el punto de entrada a nuestra app.

> NOTA: Los archivos de código Kotlin tienen la extension `.tk` pero en Android Studio solo muestra el nombre de la clase.

### Directorio res

1. Contiene recursos estaticos usados en nuestra app. Incluye imagenes, texto, layouts (pantallas), estilos y values (valores constantes) como colores y dimensiones.

Se separa el código kotlin de los recursos para facilitar la navegación y busqueda de los recursos usados en la interfaz de la app. Cuando se actualiza alguno de estos archivos de recursos, el cambio se refleja en todos los lugares donde se use ese archivo en la app.

2. Dentro del directorio `layout` podemos ver el archivo `activity_main.xml`. Por cada activity que creemos, se agrega un archivo de layout en el directorio `res/layout`. Si nuestra activity se llama `MainActivity`, el archivo asociado sera `activity_main`.

### Directorio manifests

Este directorio contiene información esencial sobre nuestra app para el sistema Android.

1. Expandimos el directorio manifests y doble clic sobre `AndroidManifest.xml` para abrirlo. Incluye detalles para que el sistema operativo Android pueda correr nuestra app.

2. Podemos ver que nuesta `MainActivity` es referenciada en un elemento `<activity>`. Cada activity que creemos debe ser declarada en el manifest.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.helloworld">

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.HelloWorld">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
```

3. Podemos ver el elemento `<intent-filter>` dentro de `<activity>`. Los elementos `<action>` y `<category>` le indican a Android que la app debe ejecutarse cuando el usuario presione el icono del app (launcher icon).

4. En el `AndroidManifest.xml` tambien se pueden definir permisos que necesita la app. Por ejemplo: leer los contactos, para conectarse a servicos a través de internet o acceder al hardware como la cámara.

## Gradle

**Gradle** es un sistema de automatización de compilación que utiliza un lenguaje específico de dominio para describir la estructura, la configuración y las dependencias del proyecto de la aplicación. Cuando compila y ejecuta su aplicación, puedes ver información sobre la ejecución de la compilación de Gradle. También verá información sobre la instalación del kit de paquetes de Android (APK - Android Package Kit). APK es el formato de archivo de paquete que utiliza el sistema operativo Android para distribuir e instalar aplicaciones móviles.

Expandimos el directorio **Gradle scripts**. Este directorio contiene todos los archivos necesarios para el sistema de compilación.

![image](./images/img7.png)

### build.gradle (project:)

Este archivo contiene las opciones de configuración que son comunes a todos los módulos que componen su proyecto. Cada proyecto de Android Studio contiene un único archivo de compilación de Gradle de nivel superior. Este archivo define los repositorios y las dependencias de Gradle que son comunes a todos los módulos del proyecto.

### build.gradle (module:)

Además del archivo **build.gradle** a nivel de proyecto, cada módulo tiene un archivo **build.gradle** propio. El archivo **build.gradle** de nivel de módulo le permite configurar los ajustes de compilación para cada módulo. (La aplicación HelloWorld tiene solo un módulo, el módulo para la aplicación en sí). Este archivo **build.gradle** es el que se edita con más frecuencia cuando se cambian las configuraciones de compilación a nivel de la aplicación. Por ejemplo, edita este archivo build.gradle cuando cambia el nivel de SDK que admite su aplicación, o cuando declara nuevas dependencias en la sección de dependencias.

## Crear un dispositivo virtual (AVD: Android Virtual Device)

1. En Android Studio, seleccionamos el menu **Tools -> AVD Manager**. Si hemos creado dispositivos nos apareceran en la lista sino estará vacio.

![image](./images/img8.png)

2. Clic en `+ Create virtual device` en la parte inferior izquierda. Nos aparece la ventana para `seleccionar hardware`, nos muestra una lista con dispositivos pre-configurados. Para cada dispositivo, nos indica el tamaño de pantalla, la resolución en pixeles y la densidad en pixeles.

![image](./images/img9.png)

3. Seleccionamos un dispositivo como el Pixel 5 y nos muestra la ventana **system image** (imagen del sistema).

![image](./images/img10.png)

4. Seleccionamos la pestaña recomendados y escogemos la version del sistema Android que queramos ejecutar en nuestro dispositivo virtual.

5. Despues de escoger la imagen del sistema, clic en siguiente. La ventana de **Android Virtual Device (AVD)** se abre. Damos clic en finalizar.

![image](./images/img11.png)

> IMPORTANTE: Las imagenes usan mucho espacio en disco. Si hay un enlace de descarga a la par de la imagen quiere decir que la imagen no está instalada. Clic en el enlace descarga (puede tomar bastante tiempo). Cuando se complete la descarga, clic en finalizar.

## 🏠 Tarea en casa

* Investigar como correr una app Android en un dispositivo físico.
* Crear una clase `(class)` en Kotlin que represente un `Estudiante` con las propiedades que estime conveniente (ej.: nombre, apellido, carné,...) y su respectivo **constructor**.
* Crear una función `(fun)` en Kotlin que reciba un arreglo de **Doubles** y retorne el promedio de los números del array.
