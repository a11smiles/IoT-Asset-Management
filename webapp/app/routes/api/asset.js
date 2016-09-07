var Asset = require('../../models/asset.js');

module.exports = function (app, express) {
    var assetRouter = express.Router();

    assetRouter.route('/')
        .get(function (req, res) {
            Asset.find(function (err, assets) {
                if (err) res.send(err);

                res.json(assets);
            });
        });

    return assetRouter;
}