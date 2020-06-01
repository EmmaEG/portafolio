'use strict'

var Project = require('../models/project');
var fs = require('fs');


var path = require('path');

var controller = {

	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: 'Soy el metodo o acción test del controlador de project'
		});
	},


	saveProject: function(req, res){
		var project = new Project(); 
		var params  =  req.body; 
		
		project.name = params.name; 
		project.category = params.category;
		project.description = params.description;
		project.year = params.year;
		project.image = null; 

		project.save((err, projectStored) =>{
			//si existe error
			if(err) return res.status(500).send({message: "Error al guardar"});
			//si projectStored no existe
			if(!projectStored) return res.status(400).send({message: "No se ha podido guardar"});
			//si todo va bien
			return res.status(200).send({project: projectStored});

		});	
	},

	

	getProject: function(req, res){
		var projectId = req.params.id;//almaceno el id en esta variable	
		if(projectId == null) return res.status(404).send({message: "El proyecto no existe"});
			
			Project.findById(projectId, (err, project) =>{
				if(err) return res.status(500).send({message: "Error al devolver los datos"});
				if(!project) return res.status(404).send({message: "El proyecto no existe"});
				return res.status(200).send({
					project
				});
			});

		},

	getProjects: function(req, res){		
		Project.find({}).sort('-year').exec((err, projects) =>{
			if(err) return res.status(500).send({message: "Error al devolver los datos"});
			if(!projects) return res.status(404).send({message: "No existen proyectos"});
			return res.status(200).send({projects});
		});
	},



	updateProject: function(req, res){
		var projectId = req.params.id; 
		var update = req.body;
		Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
			if(err) return res.status(500).send({message: "Error al actualizar"});
			if(!projectUpdated) return res.status(404).send({message: "No se ha podido actualizar el proyecto"});
			return res.status(200).send({
				project: projectUpdated
			});
		});
	},

	
	deleteProject: function(req, res){
		var projectId = req.params.id;

		Project.findByIdAndRemove(projectId, (err, projectRemoved) =>{
			if(err) return res.status(500).send({message: "No se ha podido borrar el proyecto"});
			if(!projectRemoved) return res.status(404).send({message: "No se puede borrar"});
			return res.status(200).send({project: projectRemoved});
		});
	},




	uploadImage: function(req, res){
		var projectId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
		var filePath = req.files.image.path;
		var fileSplit = filePath.split('\\');//buscamos el nombre del file que se guardo en el disco duro
		var fileName = fileSplit[1];//recogemos el indice 1 de fileSplit que es el nombre del archivo
		var extSplit = fileName.split('\.');
		var fileExt = extSplit[1];
		if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
			Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) =>{				
				if(err) return res.status(500).send({message: "No pudimos subir la imagen"});
				if(!projectUpdated) return res.status(404).send({message: "No se puede asignar una imagen"});
				return res.status(200).send({project: projectUpdated});
		});
		}else{
		fs.unlink(filePath, (err) =>{
			return res.status(200).send({message: 'La extensión del archivo no es valida'});
			});
		}
		}else{
			return res.status(200).send({message: fileName});
		}
	}, 

	
	getImageFile: function(req, res){
		var file = req.params.image; 
		var path_file = './uploads/'+file; 

		fs.exists(path_file, (exists) =>{
			if(exists){ 
				return res.sendFile(path.resolve(path_file)); 
			}else{
				return res.status(200).send({
					message: "No existe la imagen"
				});
			}
		});

	}
};


module.exports = controller;


