var Asset = require('../../models/asset.js');

module.exports = function (app, express) {
    var assetRouter = express.Router();

    // /api/assets
    assetRouter.route('/')

        // create an asset
        .post(function (req, res) {

            // create new instance of asset and hydrate properties from request object
            var asset = new Asset();
            asset.id = req.body.id;
            asset.description = req.body.description;
            asset.owner = req.body.owner;
            asset.lastUpdate = new Date().toISOString();

            // save asset
            asset.save(function (err) {
                if (err) {
                    if (err.code == 11000)
                        return res.json({ success: false, message: 'Asset with that Id already exists.' });
                    else
                        res.send(err);
                }

                // return created asset
                res.json(asset);
            });
        })

        // return a list of assets
        .get(function (req, res) {

            // query database for all assets
            Asset.find({}).sort({id: 1}).exec(function (err, assets) {
                if (err) res.send(err);

                res.json(assets);
            });
        });

    // /api/assets/:id
    assetRouter.route('/:id')

        // get an asset
        .get(function (req, res) {
            Asset.findOne({ 'id' : req.params.id }, function(err, asset) {
                if (err) res.send(err);

                // return asset
                res.json(asset);
            });
        })

        // update an asset
        .put(function (req, res) {
            Asset.findOne({ 'id' : req.params.id }, function(err, asset) {
                if (err) res.send(err);

                // update asset by hydrating properties from request object
                asset.description = req.body.description;
                asset.owner = req.body.owner;
                asset.lastUpdate = new Date().toISOString();
                
                // save asset
                asset.save(function (err) {
                    if (err) res.send(err);

                    // return updated asset
                    res.json(asset);
                });
            });
        })

        // delete an asset
        .delete(function (req, res) {
            Asset.remove({ 'id' : req.params.id }, function(err, asset) {
                if (err) res.send(err);

                res.json({ message: 'Asset deleted successfully. '});
            });
        });

    return assetRouter;
}