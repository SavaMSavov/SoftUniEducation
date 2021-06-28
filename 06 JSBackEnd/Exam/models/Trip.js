const { Schema, model } = require("mongoose");

const schema = new Schema({
  startPoint: {
    type: String,
    required: [true, "StartPoint is required"],
    minLength: [4, "Have to be more than 4 letters"],
  },
  endPoint: {
    type: String,
    required: [true, "EndPoint is required"],
    minLength: [4, "Have to be more than 4 letters"],
  },
  date: { type: String, required: [true, "Choose date"] },
  time: { type: String, required: [true, "Choose time"] },
  carImageUrl: { type: String, required: [true, "Have to link your car"] },
  carBrand: {
    type: String,
    required: [true, "CarBrand is required"],
    minLength: [4, "Have to be more than 4 letters"],
  },
  seats: {
    type: Number,
    required: [true, "Number of seats is required"],
    min: [1, "Seats have to be between 1-4"],
    max: [4, "Seats have to be between 1-4"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [1, "Price have to be between 1-50"],
    max: [50, "Price have to be between 1-50"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [10, "Description have to be more than 10 letters"],
  },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  buddies: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
});

module.exports = model("Trip", schema);
