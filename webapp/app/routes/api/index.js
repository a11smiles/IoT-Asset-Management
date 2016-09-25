module.exports = function(app, express) {

    var apiRouter = express.Router();

    // configure jwt authentication token for api access
    var jwt = require('../../authentication');
    apiRouter.use(jwt.verify);

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

    // add routes for azure api
    var AzureRoutes = require('./azure.js')(app, express);
    apiRouter.use('/azure', AzureRoutes);

    return apiRouter;
}