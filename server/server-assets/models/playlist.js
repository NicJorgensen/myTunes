var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schemaName = "Playlist"

var schema = new Schema ({
    title: {type: String, required: true},
})

module.exports = mongoose.model(schemaName, schema)