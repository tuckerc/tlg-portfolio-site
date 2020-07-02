"use strict";

const express = require("express");
var geolocation = require("geolocation");

const app = express();

const port = 3000;

// app.use(express.static("public"));

app.get("/", function (req, res) {
  console.log(req);
  geolocation.getCurrentPosition(function (err, position) {
    if (err) throw err;
    console.log(position);
  });
  res.send(".public/index");
});

app.get("/", (req, res) => res.send("Testing my Geolocation Node app!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
