const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
