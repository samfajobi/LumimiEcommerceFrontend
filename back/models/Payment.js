const mongoose = require("mongoose");


const PaymentSchema = new mongoose.Schema({
    paymentType: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    package: {
      type: Number,
      default: 0,
    },
    amountPaid: {
      type: Number,
      default: 0,
    },
    company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  
  });