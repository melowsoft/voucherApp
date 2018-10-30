const mongoose = require("mongoose");

//Voucher schema
const VoucherSchema = mongoose.Schema({
  name: String,
  id: String,
  code: String,
  price: Number,
  quantity: Number
});

const Voucher = (module.exports = mongoose.model("Voucher", VoucherSchema));
