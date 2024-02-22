// Car model
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  carAmount: {
    type: String, // You may want to change this to a numeric type if storing an amount
    required: true,
  },
  carImage: {
    type: String, // Store the image file path or URL
    required: true,
  },
  isLink: {
    type: Boolean, // Flag to indicate whether carImage is a link or a file path
    default: false,
  },
  lenderName: {
    type: String, // Store the lender's name
    required: true,
  },
});

const Car = mongoose.model('Cars', carSchema);

module.exports = Car;
