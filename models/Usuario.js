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

var Usuario = mongoose.model('Usuario',usuarioSchema);