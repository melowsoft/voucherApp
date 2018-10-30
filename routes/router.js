const Authentication = require("../controllers/authentication");
const passportService = require("../services/passport");
const passport = require("passport");

const requireSignin = passport.authenticate("local", { session: false });

//Require Voucher model
const Voucher = require("../models/vouchers");

//Require Cart model
const Cart = require("../models/cart");

module.exports = function(app) {
  //POST Signin Route
  app.post("/api/signin", requireSignin, Authentication.signin);
  //POST Signup Route
  app.post("/api/signup", Authentication.signup);

  //GET Vouchers Route
  app.get("/api/vouchers", (req, res) => {
    Voucher.find().then(vouchers => res.json(vouchers));
  });

  //DELETE Voucher Route
  app.delete("/api/voucher/:id", (req, res) => {
    Voucher.findById(req.params.id)
      .then(voucher => voucher.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
  });

  //GET Cart Route
  app.get("/api/cart", (req, res) => {
    Cart.find().then(carts => res.json(carts));
  });

  //POST Cart Route
  app.post("/api/cart", (req, res) => {
    const newCart = new Cart({
      name: req.body.name,
      id: req.body.id,
      code: req.body.code,
      price: req.body.price,
      quantity: req.body.quantity
    });

    newCart.save().then(cart => res.json(cart));
  });
};
