// Set up the Express router, Router is part of the express object

const express = require("express");
const router = express.Router();

//Item Model, capital letter because is a Model

const Itinerary = require("../../models/Itinerary");

// @route (using Express) GET api/City
// @desc  Get All City
// @access Public
// router.get("/all", (req, res) => {
//   Itinerary.find().then(itineraries => res.json(itineraries));
// });

router.get("/:cityId", (req, res) => {
  Itinerary.find({ cityId: req.params.cityId }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

// @route  POST api/cities
// @desc  Create a Post
// @access Public

// api/itinerary/all
router.post("/all", (req, res) => {
  const newItinerary = new Itinerary({
    title: req.body.title,
    profilePic: req.body.profilePic,
    rating: req.body.rating,
    duration: req.body.duration,
    price: req.body.price,
    hashtag: req.body.hashtag,
    cityId: req.body.cityId
  });
  newItinerary.save().then(itinerary => res.json(itinerary));
});

// to test your API use Postman

// @route  DELETE api/cities/:id
// @desc  Delete a Post
// @access Public
router.delete("/all/:id", (req, res) => {
  Itinerary.findById(req.params.id)
    .then(itinerary =>
      itinerary.remove().then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
//it is like to say in ES6 fashion "export default"
