var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    res.render("index", {});
  });
}
  app.get("/api/Users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new example
  app.post("/api/Users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  
