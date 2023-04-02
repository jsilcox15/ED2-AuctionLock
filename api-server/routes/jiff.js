let express = require("express");
let passport = require("passport");
let LocalStrategy = require("passport-local");
let crypto = require("crypto");

let db = require("../db");

let router = express.Router();

let tempResults = {};

router.post("/jiff/results", (req, res) => {
	tempResults = req.body;
	res.send();
});

router.get("/jiff/results", (req, res) => {
	res.send(tempResults);
})

module.exports = router;
