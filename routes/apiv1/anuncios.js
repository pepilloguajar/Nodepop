/**
 * Created by pepillo on 23/10/16.
 */
"use strict";

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuncio = mongoose.model('Anuncio');

// Cargo el listado de anuncios
router.get('/', function (req,res,next) {

    let name = req.query.nombre;
    let venta = req.query.venta;
    let tag = req.query.tag;
    let precio = req.query.precio;
    let sort = req.query.sort || null;
    let limit = parseInt(req.query.limit) || null;

    let filter ={};

    if(typeof name !== 'undefined'){
        filter.nombre = new RegExp("^" + name, "i");
    }
    if (typeof venta !== 'undefined' ){
        filter.venta = venta;
    }
    if(typeof tag !== 'undefined'){
        filter.tags = tag;
    }
    if(typeof precio !== 'undefined'){
        let posicion = precio.indexOf('-');
        if(posicion === -1){
            filter.precio =  precio ;
        }else if(posicion === 0){
            precio = precio.replace('-','');
            filter.precio = { $lte: precio };
        }else if(posicion === precio.length-1){
            precio = precio.replace('-','');
            filter.precio = { $gte: precio };
        }else{
            let min = precio.substr(0, posicion);
            let max = precio.substr(posicion +1, precio.length-1);
            filter.precio = { $gte: min, $lte: max };
        }
    }

    Anuncio.list(filter, sort, limit)
        .then(function (anuncios) {
            res.json({
                success:true,
                anuncios: anuncios
            });
        }).catch(next);

});

// Añado anuncios -- sólo para añadir anuncios de prueba
router.post('/add', function (req,res,next) {

    var anuncio = new Anuncio(req.body);

    anuncio.save(anuncio,function (err,anuncioGuardado) {
       if(err){
           next(err);
           return;
       }
       res.json({
           success:true,
           anuncio: anuncioGuardado
       });
    });

});

module.exports = router;