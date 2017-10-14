const TeleBot = require('telebot');
const config  = require('./config');
const bot     = new TeleBot(config.TOKEN);
const folderImagenes = 'imagenes/';
const fs = require('fs');

// Imagenes
bot.on('/imagen', function (msg) {
    var chatId = msg.chat.id;
    fs.readdir(folderImagenes, (err, files) => {
        var cantidadImagenes = files.length;
        var numero = Math.floor((Math.random() * cantidadImagenes) + 1);
        var nombreImagen = files[numero];
        var imagen = folderImagenes + nombreImagen;
        bot.sendPhoto(chatId, imagen, {
            caption: nombreImagen
        });
    })
});

bot.start();
