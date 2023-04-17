require("dotenv").config();

let express = require("express");
let cookieParser = require("cookie-parser");
let createError = require("http-errors");
let http = require("http");
let passport = require("passport");
let session = require("express-session");
let cors = require("cors");

let SQLiteStore = require("connect-sqlite3")(session);

let app = express();

let indexRouter = require("./routes/index");
let authRouter = require("./routes/auth");
let jiffRouter = require("./routes/jiff");
let auctionRouter = require("./routes/auctions");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
	secret: "auctionlock secret!",
	resave: false,
	saveUninitialized: false,
	store: new SQLiteStore({ db: "session.db", dir: "./var/db" })
}));
app.use(passport.authenticate("session"));

// Temporary since domains arent the same
const WHITELIST = ["http://localhost:8000",];
app.use(cors({
    credentials: true,
    origin: (origin, cb) => {
        cb(null, true);
        //if (WHITELIST.indexOf(origin) !== -1) {
        //    cb(null, true);
        //} else {
        //    cb(new Error("cors"));
        //}
    }
}));

app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/", jiffRouter);
app.use("/", auctionRouter);
app.use("/uploads", express.static("uploads"))

app.use((req, res, next) => {
	next(createError(404));
});

app.set("port", 9999);
let server = http.createServer(app);
server.listen(9999);
