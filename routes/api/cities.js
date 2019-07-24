// Set up the Express router, Router is part of the express object

const express = require("express");
const router = express.Router();

//Item Model, capital etter cause is a Model

const City = require("../../models/City");

// @route (using Express) GET api/City
// @desc  Get All City
// @access Public
router.get("/all", (req, res) => {
  City.find().then(cities => res.json(cities));
});

// @route  POST api/cities
// @desc  Create a Post
// @access Public
router.post("/all", (req, res) => {
  const newCity = new City({
    city: req.body.city,
    country: req.body.country
  });
  newCity.save().then(city => res.json(city));
});

// to test your API use Postman

// @route  DELETE api/cities/:id
// @desc  Delete a Post
// @access Public
router.delete("/all/:id", (req, res) => {
  City.findById(req.params.id)
    .then(city => city.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
//it is like to say in ES6 fashion "export default"
