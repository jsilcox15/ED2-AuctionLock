let express = require("express");
let passport = require("passport");
let ensureLogIn = require("connect-ensure-login").ensureLoggedIn;

let ensureLoggedIn = ensureLogIn();

let db = require("../db");

let router = express.Router();

router.get("/auctions", (req, res) => {
    db.all("SELECT * FROM auctions WHERE complete = FALSE", [], (err, data) => {
        if (err) {
            console.log(err);
            res.send({
                success: false,
                message: "Error while fetching active auctions"
            });
        } else {
            res.send({
                success: true,
                message: data
            });
        }
    });
});

router.get("/auctions/:id", (req, res) => {
    db.get("SELECT * FROM auctions WHERE id = ?", [req.params.id], (err, data) => {
        if (err) {
            console.log(err);
            res.send({
                success: false,
                message: "Error while fetching auction"
            });
        } else if (!data) {
            res.send({
                success: true,
                message: null
            });
        } else {
            res.send({
                success: true,
                message: data
            });
        }
    });
});

router.post("/auctions/create", (req, res) => {
    if (!req.user?.isSeller) {
        res.send({
            success: false,
            message: "You are not a seller"
        })
        return;
    }

    db.run(`
        INSERT INTO auctions
        (title, description, price, brand, category,
        thumbnail, end_time, complete, seller)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.brand,
        req.body.category,
        req.body.thumbnail,
        req.body.end_time,
        false,
        req.user.id
    ], function (err) {
        if (err) {
            console.log(err);
            res.send({
                success: false,
                message: "Something went wrong while creating your auction"
            });
        } else {
            console.log(this.lastID);
            res.send({
                success: true,
                message: {
                    id: this.lastID
                }
            });
        }
    });
});

module.exports = router;
