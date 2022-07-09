"use strict";(self.webpackChunkuniversity_docs=self.webpackChunkuniversity_docs||[]).push([[6383],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return g}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),g=r,u=m["".concat(p,".").concat(g)]||m[g]||c[g]||i;return a?t.createElement(u,o(o({ref:n},s),{},{components:a})):t.createElement(u,o({ref:n},s))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8966:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"android11",title:"Navegaci\xf3n - Parte 1"},p=void 0,d={unversionedId:"android/android11",id:"android/android11",title:"Navegaci\xf3n - Parte 1",description:"Vamos a descargar el proyecto en el siguiente Enlace",source:"@site/docs/android/android11.md",sourceDirName:"android",slug:"/android/android11",permalink:"/cursos/docs/android/android11",tags:[],version:"current",frontMatter:{id:"android11",title:"Navegaci\xf3n - Parte 1"},sidebar:"androidSidebar",previous:{title:"Examen Parcial I",permalink:"/cursos/docs/android/exam1"},next:{title:"Navegaci\xf3n - Parte 2",permalink:"/cursos/docs/android/android12"}},s=[{value:"Agregar navigation components",id:"agregar-navigation-components",children:[{value:"Agregar dependencias",id:"agregar-dependencias",children:[],level:3},{value:"Agregar Navigation Graph",id:"agregar-navigation-graph",children:[],level:3},{value:"Agregar NavHostFragment",id:"agregar-navhostfragment",children:[],level:3}],level:2}],c={toc:s};function m(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Vamos a descargar el proyecto en el siguiente ",(0,i.kt)("a",{target:"_blank",href:a(7146).Z},"Enlace")),(0,i.kt)("h2",{id:"agregar-navigation-components"},"Agregar navigation components"),(0,i.kt)("h3",{id:"agregar-dependencias"},"Agregar dependencias"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Navigation Components")," es una libreria que nos permite manejar navegaci\xf3n compleja y animaciones de transici\xf3n."),(0,i.kt)("p",null,"Se debe agregar en nuestro archivo Gradle, abrimos Gradle scripts y doble clic en ",(0,i.kt)("strong",{parentName:"p"},"build.gradle (project:)")," y agregamos lo siguiente dentro de ",(0,i.kt)("inlineCode",{parentName:"p"},"buildScript"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'buildscript {\n    ext {\n        navigationVersion = "2.3.0"\n    }\n}\n')),(0,i.kt)("p",null,"Luego en el archivo ",(0,i.kt)("strong",{parentName:"p"},"build.gradle (module: app)")," agregamos lo siguiente dentro de ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies {...}"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'implementation "androidx.navigation:navigation-fragment-ktx:$navigationVersion"\nimplementation "androidx.navigation:navigation-ui-ktx:$navigationVersion"\n')),(0,i.kt)("h3",{id:"agregar-navigation-graph"},"Agregar Navigation Graph"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Nos colocamos sobre el folder ",(0,i.kt)("inlineCode",{parentName:"p"},"res"),", clic derecho, seleccionamos ",(0,i.kt)("strong",{parentName:"p"},"new > Android Resource File"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Seleccionar ",(0,i.kt)("strong",{parentName:"p"},"Navigation")," como ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource Type"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"El nombre del archivo debe ser ",(0,i.kt)("strong",{parentName:"p"},"navigation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"El panel de ",(0,i.kt)("strong",{parentName:"p"},"Chose qualifiers")," debe estar vacio.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clic en ",(0,i.kt)("strong",{parentName:"p"},"OK"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Abrimos el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"res > navigation >  navigation.xml"),", hasta el momento est\xe1 vacio."))),(0,i.kt)("h3",{id:"agregar-navhostfragment"},"Agregar NavHostFragment"),(0,i.kt)("p",null,"Un ",(0,i.kt)("strong",{parentName:"p"},"Navigation Host Fragment")," actua como un host (anfitri\xf3n, propietario, padre) en el navigation graph. Usualmente se nombra ",(0,i.kt)("inlineCode",{parentName:"p"},"NavHostFragment"),"."),(0,i.kt)("p",null,"Cuando el usuario se mueve entre pantallas definidas en el ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation graph"),", el navigation host cambia los fragmentos seg\xfan sea necesario. Tambien se ocupa de manejar la funcionalidad y fragmentos en la pila hacia atr\xe1s."),(0,i.kt)("p",null,"Para definir el ",(0,i.kt)("inlineCode",{parentName:"p"},"NavHostFragment")," nos vamos a nuestro ",(0,i.kt)("inlineCode",{parentName:"p"},"activity_main.xml")," y lo agregamos de la siguiente forma:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<fragment\n    android:id="@+id/mainNavHostFragment"\n    android:name="androidx.navigation.fragment.NavHostFragment"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    app:navGraph="@navigation/navigation"\n    app:defaultNavHost="true" />\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Asignamos un ID para el fragment: ",(0,i.kt)("inlineCode",{parentName:"p"},"mainNavHostFragment"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Se define el namespace: ",(0,i.kt)("inlineCode",{parentName:"p"},"androidx.navigation.fragment.NavHostFragment"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Se especifica el navigation graph que creamos anteriormente: ",(0,i.kt)("inlineCode",{parentName:"p"},"@navigation/navigation"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Se especifica si es host por defecto ",(0,i.kt)("inlineCode",{parentName:"p"},'app:defaultNavHost="true"'),". Ahora que es host por defecto se encarga de manejar el bot\xf3n hacia atr\xe1s del sistema."))))}m.isMDXComponent=!0},7146:function(e,n,a){n.Z=a.p+"assets/files/NavigationInFragments-e02fb76b8a9787310bf2c995be8211c8.zip"}}]);