if (process.argv[5] === null) {
  console.log("Usage: node mpc/party.js <input> <input_count> <compute_count>");
}


console.log(process.argv);

const mpc = require("./mpc");
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = parseInt(process.argv[2], 10);
const input_count = parseInt(process.argv[3], 10);
const compute_count = parseInt(process.argv[4], 10);

const computation_id = "auction-test";
const party_id = parseInt(process.argv[5], 10);

let compute_parties = ["s1"];
for (let i = input_count + 1; i <= compute_count + input_count; i++) {
	compute_parties.push(i);
}

const options = {
	party_count: compute_count + input_count,
	party_id: party_id,
	Zp: 127
};

let jiff_instance = mpc.connect("http://localhost:8080", computation_id, options);
console.log("connected");
//rl.on("line", () => {
	console.log(`waiting for ${compute_parties}`);
	jiff_instance.wait_for(compute_parties, () => {
		console.log("start");
		let promise = mpc.compute({ value: input, compute_count: compute_count, input_count: input_count });

		promise.then((v) => {
			console.log(v);
		});
	});
//});
