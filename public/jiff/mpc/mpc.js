let Axios = require("axios");

(function(exports, node) {
  let saved_instance;

  exports.JUDGE_COUNT = 2;
  exports.JUDGE_IDS = Array.from({length: exports.JUDGE_COUNT}, (_, i) => i + 1);

  async function authenticateToken(token) {
    return true;
  }

  exports.createBeforeInitializationHook = (checkToken) => {
    return [
      (jiff, computation_id, msg, params) => {
        // Let server through
        if (params.party_id === "s1") {
          return params;
        }

        /*if (!(await authenticateToken(msg.token))) {
          console.log("Rejected " + params.party_id);
          throw new Error("Token rejected");
        }*/

        console.log("allow " + params.party_id);

        return params;
      }
    ]
  }

  exports.connect = (hostname, computation_id, options) => {
    let opt = Object.assign({}, options);
    opt.crypto_provider = true;

    let JIFFClient;
    if (typeof window !== "undefined" && window.JIFFClient) {
      JIFFClient = window.JIFFClient;
    } else {
      JIFFClient = JIFFClient = require("../../../jiff/lib/jiff-client");
    }

    saved_instance = new JIFFClient(hostname, computation_id, opt);
    return saved_instance;
  }

  exports.compute = (input, jiff_instance) => {
    if (jiff_instance == null) {
      jiff_instance = saved_instance;
    }

    let input_count = input.input_count;
    let compute_count = input.compute_count;
    let party_count = input_count + compute_count;
    let reveal_parties = input.reveal_parties;
    input = input.value;

    let first_input = compute_count + 1;
    let last_input = compute_count + input_count;

    let id = jiff_instance.id;
    let compute_parties = ["s1"];
    let input_parties = [];
    let all_parties = ["s1"];
    for (let i = 1; i <= party_count; i++) {
      all_parties.push(i);
      if (i <= compute_count) {
        compute_parties.push(i);
      } else {
        input_parties.push(i);
      }
    }

    console.log(`compute_parties=${compute_parties}`);
    console.log(`input_parties=${input_parties}`);
    console.log(`first_input=${first_input} last_input=${last_input}`);

    if (reveal_parties == null) {
      reveal_parties = all_parties;
    }

    /*
    if (input_parties.indexOf(id) > -1) {
      // Input party. Send a value and receive the result
      jiff_instance.share(input, compute_parties.length, compute_parties, input_parties);
      return jiff_instance.receive_open(compute_parties, all_parties);
    }
    */

    // Otherwise, compute party

    // Receive shares from all parties that submitted
    let shares = {};

    for (let i = first_input; i <= last_input; i++) {
      console.log(`trying to receive from ${i}`);
      shares[i] = jiff_instance.share(null, compute_parties.length, compute_parties, [ i ])[i];
    }

    let maxShare = shares[first_input];
    let maxId = first_input;
    for (let p = first_input; p <= last_input; p++) {
      let cmp = shares[p].sgt(maxShare);
      maxShare = cmp.if_else(shares[p], maxShare);
      maxId = cmp.if_else(p, maxId);
    }

    // Determine if there is a tie
    let occurrences = shares[first_input].seq(maxShare);
    for (let p = first_input + 1; p <= last_input; p++) {
      occurrences = occurrences.sadd(shares[p].seq(maxShare));
    }

    // Compute the second maximum
    let cmpFirstPass = shares[first_input].seq(maxShare);
    let secondMaxShare = cmpFirstPass.if_else(shares[first_input + 1], shares[first_input]);
    for (let p = first_input; p <= last_input; p++) {
      let cmp = shares[p].sgt(secondMaxShare);
      let max = cmp.if_else(shares[p], secondMaxShare);
      let eq = max.seq(maxShare);
      secondMaxShare = eq.if_else(secondMaxShare, max);
    }

    let pShares = [];
    for (let p = first_input; p <= last_input; p++) {
      pShares.push(jiff_instance.open(shares[p], reveal_parties));
    }

    let pMaxId = jiff_instance.open(maxId, reveal_parties);
    let pMax2Value = jiff_instance.open(secondMaxShare, reveal_parties);
    let pTie = jiff_instance.open(occurrences, reveal_parties);
    return Promise.all([pMaxId, pMax2Value, pTie]);
  }
}((typeof exports === "undefined" ? this.mpc = {} : exports), typeof exports !== "undefined"));