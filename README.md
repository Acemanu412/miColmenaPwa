# MiColmena

MiColmena es una PWA (Aplicación Web Progresiva) desarrollada por Cognitive y Plataforma 5, orientada a ayudar apicultores, dándoles medios sencillos y eficientes de registrar información. Esta aplicación también interactua con el arduino de MiColmena, recibiendo, organizando y mostrando información del mismo al usuario logueado.

### Como comenzar

Situandonos en la carpeta *back*, correr el comando *start*: 

**yarn**
```
yarn start
```
**npm**
```
npm start
```

### Prerrequisitos

Antes de poder instalar la aplicación y correrla localmente, es necesario realizar las siguientes instalaciones: 

  * [Node.js](https://nodejs.org/es/download/): Ambiente de JavaScript que permite correrlo *server-side* (Del lado del server).
  * [postgresQL](https://www.postgresql.org/): 	RDBMS (Sistema de gestión de bases de datos relacionales). Este sistema crea y administra las bases de datos SQL del *back-end*.
  

### Instalación

Durante esta etapa, podemos chequear el apartado siguiente "Estructura de carpetas" por cualquier confusión.
*** Los ejemplos dados son para el bash de Linux Mint. Si se está utilizando otro sistema operativo o CLI, los comandos pueden variar***

1. Desde la carpeta *root* (La carpeta raíz del proyecto), nos movemos a la carpeta *back*. 

```
cd back/
```

2. Instalar las dependencias del servicio *back*.

**yarn**
```
yarn
```
**npm**
```
npm i
```

3. Ir a la carpeta *front*. Se encuentra al mismo nivel que *back* así que tendremos que salir de esta última.
```
cd ../front/
```
4. Instalar las dependencias del servicio *back* y crear un .env donde especificaremos el puerto en el que deseamos que la aplicación de corra (El defecto es 8080).

**yarn**
```
yarn 
```
**npm**
```
npm i
``` 
5. Crea archivos .env (También llamadas variables de entorno). En ellas, necesitamos especificar el puerto(8080 ) y la ip del servidor.

```
echo "REACT_APP_PORT=:8080 " > .env
echo "REACT_APP_PORT='NUESTRA_IP'" >> .env
```
6. Desde el front correr el comando *build*. Esto creara un paquete que nuestro servidor enviará al *front-end* (Los dispositivos que ejecutaran nuestra aplicación llamando a nuestro servidor).

**yarn**
```
yarn build
```
**npm**
```
npm build
```

## Estructura de carpetas
```
.
├── back
│   ├── config
│   ├── models
│   ├── routes
│   ├── seeds
│   └── uploads
│       ├── audios
│       └── fotos
└── front
    ├── build
    │   ├── imagenes
    │   └── static
    │       ├── js
    │       └── media
    ├── public
    │   └── imagenes
    └── src
        ├── api
        ├── components
        ├── hooks
        ├── store
        ├── styles
        ├── themes
        ├── utils
        └── views

```

## Construido con
*front*: 
* [React](https://es.reactjs.org/) - El framework de JavaScript utilizado.
* [Mobx](https://mobx.js.org/README.html) - State management.
* [Styled-components](https://www.styled-components.com/) - Para la declaración de estilos.
* [Typescript](https://www.typescriptlang.org/) - Solo para linteo (Emprolija el código y permite static typing ). 

*back*: 
* [Express](https://expressjs.com/es/) - Utilizado para hacer correr el servidor.
* [Sequelize](https://sequelize.org/) -ORM (Interactúa con la base de datos desde el servidor)
* [Passport](http://www.passportjs.org/) - Login a través de sesiones.

## Contribuidores

* **Erika Castillo** - *Estudiante de Plataforma 5* [Github](https://github.com/erikaastef)
* **Karen Martinez** - *Estudiante de Plataforma 5* [Github](https://github.com/kareenmartinez)
* **Federico Ariganello** - *Estudiante de Plataforma 5* [Github](https://github.com/fariganello)
* **Jared Samuel Milbank** - *Estudiante de Plataforma 5* [Github](https://github.com/jsmil112)
* **Manuel Aceituno** - *Estudiante de Plataforma 5* [Github](https://github.com/Acemanu412)
* **Luis Palacios** - *Senior Developer* [Github](https://github.com/PinkiPalacios)

