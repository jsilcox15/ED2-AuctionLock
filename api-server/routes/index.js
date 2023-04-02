let express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
	res.send({
		success: true,
		data: "hi"
	})
});

module.exports = router;
