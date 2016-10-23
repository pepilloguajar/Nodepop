/**
 * Created by pepillo on 22/10/16.
 */

var express = require('express');
var router = express.Router();
var sha256 = require('sha256');

var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

//Listar usuarios  -- solo admin
router.get('/', function(req, res, next) {
    Usuario.find().exec(function (err,users) {
       if(err){
           next(err);
           return;
       }
       res.json({success:true, users:users});
    });
});

router.post('/add', function (req, res, next) {

    // Rescato los datos de usuario
    let nombre = req.body.name;
    let email = req.body.email;
    let pass = req.body.pass;


    let user = new Usuario({
        name: nombre,
        email: email,
        pass: sha256(pass)
    });

    user.save(function (err, userSave) {
       if(err){
           res.json({
               success:false,
               error: err
           });
           //next(err);
           return;
       }
       console.log('Ususario guardado');
       res.json({success:true, user:userSave});
    });


});

module.exports = router;
