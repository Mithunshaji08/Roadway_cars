const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  carName: {
    type: String,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['online', 'onShop'],
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'paid'], // Assuming two possible statuses: 'pending' and 'paid'
    default: 'paid', // Default status is 'pending'
  },
  // Add more fields as needed

  
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
