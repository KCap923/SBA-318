const express = require('express');
const router = express.Router();
const rentals = require('../data/rentals');

router.get("/", (req, res) => {
  res.send("Rental List");
});

router.get("/new", (req, res) => {
  res.send("Rental Form");
});


router
.route("/:rentalId")
.get((req, res) => {
  res.send(`Get Rental With ID ${req.params.id}`)
})
.put((req, res) => {
  res.send(`Update Rental With ID ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Delete Rental With ID ${req.params.id}`)
})


router.param("id", (req, res, next, id) => {
  console.log(id)
  next()
})


module.exports = router;