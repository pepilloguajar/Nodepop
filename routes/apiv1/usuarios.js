/**
 * Created by pepillo on 22/10/16.
 */

var express = require('express');
var router = express.Router();

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

    var user = new Usuario(req.body);

    user.save(function (err, userSave) {
       if(err){
           next(err);
           return;
       }
       console.log('Ususario guardado');
       res.json({success:true, user:userSave});
    });


});

module.exports = router;
