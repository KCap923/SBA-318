const express = require ("express");
const app = express ();
const PORT = 4000; 

// const usersRouter = require('./routes/books.js');
// const postsRouter = require('./routes/members.js');
// const usersRouter = require('./routes/rentals.js');
// const error = require('./utilities/error.js');


// Template Engine
app.set("view engine", "ejs");




app.get("/", (req, res) => {
  console.log("Hello")
  res.render("index");
});



// app.get("/members", function(req, res) {
//   res.sendFile(__dirname + "/members.html");
// });

// app.get("/rentals", function(req, res) {
//   res.sendFile(__dirname + "/rentals.html");
// });

// app.get("/member/:member", function(req, res) {
//   res.send("member" + {person: req.params.member} );
// });













// app.use("/books", usersRouter);
// app.use("/members", usersRouter);
// app.use("/rentals", usersRouter);



app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})