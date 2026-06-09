const mongoose = require("mongoose");

const exchangeRequestSchema = new mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  requestedBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
offeredBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  }
});

module.exports = mongoose.model(
  "ExchangeRequest",
  exchangeRequestSchema
);