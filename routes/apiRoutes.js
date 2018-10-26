var db = require("../models");

module.exports = function(app){
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    res.render("index", {});
  });
}