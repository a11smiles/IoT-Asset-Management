var docdbUtils = require('../utils/docdb');

function LocationDao(documentDBClient, databaseId, collectionId) {
    this.client = documentDBClient;
    this.databaseId = databaseId;
    this.collectionId = collectionId;

    this.database = null;
    this.collection = null;
}

module.exports = LocationDao;

LocationDao.prototype = {
    init: function (callback) {
        var self = this;

        docdbUtils.getOrCreateDatabase(self.client, self.databaseId, function (err, db) {
            if (err) {
                callback(err);
            } else {
                self.database = db;
                docdbUtils.getOrCreateCollection(self.client, self.database._self, self.collectionId, function (err, coll) {
                    if (err) {
                        callback(err);
                    } else {
                        self.collection = coll;
                        callback();
                    }
                });
            }
        });
    },

    find: function (querySpec, callback) {
        var self = this;

        if (!!self.collection)
            self.client.queryDocuments(self.collection._self, querySpec).toArray(function (err, results) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, results);
                }
            });
        else {
            callback();
        }
    }
};
