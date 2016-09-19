var User = require('../../models/user.js');

module.exports = function (app, express) {
    var userRouter = express.Router();

    // /api/users
    userRouter.route('/')

        // create a user
        .post(function (req, res) {

            // create new instance of user and hydrate properties from request object
            var user = new User();
            user.username = req.body.username;
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.department = req.body.department;
            user.password = req.body.password;

            // save user
            user.save(function (err) {
                if (err) {
                    if (err.code == 11000)
                        return res.json({ success: false, message: 'A user with that username already exists.' });
                    else
                        res.send(err);
                }

                // return user
                res.json(user);
            });
        })

        // return a list of users
        .get(function (req, res) {

            // query database for all users
            User.find(function (err, users) {
                if (err) res.send(err);

                res.json(users);
            });
        });

    // /api/users/:username
    userRouter.route('/:username')

        // get a user
        .get(function (req, res) {
            User.findOne({ 'username' : req.params.username }, function(err, user) {
                if (err) res.send(err);

                // return user
                res.json(user);
            });
        })

        // update a user
        .put(function (req, res) {
            User.findOne({ 'username' : req.params.username }, function(err, user) {
                if (err) res.send(err);

                // update user by hydrating properties from request object
                user.firstName = req.body.firstName;
                user.lastName = req.body.lastName;
                user.department = req.body.department;
                user.password = req.body.password;
                
                // save user
                user.save(function (err) {
                    if (err) res.send(err);

                    // return user
                    res.json(user);
                });
            });
        })

        // delete a user
        .delete(function (req, res) {
            User.remove({ 'username' : req.params.username }, function(err, username) {
                if (err) res.send(err);

                res.json({ message: 'User deleted successfully. '});
            });
        });

    return userRouter;
}