const Authentication = require("../controllers/authentication");
const passportService = require("../services/passport");
const passport = require("passport");

const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.post("/api/signin", requireSignin, Authentication.signin);
  app.post("/api/signup", Authentication.signup);
};
