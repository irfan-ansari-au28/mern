const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
// const config = require("./config/database");
// const passport = require("passport");
// const users = require("./routes/users");
const port = process.env.PORT || 8080;

// //connect to database
// mongoose.connect(config.database);

// //on connection
// mongoose.connection.on("connected", () => {
//   console.log("connected to database " + config.database);
// });

// //on error
// mongoose.connection.on("error", (err) => {
//   console.log("database error " + err);
// });

//cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//body parser middleware
app.use(bodyParser.json());

// //passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// require("./config/passport")(passport);

// app.use("/users", users);

//index route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//start server
app.listen(port, () => {
  console.log("server started on port " + port);
});
