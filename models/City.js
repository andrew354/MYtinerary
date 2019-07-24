const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  cityPic: {
    type: String,
    required: true
  }
});

module.exports = City = mongoose.model("cities", CitySchema);
