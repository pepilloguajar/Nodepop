/**
 * Created by pepillo on 26/10/16.
 */
'use strict';

/**
 * Your utility library for express
 */

var jwt = require('jsonwebtoken');
var configJWT = require('../configUsers');
//var configJWT = require('../local_config').jwt;

/**
 * JWT auth middleware for use with Express 4.x.
 *
 * @example
 * app.use('/api-requiring-auth', jwtAuth());
 *
 * @returns {function} Express 4 middleware
 */
module.exports = function() {

    return function(req, res, next) {

        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, configJWT.jwt, function(err, decoded) {
            //jwt.verify(token, Global.jwt, function(err, decoded) {
                if (err) {
                    return res.json({ ok: false, error: {code: 401, message: 'Failed to authenticate token.'}});
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    console.log('decoded', decoded);
                    next();
                }
            });

        } else {

            // if there is no token return error
            return res.status(403).json({
                ok: false,
                error: { code: 403, message: 'No token provided.'}
            });

        }
    };
};