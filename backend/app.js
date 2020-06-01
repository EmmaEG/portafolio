'use strict'

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

/*archivos de rutas*/
var project_routes = require('./routes/project');

/*middlewere*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*cors - configuración de cabeceras*/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');//aquí cuando publiquemos nuestra web hay que colocar nuestra url
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


/*rutas*/
app.use('/api', project_routes);

module.exports = app;