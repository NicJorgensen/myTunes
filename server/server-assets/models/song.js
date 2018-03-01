var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;
var schemaName = "Song"

var schema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    playlistId: { type: ObjectId, ref: "Playlist", required: true }
})

module.exports = mongoose.model(schemaName, schema)