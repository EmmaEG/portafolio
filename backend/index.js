var mongoose = require('mongoose'); 
var app = require('./app');

var port = 8090; 


mongoose.Promise = global.Promise;


mongoose.connect("mongodb://localhost:27017/portafolio", {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
		.then(() =>{
			console.log("Conexión a la base de datos ok"); 
			app.listen(port, () => {
				console.log("Servidor corriendo ok en la url localhost:8090");
			});

		})
		.catch(err => console.log(err));