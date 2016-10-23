/**
 * Created by pepillo on 22/10/16.
 */

"use strict";

let mongoose = require('mongoose');

let anuncioSchema = mongoose.Schema({
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
           resolve(result);
        });
    });
}

let Anuncio = mongoose.model('Anuncio', anuncioSchema);