"use strict";(self.webpackChunkuniversity_docs=self.webpackChunkuniversity_docs||[]).push([[501],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5735:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"flutter18",title:"UNP app - parte 2"},u=void 0,s={unversionedId:"flutter/flutter18",id:"flutter/flutter18",title:"UNP app - parte 2",description:"Descargar proyecto",source:"@site/docs/flutter/flutter18.md",sourceDirName:"flutter",slug:"/flutter/flutter18",permalink:"/cursos/docs/flutter/flutter18",tags:[],version:"current",frontMatter:{id:"flutter18",title:"UNP app - parte 2"},sidebar:"flutterSidebar",previous:{title:"UNP app - parte 1",permalink:"/cursos/docs/flutter/flutter17"},next:{title:"UNP app - parte 3",permalink:"/cursos/docs/flutter/flutter19"}},c=[{value:"Descargar proyecto",id:"descargar-proyecto",children:[],level:2},{value:"Navigation Drawer",id:"navigation-drawer",children:[{value:"Mostrar informaci\xf3n del usuario",id:"mostrar-informaci\xf3n-del-usuario",children:[],level:3}],level:2},{value:"Asignaci\xf3n 2",id:"asignaci\xf3n-2",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"descargar-proyecto"},"Descargar proyecto"),(0,i.kt)("p",null,"Descargar proyecto en el siguiente ",(0,i.kt)("a",{target:"_blank",href:r(990).Z},"ENLACE")),(0,i.kt)("h2",{id:"navigation-drawer"},"Navigation Drawer"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"main_navigation_screen.dart")," vamos a consultar la API para obtener la informaci\xf3n del usuario, a trav\xe9s del endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth/user"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Declaramos una variable llamada usuario dentro de la clase ",(0,i.kt)("inlineCode",{parentName:"p"},"_MainNavigationScreenState")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"late Future<UserResponse> usuario;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Luego dentro del m\xe9todo initState() llamamos al servicio correspondiente ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthService")," y el m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"li"},"getUser()")," y asignamos a la variable ",(0,i.kt)("inlineCode",{parentName:"li"},"usuario"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nvoid initState() {\n  super.initState();\n\n  usuario = AuthService.getUser();\n}\n")),(0,i.kt)("h3",{id:"mostrar-informaci\xf3n-del-usuario"},"Mostrar informaci\xf3n del usuario"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dentro del m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"li"},"build()")," vamos a editar y agregar un widget ",(0,i.kt)("inlineCode",{parentName:"li"},"FutureBuilder"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"@override\nWidget build(BuildContext context) {\n\n  return FutureBuilder<UserResponse>(\n    future: usuario,\n      builder: (context, snapshot) {\n        if (snapshot.hasData) {\n          return buildContent(snapshot.data!);\n        } else {\n          return const Center(\n            child: CircularProgressIndicator(),\n          );\n        }\n      });\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Por \xfaltimo actualizamos el m\xe9todo ",(0,i.kt)("inlineCode",{parentName:"li"},"buildContent()")," para que reciba una variable llamada ",(0,i.kt)("inlineCode",{parentName:"li"},"usuario")," de tipo ",(0,i.kt)("inlineCode",{parentName:"li"},"UserResponse"),". De esta forma tendremos la informaci\xf3n del usuario lista para mostrarse en el Navigation Drawer y actualizamos los valores correspondientes.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'Widget buildContent(UserResponse usuario) {\n  // ...\n  // ...\n  child: Column(\n    crossAxisAlignment: CrossAxisAlignment.start,\n    children: [\n      SizedBox(\n        height: 60,\n        width: 60,\n        child: CircleAvatar(\n          backgroundImage: NetworkImage(usuario.picture),\n        ),\n      ),\n\n      const SizedBox(height: 16,),\n\n      Text("${usuario.name} ${usuario.lastname}", style: TextStyle(color: Colors.white),),\n\n      const SizedBox(height: 4,),\n\n      Text(usuario.email, style: TextStyle(color: Colors.white, fontSize: 12),),\n    ],\n  ),\n  // ...\n  // ...\n}\n')),(0,i.kt)("h2",{id:"asignaci\xf3n-2"},"Asignaci\xf3n 2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Editar las pantallas home, history y teachers para mostrar la informaci\xf3n correspondiente del API para cada una, haciendo uso de los servicios previamente definidos.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En cada pantalla se muestran en forma de lista y para cada fila de la lista agregar un widget ",(0,i.kt)("inlineCode",{parentName:"p"},"Card"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Agregar estilos seg\xfan estime conveniente."))))}d.isMDXComponent=!0},990:function(e,t,r){t.Z=r.p+"assets/files/unp_app-7d73c45f9833e4246325d3d3b715a1eb.zip"}}]);