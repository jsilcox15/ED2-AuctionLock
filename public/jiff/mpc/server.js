// Dependencies
require("dotenv").config();
var http = require('http');
var JIFFServer = require('../../../jiff/lib/jiff-server.js');
var mpc = require('./mpc.js');
var path = require('path');
var readline = require("readline");
let Axios = require("axios");

if (process.argv[2] == null) {
	console.log("Usage node: server.js <token>")
	return;
}

const token = process.argv[2];

// Create express and http servers
var express = require('express');
var app = express();
http = http.Server(app);

// Create JIFF server
var jiff_instance = new JIFFServer(http, {
  logs: false,
  // party_count: 4,
  socketOptions: {
    pingTimeout: 1000,
    pingInterval: 2000
  },
  hooks: {
  	beforeInitialization: mpc.createBeforeInitializationHook(token)
  },
});

let jiffwebsocketserver = require("../../../jiff/lib/ext/jiff-server-websockets");
jiff_instance.apply_extension(jiffwebsocketserver);

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

jiff_instance.computationMaps.maxCount["auction-test"] = 100000;

function performComputation() {
	let computationClient = jiff_instance.compute("auction-test", {
		crypto_provider: true,
		// party_count: 4,
	});

	computationClient.wait_for(mpc.JUDGE_IDS, () => {
		let party_count = 0;
		let party_map = jiff_instance.socketMaps.socketId["auction-test"];
		for (let id in party_map) {
			if (party_map.hasOwnProperty(id)) {
				party_count++;
			}
		}

		computationClient.emit("begin", mpc.JUDGE_IDS, party_count.toString());

		let compute_count = mpc.JUDGE_COUNT;
		let input_count = party_count - compute_count;

		let promise = mpc.compute({ value: null, compute_count: compute_count, input_count: input_count }, computationClient);
		promise.then((v) => {
			console.log(v);
			Axios.post("http://localhost:9999/jiff/results", {
				"results": v
			}, {
				withCredentials: true
			}).then(() => {
				console.log("POSTed");
			});
		});
	});
}

console.log(__dirname);

let router = express.Router();

router.post("/compute/:id", (req, res) => {
	if (req.header("X-Api-Key") !== process.env.JIFF_KEY) return res.send("not allowed");

	let computationId = req.params.id;
	performComputation(computationId);
	res.send("begin");
});

app.use('/control', router);
app.use('/auction', express.static(path.join(__dirname, '..', 'mpc')));
app.use('/dist', express.static(path.join(__dirname, '..', 'jiff', 'dist')));
app.use('/lib/ext', express.static(path.join(__dirname, '..', 'jiff', 'lib', 'ext')));
http.listen(8080, function () {
  console.log('listening on *:8080');
});
