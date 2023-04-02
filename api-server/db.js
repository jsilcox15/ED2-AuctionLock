let sqlite3 = require("sqlite3");
let mkdirp = require("mkdirp");
let crypto = require("crypto");

mkdirp.sync("./var/db");

let db = new sqlite3.Database("./var/db/auctionlock.db");

db.serialize(() => {
	db.run(`
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY,
			username TEXT UNIQUE,
			hashed_password BLOB,
			salt BLOB,
			name TEXT,
			email TEXT UNIQUE
		)
	`);

	let salt = crypto.randomBytes(16);
	db.run("INSERT OR IGNORE INTO users (username, hashed_password, salt) VALUES (?, ?, ?)", [
		"admin",
		crypto.pbkdf2Sync("adminpassword", salt, 310000, 32, "sha256"),
		salt,
	]);
});

module.exports = db;
