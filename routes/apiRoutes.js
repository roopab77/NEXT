var db = require("../models");

module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function (req, res) {
    var title = {
      pageTitle : "New Exciting Trips"};
    res.render("index", title);
  });

  app.get("/signin", function (req, res) {
    res.render("signin", {});
  });

  app.post("/signup", function (req, res) {
    var title = {
      pageTitle : "Sign UP"};
    res.render("signup", title);
  });

  app.post("/add", function (req, res) {
    res.render("add", {});
  });

  app.get("/add-trips", function (req, res) {
    var title = {
      pageTitle : "Add a Trip"};
    res.render("trips", title);
  });

  app.get("/my-profile", function (req, res) {
    var title = {
      pageTitle : "My Profile"};
    res.render("my-profile", title);
  });
  // app.post("/api/newtrip", function(req, res) {
  //   db.Trips.create(req.body)
  //   .then(function(dbTrips) {
  //     console.log(dbTrips)
  //     res.json(dbTrips);
  //   });
  // });
}




  
  

  