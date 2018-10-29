var db = require("../models");
var authController = require('../controllers/authcontroller.js');

var  ensureLoggedIn          = require("connect-ensure-login").ensureLoggedIn;
module.exports = function (app, passport) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function (req, res) {
    var title = {
      pageTitle: "New Exciting Trips"
    };
    res.render("index", title);
  });

  app.post("/trips", function (req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Post.create(req.body).then(function (trips) {
      res.json(trips);
      console.log(trips);
    }).catch(function (err) {
      res.json(err);
      console.log(err);
    });
  });


  app.get("/", function (req, res) {
    var title = {
      pageTitle: "Sign UP"
    };
    res.render("signup", title);
  });



  app.get("/trips", function (req, res) {
    var title = {
      pageTitle: "Add a Trip"
    };
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

  
  app.get("/loggedIn", function (req, res) {
    res.send(req.user);
  });
 

  app.get('/dashboard', isLoggedIn, function (req, res) {
    var username = "";
    username = req.user.firstname + " " + req.user.lastname;
    res.render('dashboard', {
      pageTitle: "DASH BOARD",
      username: username
    });
  });
}

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/signin');
}



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
    console.log(req.user);
    req.body.UserId = 1;
    // req.user.id => req.body.UserId = req.user.id
    console.log(req.body);
    db.Trips.create(req.body)
      .then(function (dbTrips) {
        console.log(dbTrips)
        res.json(dbTrips);
      });
  });
}
