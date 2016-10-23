/**
 * Created by pepillo on 22/10/16.
 */

"use strict";

let  mongoose = require('mongoose');
let db = mongoose.connection;

mongoose.Promise = global.Promise;

db.on('error', console.log.bind(console));

db.once('open', function () {
   console.log('Conectado a mongodb');
});

mongoose.connect('mongodb://localhost:27017/nodepop');