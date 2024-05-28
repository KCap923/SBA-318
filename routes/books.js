const express = require('express');
const router = express.Router();
const books = require('../data/books');


router.get("/", (req, res) => {
  res.send("Book List");
});

router.get("/new", (req, res) => {
  res.send("New Book Form");
});


router
.route("/:bookId")
.get((req, res) => {
  res.send(`Get Book With ID ${req.params.id}`)
})
.put((req, res) => {
  res.send(`Update Book With ID ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Delete Book With ID ${req.params.id}`)
})


router.param("id", (req, res, next, id) => {
  console.log(id)
  next()
})



module.exports = router;