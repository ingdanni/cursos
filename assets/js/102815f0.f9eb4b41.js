"use strict";(self.webpackChunkuniversity_docs=self.webpackChunkuniversity_docs||[]).push([[474],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),c=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=t,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(g,i(i({ref:n},d),{},{components:r})):a.createElement(g,i({ref:n},d))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5872:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=r(7462),t=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"flutter4",title:"Clases y objetos"},s=void 0,c={unversionedId:"flutter/flutter4",id:"flutter/flutter4",title:"Clases y objetos",description:"Una clase se declara con la palabra reservada class y puede contener variables de instancia.",source:"@site/docs/flutter/flutter4.md",sourceDirName:"flutter",slug:"/flutter/flutter4",permalink:"/cursos/docs/flutter/flutter4",tags:[],version:"current",frontMatter:{id:"flutter4",title:"Clases y objetos"},sidebar:"flutterSidebar",previous:{title:"Introducci\xf3n - parte 2",permalink:"/cursos/docs/flutter/flutter3"},next:{title:"Widgets - parte 1",permalink:"/cursos/docs/flutter/flutter5"}},d=[{value:"Constructor",id:"constructor",children:[],level:2},{value:"Constructores nombrados",id:"constructores-nombrados",children:[],level:2},{value:"M\xe9todos de instancia",id:"m\xe9todos-de-instancia",children:[],level:2},{value:"Herencia",id:"herencia",children:[],level:2},{value:"Extension methods",id:"extension-methods",children:[],level:2},{value:"Clase pr\xe1ctica",id:"clase-pr\xe1ctica",children:[],level:2}],p={toc:d};function u(e){var n=e.components,r=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Una clase se declara con la palabra reservada ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," y puede contener variables de instancia."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class Persona {\n  String? nombre;\n  String? apellidos;\n  int edad = 0;\n}\n")),(0,o.kt)("p",null,"Para crear una instancia y darle valores a las variables lo hacemos de la siguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'var p1 = Persona();\n\np1.nombre = "Mary";\np1.apellidos = "Johnson";\np1.edad = 30;\n')),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)("p",null,"Se declaran creando una funci\xf3n con el mismo nombre de la clase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class Persona {\n  String? nombre;\n  String? apellidos;\n  int edad = 0;\n\n  Persona(String nombre, String apellidos, int edad) {\n    this.nombre = nombre;\n    this.apellidos = apellidos;\n    this.edad = edad;\n  }\n}\n")),(0,o.kt)("p",null,"Otra forma m\xe1s corta de definir un constructor es:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class Persona {\n  String? nombre;\n  String? apellidos;\n  int edad = 0;\n\n  Persona(this.nombre, this.apellidos, this.edad);\n}\n\n")),(0,o.kt)("h2",{id:"constructores-nombrados"},"Constructores nombrados"),(0,o.kt)("p",null,"Se usa un constructor con nombre para implementar m\xfaltiples constructores para una clase o para brindar mayor claridad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'class Persona {\n  String? nombre;\n  String? apellidos;\n  int edad = 0;\n  String? cedula;\n\n  Persona(this.nombre, this.apellidos, this.edad, this.cedula);\n\n  // constructor nombrado\n  Persona.sinCedula(this.nombre, this.apellidos, this.edad);\n}\n\n// Instancia\nvar p1 = Persona.sinCedula("Erick", "Johnson", 20);\n')),(0,o.kt)("h2",{id:"m\xe9todos-de-instancia"},"M\xe9todos de instancia"),(0,o.kt)("p",null,"Son funciones a las que se pueden acceder desde las instancias de una clase."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'class Persona {\n  String? nombre;\n  String? apellidos;\n  int edad = 0;\n  String? cedula;\n\n  Persona(this.nombre, this.apellidos, this.edad, this.cedula);\n\n  Persona.sinCedula(this.nombre, this.apellidos, this.edad);\n\n  void saludar() {\n    print(\'Hola, mi nombre es $nombre\');\n  }\n}\n\nvar p1 = Persona.sinCedula("Mike", "Rose", 20);\n\np1.saludar();\n')),(0,o.kt)("h2",{id:"herencia"},"Herencia"),(0,o.kt)("p",null,"Se usa la palabra reservada ",(0,o.kt)("inlineCode",{parentName:"p"},"extends")," para crear una subclase y ",(0,o.kt)("inlineCode",{parentName:"p"},"super")," para referirse a la clase padre."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},'class Persona {\n  String? nombre;\n  String? apellidos;\n  int edad = 0;\n  String? cedula;\n\n  void saludar() {\n    print(\'Hola, mi nombre es $nombre $apellidos\');\n  }\n}\n\nclass Estudiante extends Persona {\n  String? carne;\n  String? carrera;\n\n  @override\n  void saludar() {\n    super.saludar();\n\n    print(\'Mi carrera es $carrera\');\n  }\n}\n\nvar p1 = Estudiante();\n\np1.nombre = "Maria";\np1.apellidos = "Perez";\np1.carne = "001-002";\np1.carrera = "Ing. Industrial";\n\np1.saludar();\n')),(0,o.kt)("h2",{id:"extension-methods"},"Extension methods"),(0,o.kt)("p",null,"Sirven para agregar funcionalidad a ciertas librerias o clases ya existentes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"extension OperacionesMatematicas on int {\n\n  int alCubo() {\n    return this * this * this;\n  }\n\n  int alCuadrado() {\n    return this * this;\n  }\n\n}\n")),(0,o.kt)("p",null,"Ejemplo 2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class Ventana {\n  // Implementacion existente\n}\n\nextension Alertas on Ventana {\n\n  void mostrarError(String msj) {\n    print(msj);\n  }\n\n  void mostrarAdvertencia(String msj) {\n    print(msj);\n  }\n}\n\nvar iniciarSesion = Ventana();\n\niniciarSesion.mostrarAdvertencia('Datos incorrectos');\niniciarSesion.mostrarError('El usuario no existe');\n")),(0,o.kt)("h2",{id:"clase-pr\xe1ctica"},"Clase pr\xe1ctica"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Usando ciclo ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," imprimir todos los n\xfameros m\xfaltiplos de 3.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Crear un ",(0,o.kt)("inlineCode",{parentName:"p"},"extension method")," para tipos ",(0,o.kt)("inlineCode",{parentName:"p"},"double")," que retorne el mismo valor con el signo contrario. Ejemplo: si el valor es 1 retornar -1.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Teniendo la siguiente clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Imagen")," agregar un ",(0,o.kt)("inlineCode",{parentName:"p"},"extension method")," que se llame ",(0,o.kt)("inlineCode",{parentName:"p"},"cargarDesdeURL")," e imprima el valor de la URL recibida:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"\nclass Imagen {\n\n  void redimensionar(double alto, double ancho) {\n    // ...\n  }\n\n  void cargarDesdeArchivoLocal(String nombre) {\n    print('El nombre del archivo es $nombre');\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Teniendo la siguiente clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Boton"),", crear 2 subclases ",(0,o.kt)("inlineCode",{parentName:"p"},"BotonRedondo")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"BotonFlotante"),". Agregar sus respectivos constructores y sobrecargar el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"onTap"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"class Boton {\n\n  String? titulo;\n  String? icono;\n  String? colorDeFondo;\n\n  void onTap() {\n    print('Usuario presiono el bot\xf3n');\n  }\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Definir la diferencia entre una funci\xf3n y un m\xe9todo."))))}u.isMDXComponent=!0}}]);