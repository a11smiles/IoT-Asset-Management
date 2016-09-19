var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = {
    verify : function(req, res, next) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        

        if (token) {
            jwt.verify(token, config.secret, function(err, decoded) {
                if(err) {
                    return res.status(403).send({
                        success: false,
                        message: 'Authentication failed.'
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.status(403).send({
                success: false,
                message: 'Authentication failed.'
            })
        }
    }
}