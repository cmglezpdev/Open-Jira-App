# Next.js OpenJira App

Correr localmente, se necesita la base de datos

```
docker-compose up -d
```

* El -d, significa __detached__

* MongoDB url local

```
mongodb://localhost:27017/entriesdb
```


Para generar el build de producción

```bash
yarn build
```

Correr la version de producción

```bash
yarn start
```


## Configurar las varaibles de entorno

Renombrar el archivo __.env.template__ a __.env__

### Datos de las variables

__DB_CNN__: Cadena de conexion con mongodb

## LLenar la base de datos con información de pruebas

Llamar al endpoint:
```
GET http://localhost:3000/api/seed
```