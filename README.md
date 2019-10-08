# telegram-node

Este bot muestra una imagen aleatoria y deben de estar en la carpeta imagenes.

## Como usar
Necesitas crear el bot con @botfather, para obtener un TOKEN.

Crear archivo config.js con lo siquiente:

```js
    module.exports = {
        'TOKEN' : 'XXXXXXXXXXXXXXXXXXX'
    }
```

Instalar dependencias:

    npm install

Levantar el servidor (modo desarrollo):

    npm start
    
## Hacer correr la app (modo producción)
Pm2 es una herramienta para ambientes de producción de aplicaciones de Node.Js, básicamente esta herramienta nos sirve para levantar nuestra aplicación como un servicio demonio en nuestro servidor.
    
    npm install pm2 -g

Debemos crear un demonio con PM2 así que paramos el servidor y ejecutamos el siguiente comando:
    
    pm2 start /home/proyectosbeta/repositoriosGit/proyectos_beta_bot/bot.js --name proyectos_beta_bot

Necesitamos configurar el script de startup del servidor.
    
    pm2 startup

## Bot Proyectos Beta (proyectos_beta_bot)


## Comandos
Para poder ver una imagen se escribe en telegram /imagen
