// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var expresshandlebars = require("express-handlebars");
var moment = require("moment");
var path = require("path");
var db = require("./models");
// =============================================================

// Set up the Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing (for POST requests)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Path for static content
app.use(express.static(path.join(__dirname, "public")));

// Override for POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride("_method"));

// Declare Handlebars path for layout
app.engine("handlebars", expresshandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// =============================================================
// Starts the server listening
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Life organization happening on PORT " + PORT + "!");
  });
});