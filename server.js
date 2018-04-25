//Vincent DeStefano


//install the necessary packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================
//build the server
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ============================================================

//declare the public folder for assets
app.use(express.static('./frontEnd'));

//display the html for the root page!
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//contained routing structure for clean code
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function(){
  console.log("App listening on Port: " + PORT);
})

