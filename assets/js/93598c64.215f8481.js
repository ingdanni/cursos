"use strict";(self.webpackChunkuniversity_docs=self.webpackChunkuniversity_docs||[]).push([[8442],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?t.createElement(f,o(o({ref:n},p),{},{components:a})):t.createElement(f,o({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7123:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"android18",title:"Retrofit"},s=void 0,c={unversionedId:"android/android18",id:"android/android18",title:"Retrofit",description:"Retrofit es una librer\xeda para Android y java compatible con Kotlin para hacer peticiones a un API de forma sencilla.",source:"@site/docs/android/android18.md",sourceDirName:"android",slug:"/android/android18",permalink:"/cursos/docs/android/android18",tags:[],version:"current",frontMatter:{id:"android18",title:"Retrofit"}},p=[{value:"Proyecto inicial",id:"proyecto-inicial",children:[],level:2},{value:"Agregar dependencias",id:"agregar-dependencias",children:[],level:2},{value:"Actualizar Android Manifest",id:"actualizar-android-manifest",children:[],level:2},{value:"Crear servicio",id:"crear-servicio",children:[],level:2},{value:"Llamar el servicio desde el Activity",id:"llamar-el-servicio-desde-el-activity",children:[],level:2},{value:"Resultado final",id:"resultado-final",children:[],level:2}],u={toc:p};function d(e){var n=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Retrofit es una librer\xeda para Android y java compatible con Kotlin para hacer peticiones a un API de forma sencilla."),(0,i.kt)("h2",{id:"proyecto-inicial"},"Proyecto inicial"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Para esta sesi\xf3n creamos un proyecto nuevo (Empty Activity) con las configuraciones b\xe1sicas que ya conocemos.")),(0,i.kt)("h2",{id:"agregar-dependencias"},"Agregar dependencias"),(0,i.kt)("p",null,"En el archivo Gradle (Project:) agregamos las siguiente definici\xf3n de variables dentro de la secci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"ext")," despu\xe9s de la secci\xf3n de ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'ext {\n  version_retrofit = "2.9.0"\n  version_moshi = "1.8.0"\n}\n')),(0,i.kt)("p",null,"En el archivo Gradle (Module:) agregamos las siguientes dependencias para descargar las librerias ",(0,i.kt)("inlineCode",{parentName:"p"},"Retrofit")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"moshi"),", sincronizamos si es necesario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'implementation "com.squareup.retrofit2:retrofit:$version_retrofit"\nimplementation "com.squareup.retrofit2:converter-scalars:$version_retrofit"\nimplementation "com.squareup.moshi:moshi-kotlin:$version_moshi"\nimplementation "com.squareup.retrofit2:converter-moshi:$version_retrofit"\n')),(0,i.kt)("h2",{id:"actualizar-android-manifest"},"Actualizar Android Manifest"),(0,i.kt)("p",null,"Vamos a agregar en el archivo ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," el permiso para que nuestra app pueda interactuar con internet, lo hacemos despu\xe9s del cierre de la etiqueta ",(0,i.kt)("inlineCode",{parentName:"p"},"<application></application>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},' <uses-permission android:name="android.permission.INTERNET" />\n')),(0,i.kt)("h2",{id:"crear-servicio"},"Crear servicio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creamos un archivo llamado ",(0,i.kt)("inlineCode",{parentName:"li"},"ApiService.kt")," y agregamos una variable llamada ",(0,i.kt)("inlineCode",{parentName:"li"},"BASE_URL")," que se refiere a la URL de nuestro servicio. Debajo de esa variable vamos a usar Retrofit Builder para crear un objeto de tipo ",(0,i.kt)("inlineCode",{parentName:"li"},"Retrofit"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val BASE_URL = "https://jsonplaceholder.typicode.com/"\n\nprivate val retrofit = Retrofit.Builder()\n    .addConverterFactory(ScalarsConverterFactory.create())\n    .baseUrl(BASE_URL)\n    .build()\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Retrofit")," necesita al menos 2 cosas para consumir el servico. Necesita una URL y un Converter Factory que le dice a Retrofit que hacer con la informaci\xf3n que recibe desde el servicio. En este caso Retrofit toma la respuesta JSON y la convierte a una cadena.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Debajo del objeto ",(0,i.kt)("strong",{parentName:"p"},"retrofit"),", definimos una interfaz que define como retrofit se comunicara con el servicio web. Se importan las librerias necesarias que nos marque el compilador."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'interface ApiService {\n\n    @GET("posts")\n    fun getPosts(): Call<String>\n}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Debajo de la interfaz ",(0,i.kt)("inlineCode",{parentName:"li"},"ApiService"),", se define un objeto p\xfablico llamado ",(0,i.kt)("inlineCode",{parentName:"li"},"Api")," para inicializar el servicio de Retrofit. Este es un patr\xf3n de codigo muy usado en Kotlin para crear un objeto servicio.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"object Api {\n    val retrofitService : ApiService by lazy {\n        retrofit.create(ApiService::class.java)\n    }\n}\n")),(0,i.kt)("h2",{id:"llamar-el-servicio-desde-el-activity"},"Llamar el servicio desde el Activity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"En el archivo ",(0,i.kt)("inlineCode",{parentName:"li"},"MainActivity.kt"),", dentro de la funci\xf3n ",(0,i.kt)("inlineCode",{parentName:"li"},"onResume()")," agregamos la siguiente instrucci\xf3n:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"Api.retrofitService.getPosts().enqueue(\n    object: Callback<String> {\n\n    }\n)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Retrofit tiene dos objetos especiales que son ",(0,i.kt)("inlineCode",{parentName:"p"},"Call<T>")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"Callback<T>")," el primero es el objeto que realiza la petici\xf3n y el segundo es el objeto que recibe el resultado de la petici\xf3n.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"T")," representa el objeto que se espera de la respuesta y en ambos tiene que ser el mismo, en este caso para la primer petici\xf3n tenemos ",(0,i.kt)("inlineCode",{parentName:"p"},"Call<String>"),", entonces, el objeto de respuesta ser\xeda ",(0,i.kt)("inlineCode",{parentName:"p"},"Callback<String>"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"La funci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"Api.retrofitService.getPosts()")," retorna una un objeto ",(0,i.kt)("inlineCode",{parentName:"p"},"Call"),". Despu\xe9s se llama la funci\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"enqueue()")," en ese objeto para inciar la petici\xf3n en un hilo secundario.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Damos clic en la palabra ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),", que esta subrayada en rojo. Seleccionamos en el men\xfa ",(0,i.kt)("strong",{parentName:"p"},"Code > Implement methods")," y seleccionamos ",(0,i.kt)("inlineCode",{parentName:"p"},"onResponse()")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"onFailure()")," de la lista."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:a(7924).Z,width:"1102",height:"450"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Vemos que se agrega el siguiente c\xf3digo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'override fun onFailure(call: Call<String>, t: Throwable) {\n       TODO("not implemented")\n}\n\noverride fun onResponse(call: Call<String>,\n   response: Response<String>) {\n       TODO("not implemented")\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cambimos el cuerpo de la funci\xf3n correspondiente a cada caso:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'override fun onResponse(call: Call<String>, response: Response<String>) {\n    Log.i("Retrofit", response.body().toString())\n}\n\noverride fun onFailure(call: Call<String>, t: Throwable) {\n    Log.i("Retrofit", t.message.toString())\n}\n')),(0,i.kt)("h2",{id:"resultado-final"},"Resultado final"),(0,i.kt)("p",null,"Al correr la app vemos que los datos en formato JSON se imprimen en la consola. En la siguiente secci\xf3n veremos como convertir estos datos a un ",(0,i.kt)("strong",{parentName:"p"},"objeto")," en ",(0,i.kt)("strong",{parentName:"p"},"kotlin")," usando la libreria ",(0,i.kt)("inlineCode",{parentName:"p"},"moshi"),"."))}d.isMDXComponent=!0},7924:function(e,n,a){n.Z=a.p+"assets/images/68-41fb922cc06855986ac1a0f8c6554ec1.png"}}]);