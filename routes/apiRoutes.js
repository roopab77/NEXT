var db = require("../models");

module.exports = function(app){
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function(req, res) {
    res.render("index", {});
  });

  app.get("/signin", function(req,res){
    res.render("signin",{});
  });

  app.post("/signup",function(req,res){
    res.render("signout",{});
  });




}