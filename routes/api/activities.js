// Set up the Express router, Router is part of the express object

const express = require("express");
const router = express.Router();

//Item Model, capital letter because is a Model

const Activity = require("../../models/Activity");

// @route (using Express) GET api/City
// @desc  Get All City
// @access Public
// router.get("/all", (req, res) => {
//   Itinerary.find().then(itineraries => res.json(itineraries));
// });

router.get("/:itineraryId", (req, res) => {
  Activity.find({ itineraryId: req.params.itineraryId }, (err, data) => {
    if (err) res.send(err);
    console.log(req.params.itineraryId);

    res.send(data);
  });
});

// @route  POST api/cities
// @desc  Create a Post
// @access Public

// api/activities/all
router.post("/all", (req, res) => {
  const newActivity = new Activity({
    title: req.body.title,
    address: req.body.address,
    photo: req.body.photo,
    time: req.body.time,
    cost: req.body.cost,
    comment: req.body.comment,
    itineraryId: req.body.itineraryId,
    itineraryName: req.body.itineraryName
  });
  newActivity.save().then(activity => res.json(activity));
});

// to test your API use Postman

// @route  DELETE api/cities/:id
// @desc  Delete a Post
// @access Public
router.delete("/all/:id", (req, res) => {
  Activity.findById(req.params.id)
    .then(activity => activity.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
//it is like to say in ES6 fashion "export default"
