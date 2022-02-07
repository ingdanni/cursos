# Tarea 5

## Orientaciones

1. Retomar el proyecto de la app bancaria realizado en el primer parcial.

2. Agregar configuración necesaria para trabajar con `Room`. (<a href="./room.html" target="_blank">Ver referencia</a>)

3. Agregar 2 entidades con sus respectivos `DAOs`. Una para manejar las `cuentas` del usuario y otro para manejar `transacciones`. (<a href="./room.html#crear-paquete-y-archivos" target="_blank">Ver referencia</a>)

Ejemplo de entidades:

```kotlin

import androidx.room.*

// Entidad para cuentas

@Entity(tableName = "account")
data class Account(

    @PrimaryKey(autoGenerate = true)
    var id: Long = 0L,

    @ColumnInfo(name = "name")
    var name: String?,

    @ColumnInfo(name = "number")
    var number: String?,

    @ColumnInfo(name = "balance")
    var balance: Double?,

    @ColumnInfo(name = "created_at")
    var createdAt: Long = System.currentTimeMillis()
)

// Entidad para transacciones

@Entity(tableName = "transaction")
data class Transaction(

    @PrimaryKey(autoGenerate = true)
    var id: Long = 0L,

    @ColumnInfo(name = "desc")
    var description: String?,

    @ColumnInfo(name = "amount")
    var amount: Double?,

    // Esto debe ser una llave foranea que haga referencia a la cuenta de origen como se pide en el inciso 4
    @ColumnInfo(name = "origin_account_id")
    var originAccountId: Long?,

    @ColumnInfo(name = "destination_number")
    var destinationNumber: String?,

    @ColumnInfo(name = "created_at")
    var createdAt: Long = System.currentTimeMillis()
)

// DAO para cuentas

@Dao
interface AccountDao {

    @Query("SELECT * FROM account")
    fun getAll(): LiveData<List<Account>>

    @Insert
    fun insertAll(vararg accounts: Account)
}

// NOTA: Se debe agregar un DAO para las transacciones


```

4. La transaccion debe tener una referencia (llave foranea) a la cuenta de origen.

5. Cuando el usuario inicie en la pantalla de cuentas, se debe verificar si la Base de datos está vacia y si está vacia entonces se debe insertar datos (a través de código).

```kotlin

// En el ViewModel se debe agregar una validacion

accounts = accountDatabase.getAll()

if (accounts.size == 0) {
  accountDatabase.insertAll(cuentasFicticias)

  transactionDatabase.insertAll(transaccionesFicticias)
} else {
  // no hacer nada
}

```

6. Cuando el usuario navegue hacia la pantalla `detalle de cuenta` debe ver las transacciones de esa `cuenta`. Se debe pasar el parametro `id` de la cuenta entre los fragmentos. (<a href="./navigation5.html" target="_blank">Ver referencia</a>)

> 💡 IMPORTANTE: Toda la información insertada se debe mostrar en pantalla usando `RecyclerView`.

## Entrega

* Se debe enviar el proyecto en `.zip` por correo y también por el aula virtual.

* Se debe trabajar en parejas.

* Durante la clase cada pareja tendra 15 minutos para exponer su solución.

🏆 **VALOR: 15 PTS**
