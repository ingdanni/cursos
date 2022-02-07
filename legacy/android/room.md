# Room database

## Introducción

La mayoria de las apps necesitan información que debe ser procesada y guardada, aun cuando se cierra la app. Por ejemplo almacenar una lista de canciones, publicaciones, registros del usuario o un catálogo de productos. Para cualquiera de los casos podemos usar una base de datos para que la información persista.

`Room` es una librería de base de datos que es parte de [Android Jetpack](https://developer.android.com/jetpack). Esta misma es una capa de abstracción por encima de una base de datos SQLite, que usa lenguaje SQL para ejecutar operaciones de base de datos. En vez de usar SQLite directamente, Room simplifica la forma de configurar, definir e interactuar con la base de datos. Room también nos brinda una sintaxis de consultas que nos permite realizar búsquedas en nuestra base de datos.

En la siguiente imagen podemos ver una arquitectura simplificada que vamos a estar usando en el proyecto. Omitiendo los componentes `Repository` y `Network`.

![image](./images/59.png)

## Descargar proyecto

Descargamos el proyecto terminado de la sección anterior en el siguiente enlace:

[⬇️  Proyecto - LiveData2-Terminado](../downloads/LiveData2-Terminado.zip)

## Configurar dependencias

Agregamos el plugin `kotlin-kapt` en la sección `plugins {}` del archivo gradle(module:). `Kapt` (Kotlin annotation processing tool) es una herramienta que sirve para mejorar la generación de código kotlin en tiempo de compilación.

```kotlin
id 'kotlin-kapt'
```

También vamos a agregar algunas dependencias que nos ayudan a trabajar con las librerias de Android Jetpack.

```kotlin
def room_version = "2.3.0"

implementation("androidx.room:room-runtime:$room_version")
annotationProcessor "androidx.room:room-compiler:$room_version"
// To use Kotlin annotation processing tool (kapt)
kapt("androidx.room:room-compiler:$room_version")
// optional - Kotlin Extensions and Coroutines support for Room
implementation("androidx.room:room-ktx:$room_version")
// optional - RxJava2 support for Room
implementation "androidx.room:room-rxjava2:$room_version"
// optional - RxJava3 support for Room
implementation "androidx.room:room-rxjava3:$room_version"
// optional - Guava support for Room, including Optional and ListenableFuture
implementation "androidx.room:room-guava:$room_version"
// optional - Test helpers
testImplementation("androidx.room:room-testing:$room_version")
// optional - Paging 3 Integration
implementation("androidx.room:room-paging:2.4.0-alpha05")
```

## Crear paquete y archivos

Dentro del paquete principal del proyecto creamos un paquete (package) que se llame `database` y dentro creamos 3 archivos kotlin:

1. Database.kt
2. Event.kt
3. EventDao.kt

## Agregar entidad

La entidad representa una tabla en la base de datos. En este caso internamente en SQLite se creará una tabla `event`. Si no usaramos `Room` tendriamos que declarar con la sentencia `CREATE TABLE event (...)`

En el archivo `Event.kt` agregamos la siguiente definición:

```kotlin
import androidx.room.*

@Entity(tableName = "event")
data class Event(
    @PrimaryKey(autoGenerate = true)
    var id: Long = 0L,

    @ColumnInfo(name = "name")
    var name: String?,

    @ColumnInfo(name = "value")
    var value: Int?,

    @ColumnInfo(name = "created_at")
    var createdAt: Long = System.currentTimeMillis()
)
```

## Agregar Dao

Una clase `DAO (Data Access Object)` nos provee de métodos que nos permiten interactuar con una tabla, es decir realizar el **CRUD** . En este caso seria de la table `event`.

En el archivo `EventDao.kt` agregamos la siguiente definición:

```kotlin
@Dao
interface EventDao {
    @Query("SELECT * FROM event")
    fun getAll(): LiveData<List<Event>>

    @Query("SELECT * FROM event WHERE name LIKE :name")
    fun getAllByName(name: String): List<Event>

    @Insert
    fun insertAll(vararg events: Event)

    @Delete
    fun delete(event: Event)
}
```

## Agregar database

1. Declaramos una clase `EventDatabase` que herede de la clase `RoomDatabase`.

2. Usando la `@Database` definimos algunas opciones de configuración.

* entities: las entidades de la BD.
* version: se inicia en `1`. Cada vez que actualices el schema se aumenta en 1.
* exportSchema: establecer `false`. Para no tener backups de historial de los schemas.

3. Dentro del cuerpo de la clase se define `eventDao` para tener una referencia de la entidad. Puedes tener tantos DAOs como se necesite.

4. Se agrega un `companion object {}` que nos permite declara métodos y variables que se pueden llamar sin instanciar la clase.

5. Dentro del `companion object` se declara la variable privada `INSTANCE` que es nullable y se inicializa en `null`. Esta variable nos permite tener una sola instancia de la base de datos, evitando crear muchas instancias en tiempo de ejecución.

6. El método `getInstance` se encarga de construir la BD y nos retorna la instancia de `EventDatabase`.

7. La instruccion `synchronized(this)` se define porque es posible que multiples hilos requieran una instancia de la BD al mismo tiempo, resultando en varias BD en vez de una. Este problema suele suceder en apps más complejas. Al definirlo dentro de `synchronized` significa que solo un hilo entrara en este bloque a la vez, lo que asegura que la BD sea creada una sola vez.

8. Si `instance` es null, se usa `databaseBuilder` para obtener una instancia y se pasa el contexto y nombre de la base de datos.

9. Se define una estrategia de migración para cuando cambie el schema. Un _migration object_ es un objeto que define como se toman todas las filas en el schema viejo y se convierten al nuevo schema, para que no se pierdan los datos. En este caso se usa la solución más simple que es destruir y crear de nuevo la BD, es decir que se pierden los datos.

10. `build()` paso final para construir la BD.

En el archivo `Database.kt` agregamos la siguiente definición:

```kotlin

@Database(entities = [Event::class], version = 1, exportSchema = false) // 2
abstract class EventDatabase : RoomDatabase() { // 1

    abstract val eventDao: EventDao // 3

    companion object { // 4

        @Volatile
        private var INSTANCE: EventDatabase? = null // 5

        fun getInstance(context: Context): EventDatabase { // 6
            synchronized(this) { // 7
                var instance = INSTANCE

                if (instance == null) { // 8
                    instance = Room.databaseBuilder(
                        context.applicationContext,
                        EventDatabase::class.java,
                        "event_history_database"
                    )
                    .fallbackToDestructiveMigration() // 9
                    .build() // 10

                    INSTANCE = instance
                }

                return instance
            }
        }
    }
}
```

## Actualizar ViewModel

En la clase ViewModel actualizamos la definición y constructor. Extendiendo de `AndroidViewModel` que es igual a `ViewModel`, pero esta toma el contexto de la aplicación `application` como su parametro en el constructor y lo hace disponible como propiedad que usaremos luego.

```kotlin
class FirstViewModel(val database: EventDao, application: Application) : AndroidViewModel(application) {
    ...
}
```

## Agregar FirstViewModelFactory

Creamos una clase `FirstViewModelFactory` que se encarga de crear instacias de nuestro ViewModel. Dentro hay un método `create()` que toma una clase como argumento y nos devuelve un ViewModel.

```kotlin
class FirstViewModelFactory(
    private val dataSource: EventDao,
    private val application: Application
) : ViewModelProvider.Factory {

    @Suppress("unchecked_cast")
    override fun <T : ViewModel?> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(FirstViewModel::class.java)) {
            return FirstViewModel(dataSource, application) as T
        }

        throw IllegalArgumentException("Unknown ViewModel class")
    }
}
```

## Actualizar FirstFragment

1. Creamos una referencia del contexto de la aplicación. Lo ponemos dentro de `onCreateView()`, debajo de `binding`.

2. Necesitamos una referencia a la base de datos a través del DAO.

3. Creamos una instancia de `FirstViewModelFactory` y luego inicializamos el ViewModel.

```kotlin

val application = requireNotNull(this.activity).application // 1

val dataSource = EventDatabase.getInstance(application).eventDao // 2

// 3
val viewModelFactory = FirstViewModelFactory(dataSource, application)

viewModel = ViewModelProvider(this, viewModelFactory)
    .get(FirstViewModel::class.java)
```
