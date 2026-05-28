const express = require("express");
const router = express.Router();
const db = require("../conf/database");
const SelectModel = require("../models/Select");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const tables = [
  "users",
  "posts",
  "comments",
  "replies",
  "subscriptions",
  "categories",
  "views",
  "votes",
  "competitions",
  "entries",
];

router.get("/:table", (req, res, next) => {
  var table = req.params.table;
  if (tables.includes(table)) {
    SelectModel.select(table)
      .then((results) => {
        console.log(results)
        res.json(results)
      })
      .catch((err) => res.status(500).send(err.message));
  } else {
    res.status(200).send("Error: Unknown table");
  }
});

module.exports = router;
