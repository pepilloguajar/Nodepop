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

let Anuncio = mongoose.model('Anuncio', anuncioSchema);