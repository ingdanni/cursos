# RecyclerView

## Introducción

En esta sesión vamos a aprender como usar un `RecyclerView` para desplegar una lista de elementos.

Retomando el proyecto de la clase anterior vamos a agregar un fragmento que nos muestre el historial de eventos del usuario en forma de lista usando los siguientes elementos:

* RecyclerView
* Adapter
* ViewHolder

## Proyecto inicial

Para esta sesión descargamos el proyecto inicial en el siguiente enlace:

[⬇️  Proyecto - RecyclerView Inicio](../downloads/RecyclerView-Inicio.zip)

## ¿Qué es un RecyclerView?

Una de las tareas más comunes en una app es desplegar una lista de datos. Estas pueden variar de simples a muy complejas. Por ejemplo: mostrar una lista de productos, una lista de compras, una galería de fotos, etc..

Para realizar este comportamiento en Android se nos provee el componente `RecyclerView`.

![image](./images/62.png)

## Beneficios

* Por defecto `RecyclerView` solo realizar el trabajo para procesar los items que son visibles en la pantalla.

* Cuando un item scrollea fuera de la pantalla, la vista de este item es reciclada. Esto quiere decir que a la vista se le asigna el nuevo contenido que se mostrara en pantalla, esto ahorra mucho tiempo de procesamiento y aporta fluidez en la experiencia de usuario.

* Cuando un item cambia, en vez de refrescar toda la lista, el `RecyclerView` actualiza solo ese item. Esto nos da eficiencia al desplegar muchos items con layout complejos.

![image](./images/63.png)

## Patrón Adapter

El patrón `adapter` nos permite que la implementación de una clase pueda ser utilizada por otra clase. El `RecyclerView` usa un adapter para transformar la información de nuestra app en algo que se pueda mostrar en pantalla.

En nuestro ejemplo nuestro **Adapter** toma los datos de **Room** y los transforma en algo que se pueda mostrar en el **RecyclerView** sin afectar el **ViewModel**.

![image](./images/64.png)

Para desplegar los datos en el `RecyclerView` necesitamos lo siguiente:

* Información para mostrar.
* Un instancia de `RecyclerView` definida en nuestro archivo de layout que actua como contenedor.
* Un layout para los elementos de nuestra información.
* Un layout manager que organiza los componentes de UI en la vista.
* Un ViewHolder, que contiene la información de la vista para mostrar en cada elemento.
* Un Adapter que conecta los datos con el `RecyclerView`.
