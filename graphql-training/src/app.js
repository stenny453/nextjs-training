"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 6000;
app.get('/', function (req, res) {
    res.send("Test with typescript");
});
app.listen(port, function () {
    return console.log("Node with typescript is running");
});
