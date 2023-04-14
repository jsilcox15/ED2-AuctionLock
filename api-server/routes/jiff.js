require("dotenv").config();
let express = require("express");
let passport = require("passport");
let LocalStrategy = require("passport-local");
let crypto = require("crypto");
let superagent = require("superagent");

let db = require("../db");

let router = express.Router();

let tempResults = {};

router.post("/jiff/results", (req, res) => {
	tempResults = req.body;
	res.send();
});

router.get("/jiff/results", (req, res) => {
	res.send(tempResults);
});

router.get("/jiff/compute/:id", (req, res) => {
	let computationId = req.params.id;
	let url = "http://localhost:8080/control/compute/" + computationId;
	superagent.post(url).set("X-Api-Key", process.env.JIFF_KEY).end((err, res) => {
		if (err) {
			console.log(`Error while sending MPC begin ${err}`);
			return res.send({
				success: false,
				message: "Error"
			})
		}
	});
	res.send();
});

router.get("/jiff/authenticate/:id", (req, res) => {
	if (!req.user) return res.send({
		success: false,
		message: "Not logged in"
	});

	let computationId = req.params.id;

	db.get("SELECT * FROM authorization WHERE user_id = ? AND computation_id = ?", [
		req.user.id,
		computationId
	], (err, row) => {
		if (err) {
			console.log(err);
			return res.send({
				success: false,
				message: "Error"
			});
		}

		if (row && row.token) {
			return res.send({
				success: true,
				message: {
					token: row.token
				}
			});
		}

		let token = crypto.randomBytes(16).toString("hex");
		db.run("INSERT INTO authorization VALUES (?, ?, ?)", [
			req.user.id,
			computationId,
			token
		], (err) => {
			if (err) console.log(err);
		});
		res.send({
			success: true,
			message: {
				token: token
			}
		});
	});
})

module.exports = router;
