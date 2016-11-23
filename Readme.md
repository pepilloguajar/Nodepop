# Nodepop

Aplicación que devuelve el listado de anuncios para ser mostrados desde cualquier cliente (iOS, Android, web, etc). Además gestiones el registro y login de usuarios.

# Instalacion

La aplicación está desarrollada sobre la versión de Node 6.7.0. 

Una vez clonado no colocarnos en el raiz del proyecto y ejecutamos ejecutar  ``` npm install ```


Lanzar fichero inicial de bbdd: 

```
npm run installDB
```

Arrancar aplicación por defecto en el puerto 3000: 

```
npm start
```



***

#Documentación de uso:

*Para peticiones POST utilizar x-www-form-urlencoded*

###Listar anuncios:
* URL:

```
GET  /apiv1/anuncios
```
* PARÁMETROS (* OBLIGATORIOS):

```
	*token: token de autenticación recibido en el login
	nombre: filtro por nombre (string)
	venta: 1 --> Venta    0 --> Compra
	precio: 50 --> precio = 50;  -50 --> precio inferior o igual a 50;  50+ --> precio superior o igual a 50:  50-100 --> precio entre 50 y 100
	tag: filtro por tag (sting)
	lang: idioma de respuesta de error (es --> español, en --> inglés)
	sort: parámetro por el que devolver ordenado el listado (numérico)
	limit: numero límite de anuncios a devolver (numérico)
	
```
* EJEMPLO DE RESPUESTA:

```
{
  "success": true,
  "anuncios": [
    {
      "nombre": "Iphone 3GS",
      "venta": true,
      "precio": 200,
      "fotoAbs": "http://localhost:3000/images/iphone3gs.jpg",
      "foto": "/images/iphone3gs.jpg",
      "tags": [
        "lifestyle",
        "mobile",
        "retro"
      ]
    },
    {
      "nombre": "Iphone 6S",
      "venta": true,
      "precio": 500,
      "fotoAbs": "http://localhost:3000/images/iphone6s.jpg",
      "foto": "/images/iphone6s.jpg",
      "tags": [
        "lifestyle",
        "mobile"
      ]
    }
  ]
}
```

### Listar tags de anuncios
* URL

```
GET /apiv1/anucnios/tags
```

* PARÁMETROS (* OBLIGATORIOS)

```
	*token: token de autenicación recibido en el login
	lang: idioma de respuesta de error (es --> español, en --> inglés)

```

* EJEMPLO DE RESPUESTA

```
{
  "success": true,
  "tags": [
    "lifestyle",
    "mobile",
    "retro",
    "sport",
    "enjoy",
    "suzuki",
    "motor",
    "travel",
    "explosion",
    "eat",
    "child",
    "oficce",
    "tecnology"
  ]
}
```


###Añadir usuarios:
* URL

```
POST /apiv1/users/add
```

* PARÁMETROS (* OBLIGATORIOS)

```
	*email: email del usuario
	*pass: contraseña
	*name: nombre
	lang: idioma de respuesta de error (es --> español, en --> inglés)
```

* EJEMPLO DE RESPUESTA

```
{
  "success": true,
  "user": {
    "__v": 0,
    "name": "JJ",
    "email": "admin4@jjm.es",
    "pass": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
    "_id": "581463f89438a939590060ef"
  }
}
```



###Login de usuario (conseguir autenticación)
* URL

```
POST /apiv1/users/login
```

* PARÁMETROS (*OBLIGATORIOS)

```
	user: email del usuario
	pass: contraseña del usuario
	lang: idioma de respuesta de error (es --> español, en --> inglés)

```

* EJEMPLO DE RESPUESTA

```
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4MTM4MDBmOTMzNjNhMzNjOWI4NzgwZSIsImlhdCI6MTQ3NzY3Mjk5NiwiZXhwIjoxNDc4Mjc3Nzk2fQ.flmYnlUhzm9lHAPn67tA_muxaRDFrrvHMF0N5nPY9WY"
}
```


****

##Códigos de error:
```
    20701: {'es': 'Falta nombre', 'en': 'The name is needed'},
    20702': {'es': 'Falta email', 'en': 'The email is needed'},
    20703: {'es': 'Falta contraseña', 'en': 'The password is needed'},
    20704: {'es': 'Token incorrecto', 'en': 'Token invalid'},
    20705: {'es': 'Usuario o contraseña incorrectos', 'en': 'User or password incorrect'},
    20706: {'es': 'Operación no autorizada', 'en': 'Operation not authorized'},
    20707: {'es': 'Email incorrecto', 'en': 'Email invalid'},
    20708: {'es': 'Email ya registrado', 'en': 'Email in use'},
    20709: {'es': 'Error conexion', 'en': 'Connection error'}
```


## Servidor de AWS - Nodepo desplegado en servidor

La url base donde está subido el repositorio es:

```
http://nodepop.montesrjj.com
```

A partir de esta url podemos utililizar el API

Para probar el login podéis utilizar las siguientes credenciales:
```
user --> admin@jjm.es
pass --> 1234
```

Un ejemplo de archivo estático servido por nginx es el siguiente:

```
http://nodepop.montesrjj.com/images/iphone6s.jpg
```

También se puede visualizar el porfolio en el dominio:
 
```
http://montesrjj.com 
```

