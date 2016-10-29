/**
 * Created by pepillo on 22/10/16.
 */

"use strict";
var configUsers = require('../configUsers');

var mongoose = require('mongoose');

var anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

anuncioSchema.index({nombre:1, venta:1, precio:1});

anuncioSchema.statics.list = function (filter, sort, limit) {
    return new Promise(function (resolve, reject) {
        let query = Anuncio.find(filter);
        query.sort(sort);
        query.limit(limit);
        query.exec(function (err, result) {
            if(err){
                reject(err);
                return;
            }
            let anuncios = [];
            for(let i =0; i<result.length;i++){
                anuncios.push({
                    "nombre": result[i].nombre,
                    "venta": result[i].venta,
                    "precio": result[i].precio,
                    "fotoAbs": configUsers.base_Url+'/images/'+result[i].foto,
                    "foto": '/images/'+result[i].foto,
                    "tags": result[i].tags
                })
            }

            resolve(anuncios);
        });
    });
};

anuncioSchema.statics.listTags = function () {
    return new Promise(function (resolve, reject) {
       Anuncio.find().exec(function (err, result) {
            if(err){
                reject(err);
                return;
            }
            let tags = [];
            for(let i =0; i<result.length;i++){
                for(let j = 0; j<result[i].tags.length;j++){
                    if(tags.indexOf(result[i].tags[j])===-1) {
                        tags.push(result[i].tags[j]);
                    }
                }
            }

            resolve(tags);
        });
    });
};

let Anuncio = mongoose.model('Anuncio', anuncioSchema);