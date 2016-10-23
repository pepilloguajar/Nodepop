/**
 * Created by pepillo on 22/10/16.
 */

"use strict";

let mongoose = require('mongoose');

let usuarioSchema = mongoose.Schema({
    name: String,
    email: String,
    pass: String
});

usuarioSchema.index({email:1}, {unique:true});

var Usuario = mongoose.model('Usuario',usuarioSchema);