const express = require('express');
const router = express.Router();
const members = require('../data/members');


router.get("/", (req, res) => {
  res.send("Member List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create Member")
})

router
.route("/:memberId")
.get((req, res) => {
  res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {
  res.send(`Update User With ID ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Delete User With ID ${req.params.id}`)
})


router.param("id", (req, res, next, id) => {
  console.log(id)
  next()
})



module.exports = router