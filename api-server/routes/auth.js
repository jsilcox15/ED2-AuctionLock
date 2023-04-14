let express = require("express");
let passport = require("passport");
let LocalStrategy = require("passport-local");
let crypto = require("crypto");

let db = require("../db");

let router = express.Router();

passport.use(new LocalStrategy((username, password, cb) => {
	db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
		if (err) return cb(err);
		if (!row) return cb(null, false, {
			message: "Incorrect username or password"
		});

		crypto.pbkdf2(password, row.salt, 310000, 32, "sha256", (err, hashedPassword) => {
			if (err) return cb(err);
			if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
				return cb(null, false, { message: "Incorrect username or password" });
			}
			return cb(null, row);
		})
	});
}));

passport.serializeUser((user, cb) => {
	process.nextTick(() => {
		cb(null, { id: user.id, username: user.username, isSeller: user.account_type === 1 });
	});
})

passport.deserializeUser((user, cb) => {
	process.nextTick(() => {
		cb(null, user);
	});
});

router.post("/login/password", passport.authenticate("local", {
	successRedirect: "/",
	failureRedirect: "/login"
}));

router.post("/logout", (req, res, next) => {
	req.logout((err) => {
		if (err) return next(err);
		res.redirect("/");
	});
});

router.post("/register", (req, res, next) => {
	let salt = crypto.randomBytes(16);
	crypto.pbkdf2(req.body.password, salt, 310000, 32, "sha256", function (err, hashedPassword) {
		if (err) return next(err);
		db.run("INSERT INTO users (username, hashed_password, salt) VALUES (?, ?, ?)", [
			req.body.username,
			hashedPassword,
			salt
		], (err) => {
			if (err) return next(err);
			let user = {
				id: this.lastID,
				username: req.body.username
			};
			req.login(user, (err) => {
				if (err) return next(err);
				res.redirect("/");
			});
		});
	});
});

module.exports = router;
