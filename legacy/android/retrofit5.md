# Retrofit - Clase práctica

## Descargar proyecto

[⬇️  Descargar Proyecto - Retrofit-CP](../downloads/Retrofit-CP.zip)

## API y recursos

url: `https://shrouded-harbor-95996.herokuapp.com`

Recursos:

1. Realizar transferencia
2. Borrar cuenta

### Realizar transferencia

`POST` /api/v1/bank/transactions

Body:

```json
{
	"origin": "101022",
	"destination": "101096",
	"amount": 1000
}
```

Response:

```json
{
  "message": "Transacción realizada correctamente.",
  "transactionId": "55de32be-f226-448b-81be-877541923be1"
}
```

### Borrar cuenta

`DELETE` /api/v1/bank/accounts/:id

Response:

```json
{
  "message": "Registro eliminado correctamente."
}
```

## Orientaciones

1. Crear modelos necesarios para enviar y recibir datos.

2. Haciendo uso de los modelos, crear las funciones necesarias para ejecutar las peticiones usando **Retrofit**.

3. Llamar las funciones creadas en el `init` del `ViewModel`.
