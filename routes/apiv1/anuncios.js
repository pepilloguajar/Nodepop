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
    Anuncio.find().exec(function (err,anuncios) {
        if(err){
            next(err);
            return;
        }
        res.json({
            success:true,
            anuncios: anuncios
        });
    })
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