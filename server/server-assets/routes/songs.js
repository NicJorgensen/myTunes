var router = require('express').Router()
var Songs = require('../models/song')


//ADD A SONG TO A PLAYLIST
router.post("/mytunes/playlist", (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            return res.send(song);
        })
        .catch(next);
});

// DELETE A SONG FROM THE PLAYLIST
router.delete("/mytunes/playlist/songs/:id", (req, res, next) => {
    Songs.findByIdAndRemove(req.params.id)
        .then(playlist => {
            return res.send("Song successfully removed!");
        })
        .catch(next);
});

module.exports = { router };