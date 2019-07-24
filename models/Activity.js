const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  time: {
    type: Number,
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  itineraryId: {
    type: String,
    required: true
  }
});

module.exports = Activity = mongoose.model("activity", ActivitySchema);
