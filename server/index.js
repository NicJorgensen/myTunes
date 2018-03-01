let express = require("express"),
  bp = require("body-parser"),
  cors = require("cors"),
  server = express(),
  playlistRoutes = require('./server-assets/routes/playlists'),
  songRoutes = require('./server-assets/routes/songs'),
  port = 3000;

require("./server-assets/db/mlab-config");

server.use(cors());
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));

//Your routes here
server.use(playlistRoutes.router)
server.use(songRoutes.router)

server.use("*", (error, req, res, next) => {
  res.status(400).send(error);
});

server.listen(port, () => {
  console.log("the server is running... Port:", port);
});