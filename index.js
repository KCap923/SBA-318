const express = require ("express");
const { title } = require("process");
const app = express ();
const PORT = 4000; 
const morgan = require("morgan");
const Member = require("./models/members");



// Template Engine ****************************************************************************************************
app.set("view engine", "ejs");


// Middleware *********************************************************************************************************
app.use((req, res, next) => {
console.log("new request made:");
console.log("host: ", req.hostname);
console.log("path: ", req.path);
console.log("method: ", req.method);
  next();
});

// Second Middleware ****************************************************************************************************
app.use(morgan("dev"));
// Console logs ----->
// Server is running on port: 4000
// new request made:
// host:  localhost
// path:  /
// method:  GET
// Hello
// GET / 304 9.577 ms - -
// new request made:
// host:  localhost
// path:  /books
// method:  GET
// Books
// GET /books 304 1.800 ms - -


// Get Request ************************************************************************************************************
app.get("/", (req, res) => {
  console.log("Hello")
  res.render("index");
});



// app.get("/books", (req, res) => {
//   console.log("Books")
//   res.render("books");
// });

// app.get("/members", (req, res) => {
//   console.log("Members")
//   res.render("members");
// });

// app.get("/rentals", (req, res) => {
//   console.log("Rentals")
//   res.render("rentals");
// });



app.get("/chars/new", (req, res) => {
  res.sendFile("/member/newChar.ejs", {
    root:__dirname,
  });
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







//404 Page
app.use((req, res) => {
  res.status(404).render("404", {title: "404"});
});


const usersRouter = require("./routes/members")

app.use("/members", usersRouter)
app.use("/books", usersRouter);
app.use("/members", usersRouter);
app.use("/rentals", usersRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})