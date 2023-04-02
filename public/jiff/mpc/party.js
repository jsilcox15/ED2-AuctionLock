if (process.argv[5] === null) {
  console.log("Usage: node mpc/party.js <input> <input_count> <compute_count> <party_id> <token>");
}

console.log(process.argv);

const mpc = require("./mpc");
const readline = require("readline");
const fs = require("fs");
const path = require("path");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = parseInt(process.argv[2], 10);

const computation_id = "auction-test";
const party_id = parseInt(process.argv[5], 10);
const token = process.argv[6];

const reconnecting = process.argv[6] === "reconnect";

const options = {
	party_id: party_id,
	crypto_provider: true,
	initialization: {token: token},
};

let isInput = false;

function saveKeys() {
	const public = `[${jiff_instance.public_key.toString()}]`;
	const secret = `[${jiff_instance.secret_key.toString()}]`;
	fs.writeFileSync(path.join(__dirname, `keys-party-${party_id}.json`),
		`{"public_key":${public},"secret_key":${secret}}`
	);
}

function loadKeys() {
	try {
		let obj = require(`./keys-party-${party_id}.json`);
		obj.public_key = new Uint8Array(obj.public_key);
		obj.secret_key = new Uint8Array(obj.secret_key);
		return obj;
	} catch (err) {
		return {
			public_key: null,
			secret_key: null,
		}
	}
}

let keys = loadKeys();
console.log(keys.public_key, keys.secret_key);
options.public_key = keys.public_key;
options.secret_key = keys.secret_key;

let jiff_instance = mpc.connect("http://localhost:8080", computation_id, options);
console.log("connected");

if (!isInput) {
	jiff_instance.wait_for(["s1"], () => {
		saveKeys();
		console.log("Judge initialized, keys are saved");
		console.log("It is safe to disconnect now");
	});
}

jiff_instance.wait_for(mpc.JUDGE_IDS.concat("s1"), async () => {
	console.log("start");

	if (!isInput) {
		console.log("Computation ready, waiting for signal to start.");
	}

	jiff_instance.listen("begin", (_, party_count) => {
		console.log("Begin signal received")

		let compute_count = mpc.JUDGE_COUNT;
		let input_count = party_count - compute_count;

		console.log(`inferred compute_count=${compute_count} input_count=${input_count}`)

		let promise = mpc.compute({ value: input, compute_count: compute_count, input_count: input_count });

		if (isInput) {
			jiff_instance.disconnect(true);
			rl.on("line", () => {
				jiff_instance.connect();
			});
		}

		promise.then((v) => {
			console.log(v);
		});
	});
});
