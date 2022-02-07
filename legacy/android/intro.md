
# Introducción SO móviles

Una aplicación móvil, también llamada app móvil, es un tipo de aplicación diseñada para ejecutarse en un dispositivo móvil, que puede ser un teléfono inteligente o una tableta. Incluso si las aplicaciones suelen ser pequeñas unidades de software con funciones limitadas, se las arreglan para proporcionar a los usuarios servicios y experiencias de calidad.

A diferencia de las aplicaciones diseñadas para computadoras de escritorio, las aplicaciones móviles se alejan de los sistemas de software integrados. En cambio, cada aplicación móvil proporciona una funcionalidad aislada y limitada. Por ejemplo, puede ser un juego, una calculadora o un navegador web móvil.

Debido a los recursos de hardware limitados de los primeros dispositivos móviles, las aplicaciones móviles evitaban la multifuncionalidad. Sin embargo, incluso si los dispositivos que se utilizan hoy en día son mucho más sofisticados, las aplicaciones móviles siguen siendo funcionales. Así es como los propietarios de aplicaciones móviles permiten a los consumidores seleccionar exactamente las funciones que deben tener sus dispositivos.

## Sistemas operativos móviles

* **Android**: adquirido por **Google** en 2005, es un sistema operativo basado en el nucleo de linux. Fue diseñado para dispositivos móviles y actualmente lo podemos encontrar en teléfonos, smartwatches, automoviles y TV.

* **iOS**: desarrollado por **Apple** para el iPhone (iPhone OS), posteriormente también se utilizo para el iPod touch y iPad. Es derivado en macOS que a su vez esta basado en el sistema operativo Darwing BSD.

* Otros SO menos importantes en la actualidad pueden ser: KaiOS, Windows Phone, Blackberry, Symbian, FireFox OS, Ubuntu touch, entre otros.


## Aplicaciones nativas

**¿Qué son las aplicaciones nativas?** Estas aplicaciones están diseñadas para un único sistema operativo móvil. Por eso se denominan nativos: son nativos de una plataforma o dispositivo en particular. La mayoría de las aplicaciones móviles actuales están diseñadas para sistemas como Android o iOS. En pocas palabras, no puedes instalar ni usar una aplicación de Android en iPhone y viceversa.

El principal beneficio de las aplicaciones nativas es su alto rendimiento y excelente Experiencia de Usuario (UX). Después de todo, los desarrolladores que los crean utilizan la Interfaz de Usuario (UI) del dispositivo nativo. El acceso a una amplia gama de API también ayuda a acelerar el trabajo de desarrollo y ampliar los límites del uso de la aplicación. Las aplicaciones nativas solo se pueden descargar de las tiendas de aplicaciones e instalarlas directamente en los dispositivos. Es por eso que primero deben pasar por un estricto proceso de publicación.

![Android vs iOS](./images/img1.png)

## Aplicaciones híbridas

Estas aplicaciones se crean utilizando tecnologías web como JavaScript, CSS y HTML 5. ¿Por qué se llaman híbridas? Las aplicaciones híbridas funcionan básicamente como aplicaciones web disfrazadas de un contenedor nativo.

Las aplicaciones híbridas son fáciles y rápidas de desarrollar, lo cual es un claro beneficio. También obtiene una única base de código para todas las plataformas. Esto reduce el costo de mantenimiento y agiliza el proceso de actualización.

Los desarrolladores también pueden aprovechar muchas API para funciones como giroscopio o geolocalización.

Por otro lado, las aplicaciones híbridas pueden carecer de velocidad y rendimiento. Además, es posible que experimente algunos problemas de diseño, ya que es posible que la aplicación no tenga el mismo aspecto en dos o más plataformas.

* Ionic framework
* Apache cordova
* Nativescript
* JQuery mobile

## Aplicaciones Bridged

Por otro lado, existen otro tipo de tecnologías que permiten desarrollar para las 2 plataformas sin perder rendimiento o fluidez y así no perjudicar la experiencia del usuario. Este tipo de aplicaciones es conocida como "bridged". Estas tecnologías crean un puente entre el código nativo y el código escrito en otro lenguaje. Se crean componentes con una contraparte nativa, de esa forma, la aplicación se está ejecutando de forma nativa y los controles son los nativos.

* React native (usa Javascript)
* Flutter (usa Dart)
* Xamarin (usa C#)


## Lenguaje de programación Kotlin

**Kotlin** es un lenguaje de programación moderno de propósito general, multi-plataforma y de tipado estático.

Esta diseñado para interoperar con Java y la JVM, para facilitar la migración gradual de proyectos de Java a Kotlin.

Kotlin fue diseñado y desarrollado por la empresa JetBrains desde 2011. Esta empresa también se encarga del desarrollo del **IDE Android Studio**.

```kotlin

// print "hello world" example

fun main() {
    val scope = "World"
    println("Hello, $scope!")
}
```

Kotlin en la actualidad puede ser usado para:

* Android.
* Desarrollo multi-plataforma (compartir código entre Android y iOS).
* Desarrollo Web frontend.
* Aplicaciones server-side.
* Data Science.

## Enlaces

* [Sitio web de Kotlin](https://kotlinlang.org/)
* [Kotlin Playground](https://play.kotlinlang.org/)
