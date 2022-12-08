const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
// require("dotenv").config();

const userModel = require("./models/User");

const port = process.env.PORT || 8080;

/* mangoose connection in express server */

app.use(async (req, res, next) => {
  try {
    mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://adminUser:admin@cluster0.qbie7i4.mongodb.net/mern?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.on("connected", () => {
      console.log("Mongoose is connected!!!!");
    });

    db.on("error", (err) => {
      console.log(err, " mongoose failed to connect");
    });
    db.once("open", function () {
      console.log("Connected successfully");
    });

    next();
  } catch (error) {
    console.log("Error occurred :", error);
    process.exit(1);
  }
});

// cors middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//body parser middleware
app.use(bodyParser.json());

//index route
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});
// app.post("/add_user", async (request, response) => {
//   const user = new userModel(request.body);

//   try {
//     await user.save();
//     console.log("User added ");
//     response.send(user);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public/index.html"));
});

//start server
app.listen(port, () => {
  console.log("------------------------------");
  console.log("server started on port " + port);
  console.log("------------------------------");
});
