const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cities = require("./routes/api/cities");
const itineraries = require("./routes/api/itineraries");
const activities = require("./routes/api/activities");

const app = express();

// Bodyparser Middleware

app.use(bodyParser.json());

//Con esta línea permito que la carpeta "uploads" sea visible para el frontend
app.use("*/uploads", express.static("uploads")); //Con el "*" permito que sea visible desde todas las views :wink:
// DB Config, we link the key.js with server.js

const db = require("./config/key").mongoURI;

//Connet to MongoDB with do this using mongoose, this is a promise-based

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo Connected..."))
  .catch(err => console.log(err));

// Use Routes: all request has to go into api/items file
// everything here will go to the
// const items on line 5 and it will be saved in that file

app.use("/api/cities", cities);
app.use("/api/itineraries", itineraries);
app.use("/api/activities", activities);

// we need to be able to run the server
//this is an environmental variable or port 5000
const port = process.env.PORT || 5000;

//for HEROKU DEPLOY: serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
