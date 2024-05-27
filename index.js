const express = require ("express");
const app = express ();
const PORT = 4000; 

const usersRouter = require('./routes/books.js');
const postsRouter = require('./routes/members.js');
const usersRouter = require('./routes/rentals.js');
const error = require('./utilities/error.js');

app.use("/books", usersRouter);
app.use("/members", usersRouter);
app.use("/rentals", usersRouter);







app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})