var db = require("../models");



module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function (req, res) {
    var title = {
      pageTitle: "New Exciting Trips"
    };
    res.render("index", title);
  });

  app.get("/signin", function (req, res) {
    res.render("signin", {});
  });

  app.post("/signup", function (req, res) {
    var title = {
      pageTitle: "Sign UP"
    };
    res.render("signup", title);
  });

  app.post("/add", function (req, res) {
    res.render("add", {});
  });


  app.get("/trips", function (req, res) {
    var title = {
      pageTitle: "Add a Trip"
    };
    res.render("trips", title);

  })

  app.get("/destinations", function (req, res) {
    var title = {
      pageTitle: "Add destinations for your trip"
    };
    res.render("destinations", title);

  })

  app.get("/api/newtrips", function(req, res) {
    console.log(res.body);
    var newTrip = {
      tripName: $("#tripName").val().trim(),
      // devoured: false
      tripStartDate: $("#tripStartDate"),
      tripEndDate: $("#tripEndDate")
    }
      db.Trips.create(newTrip)
      .then(function (dbTrips) {
        console.log(dbTrips)
        res.json(dbTrips);
      });
  });


  app.get("/api/trips", function (req, res) {
    console.log("I made it to app.get2")
    db.Trips.findAll()
      .then(function (dbTrips) {
        console.log(dbTrips)
        res.json(dbTrips);
      }); 
  });

  app.post("/api/trips", function (req, res) {
    console.log("I made it to app.post")
    db.Trips.create(req.body)
      .then(function (dbTrips) {
        console.log(dbTrips)
        res.json(dbTrips);
      });
  });
}