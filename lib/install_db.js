/**
 * Created by pepillo on 22/10/16.
 */

var mongodb = require('mongodb');
var client = mongodb.MongoClient;

client.connect('mongodb://localhost:27017/nodepop', function(err, db) {
    if (err) {
        return console.log(err, 'Error al conectar con la mongodb');
    }

    console.log('CONECTADO A MONGO');

    //Borro los datos existentes
    db.collection('usuarios').removeMany();
    db.collection('anuncios').removeMany();


    // Creo datos iniciales en la BBDD

    //Usuario de prueba email: admin@jjm.es   pass: 1234
    db.collection('usuarios').insertMany([
        {
            name: "Administrador",
            email: "admin@jjm.es",
            pass: "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
        }
    ],function (err, result) {
       if(err){
           console.log('error:',err);
           return;
       }
       console.log('Usuarios añadidos',result);
    });


    db.collection('anuncios').insertMany([
        {
            nombre: "Iphone 6S",
            venta: true,
            precio: 500,
            foto: "iphone6s.js",
            tags: [ "lifestyle", "mobile"]
        },
        {
            nombre: "Iphone 5",
            venta: true,
            precio: 500,
            foto: "iphone6s.js",
            tags: [ "lifestyle", "mobile"]
        },
        {
            nombre: "Iphone 3GS",
            venta: true,
            precio: 200,
            foto: "iphone3gs.js",
            tags: [ "lifestyle", "mobile", "retro"]
        },
        {
            nombre: "Bicicleta",
            venta: true,
            precio: 125,
            foto: "bicicleta.js",
            tags: [ "lifestyle", "sport", "enjoy"]
        },{

            nombre: "Moto",
            venta: true,
            precio: 1500,
            foto: "motosuzuki.js",
            tags: [ "suzuki", "motor", "enjoy"]
        },
        {
            nombre: "Coche Golf",
            venta: true,
            precio: 6000,
            foto: "golf.js",
            tags: [  "motor", "travel"]
        },
        {
            nombre: "Iphone 6S",
            venta: false,
            precio: 400,
            foto: "iphone6s2.js",
            tags: [ "lifestyle", "mobile"]
        },
        {
            nombre: "Samsung Note 7",
            venta: false,
            precio: 5,
            foto: "note.js",
            tags: [ "lifestyle", "mobile", "explosion"]
        },
        {
            nombre: "Piruleta",
            venta: false,
            precio: 2,
            foto: "piruleta.js",
            tags: [ "eat", "child"]
        },{
            nombre: "MacBook Pro 13",
            venta: true,
            precio: 500,
            foto: "iphone6s.js",
            tags: [ "lifestyle", "oficce", "tecnology"]
        },
    ],function (err, result) {
        if(err){
            console.log('error:',err);
            return;
        }
        console.log('Anuncios añadidos',result);
    });


    db.close();

});