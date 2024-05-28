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
  res.send(`Get Book With ID ${re.params.id}`)
})


module.exports = router;











// GET route 
// router.get('/', (req, res) => {
//   const links = [
//     {
//       href: 'books/:books',
//       rel: ':id',
//       type: 'GET',
//     },
//   ];

//   res.json({ books });
// });



// router.get('/:id', (req, res, next) => {
//   const books = books.find((p) => p.id == req.params.id);

//   const links = [
//     {
//       href: `/${req.params.id}`,
//       rel: '',
//       type: 'PATCH',
//     },
//     {
//       href: `/${req.params.id}`,
//       rel: '',
//       type: 'DELETE',
//     },
//   ];

//   if (books) res.json({ books, links });
//   else next();
// });



