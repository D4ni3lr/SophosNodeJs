# Proyecto NODE-JS reto técnico Sophos

Lamentablemente por las condiciones de la red y el equipo con el que tuve que trabajar, no alcancé a tener el proyecto funcionando con Mongo DB.

## Funcionamiento
La aplicación tiene solo 2 dependencias: express y request.
El punto de entrada es el archivo index.js y se ejecuta con el comando npm run start.
Una vez se ejecuta este archivo crea un servidor express que escucha en el puerto 3100, al mismo tiempo carga el archivo routes.js el cual es el encargado de crear 3 endpoints disponibles:

- / GET todos los registros
- /:type filtra por type los objetos disponibles.
- / POST permite agregar un elemento a la lista

El archivo de rutas tiene contiene además la logica que permite el acceso desde otros dominios "Allow-Origin" esto para poder consumir el api desde la app react.

El archivo MoviesController tiene el listado de registros disponibles en memoria y es quien tiene la lógica de búsqueda y creación de registros.

Para probar el servicio se crearon 2 archivos, test_create.js se encarga de crear 10 registros cada vez que es ejecutado.

El archivo test_search.js se encarga de realizar una búsqueda global y una busqueda por tipo de pelicula.

## Instalación 🔧

```
npm install
```

## Ejecutar 🚀
-- inicia la app --
```
npm start
```
-- crea registros ---
```
npm run test_create
```
-- prueba la creación --
```
npm run test_search
```

### Nota:

Algunos commits quedaron con el usuario "Maria Alejandra Villarreal" que fue la persona que me prestó el equipo. Cuando me percaté del error hice la corrección.