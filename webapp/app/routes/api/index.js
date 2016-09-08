module.exports = function(app, express) {

    var apiRouter = express.Router();

    // set default 
    apiRouter.get('/', function(req, res) {
        res.end();
    });

    // add routes for assets api
    var AssetRoutes = require('./asset.js')(app, express);
    apiRouter.use('/assets', AssetRoutes);

    // add routes for users api
    var UserRoutes = require('./user.js')(app, express);
    apiRouter.use('/users', UserRoutes);

    return apiRouter;
}