

var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/questions", function(req, res) {
    res.sendFile(path.join(__dirname, "../FrontEnd/questions.html"));
  });

  app.get("/friendList", function(req, res) {
    res.sendFile(path.join(__dirname, "../frontEnd/friendList.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
};