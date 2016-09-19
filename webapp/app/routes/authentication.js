var User = require('../models/user.js'),
    config = require('../../config.js'),
    jwt = require('jsonwebtoken');


module.exports = function (app, express) {
    var authRouter = express.Router();

    authRouter.route('/authenticate')

        .post(function (req, res) {

            User.findOne({ username: req.body.username })
                .select('username password')
                .exec(function (err, user) {
                    if (err) throw err;

                    if (!user) {
                        // user not found
                        res.json({ success: false, message: 'Authentication failed.' });
                    } else if (user) {

                        var validPassword = user.comparePassword(req.body.password);
                        if (!validPassword) {
                            // password invalid
                            res.json({ success: false, message: 'Authentication failed.' });
                        } else {
                            // create jwt token
                            var token = jwt.sign({
                                username: user.username
                            }, config.secret, {
                                    expiresIn: '24h'
                                });

                            res.json({
                                success: true,
                                token: token
                            });
                        }
                    }
                });

        });

    authRouter.route('/authenticate/verify')

        .post(function (req, res) {
            var auth = require('../authentication');
            auth.verify(req, res, isValid => { res.json({ success: isValid }); }, true);
        });

    return authRouter;
}
