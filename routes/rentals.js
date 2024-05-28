const express = require('express');
const router = express.Router();
const rentals = require('../data/rentals');

router.get("/", (req, res) => {
  res.send("Rental List");
});

router.get("/new", (req, res) => {
  res.send("Rental Form");
});


router.get("/:rentalId", (req, res) => {
  req.params.rentalId;
  res.send(`Get Rental With ID ${req.params.id}`)
})


module.exports = router;