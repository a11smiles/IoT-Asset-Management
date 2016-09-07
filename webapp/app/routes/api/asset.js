var Asset = require('../../models/asset.js');

module.exports = function (app, express) {
    var assetRouter = express.Router();

    // /api/assets
    assetRouter.route('/')
        
        // create an asset
        .post(function(req, res) {
            
            // create new instance of asset and hydrate properties from request object
            var asset = new Asset();
            asset.id = req.body.id;
            asset.description = req.body.description;
            asset.owner = req.body.owner;

            // save asset
            asset.save(function(err) {
                if (err) res.send(err);

                res.json({ message: 'Asset saved.'});
            });
        })

        // return a list of assets
        .get(function (req, res) {

            // query database for all assets
            Asset.find(function (err, assets) {
                if (err) res.send(err);

                res.json(assets);
            });
        });

    

    return assetRouter;
}