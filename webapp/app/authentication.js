var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = {
    verify : function(req, res, next, justVerify) {
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        if (token) {
            jwt.verify(token, config.secret, function(err, decoded) {
                if(err) {

                    if (justVerify) next(false);
                    else
                        return res.status(403).send({
                            success: false,
                            message: 'Authentication failed.'
                        });
                
                } else {
                
                    if (justVerify) next(true);
                    else {
                        req.decoded = decoded;
                        next();
                    }
                
                }
            });
        } else {
            if (justVerify) next(false);
            else
                return res.status(403).send({
                    success: false,
                    message: 'Authentication failed.'
                });
        }
    }
}