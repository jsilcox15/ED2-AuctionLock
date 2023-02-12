(function (exports, node) {
  let saved_instance;

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

    const party_count = jiff_instance.party_count;

    let input_count = input.input_count;
    input = input.value;

    let id = jiff_instance.id;
    let compute_parties = [];
    let input_parties = [];
    let all_parties = [];
    for (let i = 1; i <= party_count; i++) {
      all_parties.push(i);
      if (i <= input_count) {
        input_parties.push(i);
      } else {
        compute_parties.push(i);
      }
    }

    if (input_parties.indexOf(id) > -1) {
      // Input party. Send a value and receive the result
      jiff_instance.share(input, compute_parties.length, compute_parties, input_parties);
      return jiff_instance.receive_open(compute_parties, all_parties);
    }

    // Otherwise, compute party

    // Receive shares from all parties that submitted
    var shares = jiff_instance.share(input, compute_parties.length, compute_parties, input_parties);

    // Compute the first maximum O(n)
    let maxShare = shares[1];
    let maxId = 1;
    for (let p = 1; p <= input_parties.length; p++) {
      let cmp = shares[p].sgt(maxShare);
      maxShare = cmp.if_else(shares[p], maxShare);
      maxId = cmp.if_else(p, maxId);
    }

    // Determine if there is a tie O(n)
    let occurrences = shares[1].seq(maxShare);
    for (let p = 2; p <= input_parties.length; p++) {
      occurrences = occurrences.sadd(shares[p].seq(maxShare));
    }

    // Compute the second maximum O(n)
    let cmpFirstPass = shares[1].seq(maxShare);
    let secondMaxShare = cmpFirstPass.if_else(shares[2], shares[1]);
    for (let p = 1; p <= input_parties.length; p++) {
      let cmp = shares[p].sgt(secondMaxShare);
      let max = cmp.if_else(shares[p], secondMaxShare);
      let eq = max.seq(maxShare);
      secondMaxShare = eq.if_else(secondMaxShare, max);
    }
    if (true) {
      return jiff_instance.open_array([occurrences, secondMaxShare, maxId], all_parties);
    }
    let pMaxId = jiff_instance.open(maxId, all_parties);
    let pMax2Value = jiff_instance.open(secondMaxShare, all_parties);
    let pTie = jiff_instance.open(occurrences, all_parties);
    return Promise.all([pMaxId, pMax2Value, pTie]);
  }
}((typeof exports === "undefined" ? this.mpc = {} : exports), typeof exports !== "undefined"));
