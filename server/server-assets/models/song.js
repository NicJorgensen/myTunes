var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var schemaName = "Song"

var schema = new Schema({
    trackName: { type: String, required: true },
    artistName: { type: String, required: true },
    collectionName: { type: String, required: true },
    artworkUrl100: {type: String, required: true},
    previewUrl: {type: String, required: true}
    // playlistId: { type: ObjectId, ref: "Playlist", required: true }
})

module.exports = mongoose.model(schemaName, schema)