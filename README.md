# Next.js OpenJira App ✍

## Qué puedes hacer en Open Jira?

Open Jira es una pequeña aplicación construida con __Next Js__ la cual nos permite manejar nuestras tareas diarias 

En la aplicación podrás:
- Crear tareas y agruparlas en tres columnas (_Pendientes_, _En Progreso_ y _Completados_) con el objetivo de llevar un control de tu progreso
- Editar las tareas ya creadas
- Eliminar las tareas
- Mover una tarea entre las columnas

# Ver la aplicación

La aplicación en producción se puede ver aquí

Para correrla localmente, se necesita correr nuestra imagen de MongoDB en docker

```
docker-compose up -d
```

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