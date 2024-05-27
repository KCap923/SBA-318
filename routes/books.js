const express = require('express');
const router = express.Router();
const books = require('../data/books');



// GET route 
router.get('/', (req, res) => {
  const links = [
    {
      href: 'books/:books',
      rel: ':id',
      type: 'GET',
    },
  ];

  res.json({ books });
});



router.get('/:id', (req, res, next) => {
  const books = books.find((p) => p.id == req.params.id);

  const links = [
    {
      href: `/${req.params.id}`,
      rel: '',
      type: 'PATCH',
    },
    {
      href: `/${req.params.id}`,
      rel: '',
      type: 'DELETE',
    },
  ];

  if (books) res.json({ books, links });
  else next();
});

// //Creating a Post (POST)
// router.post('/', (req, res) => {
//   // Within the POST request route, we create a new
//   // user with the data given by the client.
//   // We should also do some more robust validation here,
//   // but this is just an example for now.
//   if (req.body.userId && req.body.title && req.body.content) {
//     const post = {
//       id: posts[posts.length - 1].id + 1,
//       userId: req.body.userId,
//       title: req.body.title,
//       content: req.body.content,
//     };

//     posts.push(post);
//     res.json(posts[posts.length - 1]);
//   } else next(error(400, 'Insufficient Data'));
// });

// router.patch('/:id', (req, res) => {
//   // Within the PATCH request route, we allow the client
//   // to make changes to an existing user in the database.
//   const post = posts.find((p, i) => {
//     if (p.id == req.params.id) {
//       // iterating through the user object and updating each property with the data that was sent by the client
//       for (const key in req.body) {
//         posts[i][key] = req.body[key];
//       }
//       return true;
//     }
//   });

//   if (post) res.json(post);
//   else next();
// });

// router.delete('/:id', (req, res) => {
//   // The DELETE request route simply removes a resource.
//   const post = posts.find((p, i) => {
//     if (p.id == req.params.id) {
//       posts.splice(i, 1);
//       return true;
//     }
//   });

//   if (post) res.json(post);
//   else next();
// });

module.exports = router;