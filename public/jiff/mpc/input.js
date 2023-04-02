const mpc = require("./mpc");

let input = parseInt(process.argv[2], 10);

let options = {
	initialization: {token: "asdf"},
};

let jiff_instance = mpc.connect("http://localhost:8080", "auction-test", options);

jiff_instance.wait_for(mpc.JUDGE_IDS.concat("s1"), () => {
	console.log("I am ID: " + jiff_instance.id);
	jiff_instance.share(input, 2, mpc.JUDGE_IDS.concat("s1"), [ jiff_instance.id ]);
	jiff_instance.disconnect(true, true);
});
