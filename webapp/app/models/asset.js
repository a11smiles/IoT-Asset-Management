// community libs
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// asset model
var AssetSchema = new Schema({
    id: { type: String, required: true, index: { unique: true } },
    uuid: { type: String, required: false },
    description: { type: String, required: true },
    owner: { type: String, required: false },
    lastUpdate: { type: Date, default: Date.now, required: true },
    lastLocation: { type: String, required: false }
});

// return the model
module.exports = mongoose.model('Asset', AssetSchema);