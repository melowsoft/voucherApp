const mongoose = require("mongoose");

//Cart schema
const CartSchema = mongoose.Schema({
  name: String,
  id: String,
  code: String,
  price: Number,
  quantity: Number
});

const Cart = (module.exports = mongoose.model("Cart", CartSchema));
