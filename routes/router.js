const Authentication = require("../controllers/authentication");
const passportService = require("../services/passport");
const passport = require("passport");

const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.send({ message: "Welome" });
  });
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
};
