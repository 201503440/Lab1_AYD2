'use strict' //Nos da informacion en consola de posibles problemas

require('dotenv').config();

var logger = require('morgan');//Mostrar informacion 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

var index = require('./src/routes/index')

app.use(logger('dev'))//Parametros segun informacion que se necesite
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'src/views'))
app.use(express.static(path.join(__dirname, 'src/public')))
app.use('/', index);

app.listen(port,function () {
    console.log('Servidor corriendo en el puerto ' + port);
});