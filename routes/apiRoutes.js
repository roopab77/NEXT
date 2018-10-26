var db = require("../models");

<<<<<<< HEAD
module.exports = function (app) {
=======
module.exports = function(app) {
  // Get all examples
>>>>>>> 195d6ca186d172a41c1caa1126db077f71d29c88
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function (req, res) {
    res.render("index", {});
  });
<<<<<<< HEAD

  app.get("/signin", function (req, res) {
    res.render("signin", {});
  });

  app.post("/signup", function (req, res) {
    res.render("signout", {});
  });

  app.post("/add", function (req, res) {
    res.render("add", {});
  });

  app.get("/review",function(req,res){
    res.render("review",{});
  });

  app.post("/review",function(req,res){
    res.render("review",{});
  });
}
=======
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

  
>>>>>>> 195d6ca186d172a41c1caa1126db077f71d29c88
