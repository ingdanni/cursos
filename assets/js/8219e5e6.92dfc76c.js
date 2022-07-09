"use strict";(self.webpackChunkuniversity_docs=self.webpackChunkuniversity_docs||[]).push([[3590],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A=n.createContext({}),s=function(e){var t=n.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(A.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,A=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,c=u["".concat(A,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5874:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return A},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"android5",title:"Linear Layout"},A=void 0,s={unversionedId:"android/android5",id:"android/android5",title:"Linear Layout",description:"Contenido",source:"@site/docs/android/android5.md",sourceDirName:"android",slug:"/android/android5",permalink:"/cursos/docs/android/android5",tags:[],version:"current",frontMatter:{id:"android5",title:"Linear Layout"},sidebar:"androidSidebar",previous:{title:"Android Studio",permalink:"/cursos/docs/android/android4"},next:{title:"Estilos",permalink:"/cursos/docs/android/android6"}},p=[{value:"Contenido",id:"contenido",children:[],level:2},{value:"Crear nuevo proyecto",id:"crear-nuevo-proyecto",children:[],level:2},{value:"Introducci\xf3n",id:"introducci\xf3n",children:[],level:2},{value:"View Groups",id:"view-groups",children:[],level:2},{value:"Crear nuestro primer Layout",id:"crear-nuestro-primer-layout",children:[],level:2},{value:"Layout Editor",id:"layout-editor",children:[{value:"Toolbar",id:"toolbar",children:[],level:3},{value:"Palette",id:"palette",children:[],level:3},{value:"Attributes",id:"attributes",children:[],level:3},{value:"Components tree",id:"components-tree",children:[],level:3}],level:2},{value:"Agregar elementos en el Layout Editor",id:"agregar-elementos-en-el-layout-editor",children:[],level:2},{value:"Recursos",id:"recursos",children:[{value:"Crear un recurso String",id:"crear-un-recurso-string",children:[],level:3},{value:"Crear un recurso Dimen",id:"crear-un-recurso-dimen",children:[],level:3}],level:2},{value:"Ejecutar \ud83d\udcf1",id:"ejecutar-",children:[],level:2}],d={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"contenido"},"Contenido"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Linear Layouts."),(0,i.kt)("li",{parentName:"ol"},"Layout Editor."),(0,i.kt)("li",{parentName:"ol"},"Archivos de recursos.")),(0,i.kt)("h2",{id:"crear-nuevo-proyecto"},"Crear nuevo proyecto"),(0,i.kt)("p",null,"Para esta clase creamos un proyecto con las siguientes especificaciones:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Nombre del proyecto: ",(0,i.kt)("inlineCode",{parentName:"li"},"LinearLayoutAndroid")),(0,i.kt)("li",{parentName:"ol"},"Seleccionamos ",(0,i.kt)("inlineCode",{parentName:"li"},"Empty Activity")),(0,i.kt)("li",{parentName:"ol"},"SDK m\xednimo: ",(0,i.kt)("inlineCode",{parentName:"li"},"API 21 - Android 5 (Lollipop)"))),(0,i.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,i.kt)("p",null,"El ",(0,i.kt)("inlineCode",{parentName:"p"},"Linear Layout")," es un contenedor que agrupa todos sus hijos (Views) en una sola direcci\xf3n, ya se ",(0,i.kt)("strong",{parentName:"p"},"vertical u horizontal"),". Se puede especificar la orientaci\xf3n del layout con el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"android:orientation"),". Todos los hijos en un LinearLayout son apilados uno despu\xe9s del otro."),(0,i.kt)("h2",{id:"view-groups"},"View Groups"),(0,i.kt)("p",null,"Un ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewGroup")," es una vista que puede contener vistas hijas u otro ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewGroup"),"."),(0,i.kt)("p",null,"En un ViewGroup de tipo ",(0,i.kt)("strong",{parentName:"p"},"LinearLayout"),", los elementos se organizan horizontalmente o verticalmente."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(3014).Z,width:"421",height:"368"})),(0,i.kt)("h2",{id:"crear-nuestro-primer-layout"},"Crear nuestro primer Layout"),(0,i.kt)("p",null,"Vamos a cambiar el layout raiz en el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"activity_main.xml"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"En el directorio ",(0,i.kt)("inlineCode",{parentName:"li"},"app/res/layout"),", abrimos el archivo ",(0,i.kt)("inlineCode",{parentName:"li"},"activity_main.xml"),"."),(0,i.kt)("li",{parentName:"ol"},"Seleccionamos la pesta\xf1a ",(0,i.kt)("inlineCode",{parentName:"li"},"Text"),"."),(0,i.kt)("li",{parentName:"ol"},"Cambiamos el ViewGroup de ",(0,i.kt)("inlineCode",{parentName:"li"},"ConstraintLayout")," a ",(0,i.kt)("inlineCode",{parentName:"li"},"LinearLayout"),"."),(0,i.kt)("li",{parentName:"ol"},"Removemos el ",(0,i.kt)("inlineCode",{parentName:"li"},"TextView")," existente y agregamos el atributo ",(0,i.kt)("inlineCode",{parentName:"li"},"android:orientation")," y le damos el valor de ",(0,i.kt)("inlineCode",{parentName:"li"},"vertical"),".")),(0,i.kt)("p",null,"Antes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<androidx.constraintlayout.widget.ConstraintLayout\n    xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    tools:context=".MainActivity">\n\n    <TextView\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:text="Hello World!"\n        app:layout_constraintBottom_toBottomOf="parent"\n        app:layout_constraintLeft_toLeftOf="parent"\n        app:layout_constraintRight_toRightOf="parent"\n        app:layout_constraintTop_toTopOf="parent" />\n\n</androidx.constraintlayout.widget.ConstraintLayout>\n')),(0,i.kt)("p",null,"Despues:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<LinearLayout\n    xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    android:orientation="vertical"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    tools:context=".MainActivity">\n    \x3c!-- Dentro de este linear layout vamos a definir nuestros elementos hijos --\x3e\n</LinearLayout>\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"orientation"),": Indica la orientaci\xf3n de los elementos internos.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"layout_width"),": Indica la anchura del elemento (layout). El valor ",(0,i.kt)("inlineCode",{parentName:"p"},"match_parent")," indica que la anchura ser\xe1 igual a la del elemento padre.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"layout_height"),": Indica la altura del elemento (layout). El valor ",(0,i.kt)("inlineCode",{parentName:"p"},"match_parent")," indica que la altura ser\xe1 igual a la del elemento padre."))),(0,i.kt)("h2",{id:"layout-editor"},"Layout Editor"),(0,i.kt)("p",null,"Es una herramienta de dise\xf1o visual dentro de ",(0,i.kt)("strong",{parentName:"p"},"Android Studio"),". En vez de escribir ",(0,i.kt)("strong",{parentName:"p"},"XML")," podemos construir el layout arrastrando los elementos (Views) dentro del editor de dise\xf1o."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(9632).Z,width:"1430",height:"894"})),(0,i.kt)("h3",{id:"toolbar"},"Toolbar"),(0,i.kt)("p",null,"Tiene opciones de configuraci\xf3n para la apariencia del editor de layout."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(7887).Z,width:"733",height:"80"})),(0,i.kt)("h3",{id:"palette"},"Palette"),(0,i.kt)("p",null,"Tiene una lista de ",(0,i.kt)("strong",{parentName:"p"},"views y view groups")," que podemos arrastrar hacia el editor de layout o hacia el \xe1rbol de componentes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(407).Z,width:"227",height:"347"})),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("p",null,"Nos muestra los atributos de la ",(0,i.kt)("strong",{parentName:"p"},"view o view group")," que tengamos seleccionados."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(2608).Z,width:"353",height:"848"})),(0,i.kt)("h3",{id:"components-tree"},"Components tree"),(0,i.kt)("p",null,"Nos muestra la jerarquia del layout en forma de \xe1rbol."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(5560).Z,width:"231",height:"421"})),(0,i.kt)("h2",{id:"agregar-elementos-en-el-layout-editor"},"Agregar elementos en el Layout Editor"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"En el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"activity_main.xml")," seleccionamos la pesta\xf1a dise\xf1o.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Arrastramos desde la paleta de componentes un ",(0,i.kt)("inlineCode",{parentName:"p"},"TextView")," hacia nuestra activity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Abrimos el panel de Atributos y colocamos los siguientes atributos a nuestro ",(0,i.kt)("inlineCode",{parentName:"p"},"TextView"),":"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Atributo"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Valor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ID (identificador \xfanico)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"name_text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Su nombre")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textSize"),(0,i.kt)("td",{parentName:"tr",align:"left"},"20sp")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textColor"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@android:color/black")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"textAlignment"),(0,i.kt)("td",{parentName:"tr",align:"left"},"center")))),(0,i.kt)("h2",{id:"recursos"},"Recursos"),(0,i.kt)("p",null,"Los recursos son los archivos adicionales y el contenido est\xe1tico que usa tu c\xf3digo, como mapas de bits, definiciones de dise\xf1o, cadenas de interfaz de usuario, instrucciones de animaci\xf3n y m\xe1s."),(0,i.kt)("p",null,"Siempre se debe externalizar los recursos de la aplicaci\xf3n, como im\xe1genes y cadenas de texto de su c\xf3digo, para que puedan mantenerse de forma independiente."),(0,i.kt)("h3",{id:"crear-un-recurso-string"},"Crear un recurso String"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Los recursos de tipo ",(0,i.kt)("strong",{parentName:"p"},"String")," son cadenas de texto est\xe1ticas en nuestra aplicaci\xf3n. Al mantenerse separadas de la interfaz de usuario es m\xe1s f\xe1cil de actualizar una sola vez, en lugar de actualizarse en cada ",(0,i.kt)("inlineCode",{parentName:"p"},"activity")," en la que sea utilizada.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Abrimos el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"res/values/strings.xml")," y agregamos la siguiente ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," dentro de la etiqueta ",(0,i.kt)("inlineCode",{parentName:"p"},"<resources> </resources>"),":"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<string name="my_name">Juan P\xe9rez</string>\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Para usar este recurso en el Panel de atributos, agregamos el valor ",(0,i.kt)("inlineCode",{parentName:"p"},"@string/my_name")," al aributo ",(0,i.kt)("inlineCode",{parentName:"p"},"text"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambien podemos buscarlo en la ventana ",(0,i.kt)("strong",{parentName:"p"},"Seleccionar recurso"),", dando clic sobre el icono al extremo derecho del atributo (en este caso el atributo text)."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(1549).Z,width:"362",height:"41"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 IMPORTANTE: Desde esta misma ventana podemos agregar recursos y se agregar\xe1n automaticamente al archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"strings.xml"),".")),(0,i.kt)("h3",{id:"crear-un-recurso-dimen"},"Crear un recurso Dimen"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Los recursos de tipo ",(0,i.kt)("strong",{parentName:"p"},"Dimen")," son valores de dimensiones (unidades de medida). Al mantenerse separadas de la interfaz de usuario es m\xe1s f\xe1cil de actualizar una sola vez, en lugar de actualizarse en cada ",(0,i.kt)("inlineCode",{parentName:"p"},"activity")," en la que sea utilizada.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Abrimos el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"res/values/dimens.xml")," y agregamos la siguiente ",(0,i.kt)("inlineCode",{parentName:"p"},"dimen")," dentro de la etiqueta ",(0,i.kt)("inlineCode",{parentName:"p"},"<resources> </resources>")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<dimen name="text_size">20sp</dimen>\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Para usar este recurso en el Panel de atributos, agregamos el valor ",(0,i.kt)("inlineCode",{parentName:"p"},"@dimen/text_size")," al aributo ",(0,i.kt)("inlineCode",{parentName:"p"},"textSize"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambien podemos buscarlo en la ventana ",(0,i.kt)("strong",{parentName:"p"},"Seleccionar recurso"),", dando clic sobre el icono al extremo derecho del atributo (en este caso el atributo textSize)."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 IMPORTANTE: Desde esta misma ventana podemos agregar recursos y se agregar\xe1n automaticamente al archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"dimens.xml"),". Si el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"dimens.xml")," no existe, Android Studio lo crear\xe1.")),(0,i.kt)("h2",{id:"ejecutar-"},"Ejecutar \ud83d\udcf1"),(0,i.kt)("p",null,"Si abrimos el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity.kt")," y miramos la funcion ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate()"),". El archivo de recurso de layout especificado es: ",(0,i.kt)("inlineCode",{parentName:"p"},"R.layout.activity_main"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"setContentView(R.layout.activity_main)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"R")," es una clase autogenerada por el compilador y conteniene referencias a todos los recursos de nuestra aplicaci\xf3n.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"layout.activity_main")," indica el folder y nombre del archivo de recurso (por ejemplo: ",(0,i.kt)("inlineCode",{parentName:"p"},"res/layout/activity_main.xml"),")."))),(0,i.kt)("p",null,"Si corremos la aplicaci\xf3n deber\xeda mostrar la pantalla de la siguiente forma:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(7770).Z,width:"487",height:"865"})))}u.isMDXComponent=!0},3014:function(e,t,a){t.Z=a.p+"assets/images/img12-eeb0a917cc704738a4db16581827109c.png"},9632:function(e,t,a){t.Z=a.p+"assets/images/img13-5312f48f5ed0572fbebc2f7c12de746f.png"},7887:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAt0AAABQCAYAAADFhsndAAABQmlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSCwoyGFhYGDIzSspCnJ3UoiIjFJgf8rAwSDMwMmgw2CdmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisbJm7l2/sP+z/yCDK+6fC78mY6lEAV0pqcTKQ/gPESckFRSUMDIwJQLZyeUkBiN0CZIsUAR0FZM8AsdMh7DUgdhKEfQCsJiTIGci+AmQLJGckpgDZT4BsnSQk8XQkNtReEOBwNjJ3M7Y0IOBU0kFJakUJiHbOL6gsykzPKFFwBIZQqoJnXrKejoKRgZEhAwMovCGqP98AhyOjGAdCLHUHA4NJM1DwJkIs+x0Dw55FDAx87xBiqvpA/m0GhkNpBYlFiXAHMH5jKU4zNoKwubczMLBO+///czgDA7smA8Pf6////97+///fZQwMzLcYGA58AwAqQmFy9lEjqgAAAFZlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA5KGAAcAAAASAAAARKACAAQAAAABAAAC3aADAAQAAAABAAAAUAAAAABBU0NJSQAAAFNjcmVlbnNob3S4yzwjAAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj44MDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj43MzM8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4Kn0Nw1gAAIHZJREFUeAHtnfd/lNeVxs9IIySBZBUQvZgiQEgU0WyKDZjejWM7ccNxkt20TbKf7P4B+XH3k7UTZzdO3DZ2NnYcG2O6jSnGGExHdAGSAIkiQCAhulDb81zpFe+MZkYzoxmNhJ5ji5n3vve95XvfmTn33HPP65g8ZVqtUEiABEiABEiABEiABEiABMJGICpsJbNgEiABEiABEiABEiABEiABQ4BKN28EEiABEiABEiABEiABEggzASrdYQbM4kmABEiABEiABEiABEiASjfvARIgARIgARIgARIgARIIMwEq3WEGzOJJgARIgARIgARIgARIgEo37wESIAESIAESIAESIAESCDMBKt1hBsziSYAESIAESIAESIAESIBKN+8BEiABEiABEiABEiABEggzASrdYQbM4kmABEiABEiABEiABEjAeftGOSmQAAmQAAmQAAmQAAmQAAmEkYCzY2JSo+KhiHtKb5SRCSRAAiRAAiRAAiRAAiRAAk0SoHtJk4iYgQRIgARIgARIgARIgASaR4BKd/P48WoSIAESIAESIAESIAESaJIAle4mETEDCZAACZAACZAACZAACTSPQKtQutNSk5vXiyCubi91BoGGl5DAA0UgEp/1BwogO0MCJEACJBASAq1C6Q5JT1gICZAACZAACZAACZAACbRSAs6QtMsZK1XZC01RzpzVIlUVISnWn0ImT5okGRnD5OKlYjl+/ITk5eX5cxnzkAAJkAAJkAAJkAAJkECLEWi20l2b0ksqxz8jtQmdTaNrUntLzO5PxFF2PiydiHY6Zd6cOZLWpYt8tnKlbNu+3dQzfvx4SU5KkbFjxsiatWvlxo0bYamfhZJAKAl07NRJRmRlSXr6YHnooUSJioqSa9fKJb8gX3JycuTu3buhrI5l+UkgPj5esrOzZeDAAZKSnGKuKrtWJgUFp8y43Llzx8+SmI0ESIAESIAE6gg4Jk+ZVusOw6843Q6HVA+aKFVZM0Wiol2LqKkW55ENEp3/rUhto+Jd8+oRfC5LSq81SndPgML95KLFcufOLSksLJJJauX+ZNkyKSsrk65d06Sk5IqMHDlSxo0dKx/94x8+FW9/60QboqKjJX1opgwcMkweSkoSh0MVo9Krcirv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"},407:function(e,t,a){t.Z=a.p+"assets/images/img15-cff5b0d4f774623fe12ee987bf3df7d3.png"},2608:function(e,t,a){t.Z=a.p+"assets/images/img16-c9c0315300a8cb32508f737ef50b9db5.png"},5560:function(e,t,a){t.Z=a.p+"assets/images/img17-f95db074e2990f58af737d70256d283d.png"},1549:function(e,t){t.Z="data:image/png;base64,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"},7770:function(e,t,a){t.Z=a.p+"assets/images/img19-6fef45cdc6c6e1e717ea26149866a378.png"}}]);