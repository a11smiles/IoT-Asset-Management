var crypto = require('crypto'),
    DocumentDBClient = require('documentdb').DocumentClient,
    LocationDao = require('../../dao/locationDao'),
    config = require('../../../config');

module.exports = function (app, express) {
    var azureRouter = express.Router();

    // /api/azure/
    azureRouter.route('/')

        // generate an api key
        .post(function (req, res) {
            var key = new Buffer(req.body.key, "base64");

            var text = (req.body.verb || "").toLowerCase() + "\n" + 
                        (req.body.resourceType || "").toLowerCase() + "\n" + 
                        (req.body.resourceId || "") + "\n" + 
                        (req.body.date).toLowerCase() + "\n" + 
                        "" + "\n";

            var body = new Buffer(text, "utf8");
            var signature = crypto.createHmac("sha256", key).update(body).digest("base64");

            var MasterToken = "master";

            var TokenVersion = "1.0";

            return res.json({ success: true, message: encodeURIComponent("type=" + MasterToken + "&ver=" + TokenVersion + "&sig=" + signature)});
        });

    azureRouter.route('/docdb')

        .post(function (req, res) {
            var databaseId = req.body.databaseId;
            var collectionId = req.body.collectionId;
            var querySpec = req.body.querySpec;

            var docDbClient = new DocumentDBClient(config.host, { masterKey: config.masterKey });
            var locationDao = new LocationDao(docDbClient, databaseId, collectionId);
            locationDao.init(function() {
                locationDao.find(querySpec, function(err, items) {
                    if (err) {
                        return res.json({ success: false, message: err });
                    }

                    return res.json(items);
                })
            });
        });

        
    return azureRouter;
}