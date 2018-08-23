// Main starting point of the application
const express = require("express");
const http = require("http");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./routes/router");
const mongoose = require("mongoose");
const cors = require("cors");

// DB Setup
mongoose.connect(keys.mongoURI);

// App Setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets
  //like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  //Express will serve up the undex.html
  //if it doesn't recognise the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
