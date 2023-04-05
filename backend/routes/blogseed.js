const express = require('express');
const router = express.Router()
const blogSeed = require("../blogs.json");

//HOME
router.get("/", (req, res) => {
  res.send("Welcome to the plants emergency room");
});

//get seed data of blogs
router.get("/seedblogs", (req, res) => {
  // send projects via JSON
  res.json(blogSeed);
});


module.exports = router