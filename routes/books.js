const express = require('express');
const router = express.Router();
const books = require('../data/books');


router.get("/", (req, res) => {
  res.send("Book List");
});

router.get("/new", (req, res) => {
  res.send("New Book Form");
});

// router.post("/", (req, res) => {
//   res.send("Create Member")
// })

router.get("/:bookId", (req, res) => {
  req.params.bookId
  res.send(`Get Book With ID ${req.params.id}`)
})


module.exports = router;