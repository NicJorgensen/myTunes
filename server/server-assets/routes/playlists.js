var router = require('express').Router()
var Playlists = require('../models/playlist')
var Songs = require('../models/song')

//CREATE A PLAYLIST
// router.post("/api/playlists", (req, res, next) => {
//     Playlists.create(req.body)
//         .then(playlist => {
//             return res.send(playlist);
//         })
//         .catch(next);
// });

//GET PLAYLIST
router.get("/mytunes/playlist", (req, res, next) => {
    Songs.find()
        .then(playlist => {
            res.send(playlist);
        })
        .catch(next);
});

// GET PLAYLIST BY ID
// router.get("/api/playlists/:id", (req, res, next) => {
//     Playlists.findById(req.params.id)
//         .then(playlist => {
//             return res.send(playlist);
//         })
//         .catch(next);
// });

// DELETE A LIST
router.delete("/api/playlists/:id", (req, res, next) => {
    Playlists.findByIdAndRemove(req.params.id)
        .then(playlist => {
            return res.send("Playlist successfully deleted!");
        })
        .catch(next);
});

module.exports = { router };