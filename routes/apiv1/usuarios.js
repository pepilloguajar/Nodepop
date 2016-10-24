/**
 * Created by pepillo on 22/10/16.
 */

var express = require('express');
var router = express.Router();
var sha256 = require('sha256');
var mensajesErr = require('../../lib/customError');

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
    let lang = req.body.lang || 'es';

    if(typeof nombre === 'undefined' || nombre ===''){
        res.json({
            success:false,
            code:20701,
            msg: mensajesErr[20701][lang]
        });
        return;
    }
    if(typeof email === 'undefined' || email ===''){
        res.json({
            success:false,
            code:20702,
            msg: mensajesErr[20702][lang]
        });
        return;
    }

    if(typeof pass === 'undefined' || pass ===''){
        res.json({
            success:false,
            code:20703,
            msg: mensajesErr[20703][lang]
        });
        return;
    }

    if(!isValidEmail(email)){
        res.json({
            success:false,
            code:20707,
            msg: mensajesErr[20707][lang]
        });
        return;
    }
    let user = new Usuario({
        name: nombre,
        email: email,
        pass: sha256(pass)
    });

    user.save(function (err, userSave) {
       if(err){
           res.json({
               success:false,
               error: err['code']===11000 ? mensajesErr[20708][lang] : err
           });
           return;
       }
       console.log('Ususario guardado');
       res.json({success:true, user:userSave});
    });


});


function isValidEmail(mail)
{
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}

module.exports = router;
