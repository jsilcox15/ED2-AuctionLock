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
			email TEXT UNIQUE,
			account_type INTEGER NOT NULL
		)
	`);

	db.run(`
		CREATE TABLE IF NOT EXISTS auctions (
			id INTEGER PRIMARY KEY,
			title TEXT NOT NULL,
			description TEXT,
			price REAL,
			brand TEXT,
			category TEXT,
			thumbnail TEXT,
			end_time INTEGER NOT NULL,
			complete INTEGER NOT NULL,
			seller INTEGER NOT NULL
		)
	`);

	db.run(`
		CREATE TABLE IF NOT EXISTS images (
			id INTEGER,
			url TEXT,
			PRIMARY KEY (id, url)
		)
	`);

	db.run(`
		CREATE TABLE IF NOT EXISTS authorization (
			user_id INTEGER,
			computation_id TEXT,
			token TEXT,
			PRIMARY KEY (user_id, computation_id)
		)
	`);

	let salt = crypto.randomBytes(16);
	db.run("INSERT OR IGNORE INTO users (username, hashed_password, salt, account_type) VALUES (?, ?, ?, ?)", [
		"admin",
		crypto.pbkdf2Sync("adminpassword", salt, 310000, 32, "sha256"),
		salt,
		true
	]);
});

module.exports = db;
