const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hashtag: {
    type: Array,
    required: true
  },
  cityId: {
    type: String,
    required: true
  }
});

module.exports = Itinerary = mongoose.model("itinerary", ItinerarySchema);
