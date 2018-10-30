var db = require("../models");
var authController = require('../controllers/authcontroller.js');



var  ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;
module.exports = function (app, passport) {
  // Create all our routes and set up logic within those routes where required.

  //This route is to render the add trips page. Will work only if logged in
  app.get('/trips',
  ensureLoggedIn('/signin'),
  function(req, res) {
    res.render('trips', { pageTitle: "Add a Trip" });
  });

  app.get("/destinations", function (req, res) {
    var title = {
      pageTitle : "Add Destinations"};
    res.render("destinations", title);
  });

  app.get("/reviews", function (req, res) {
    var title = {
      pageTitle : "Add Reviews"};
    res.render("reviews", title);
  });

  //This route would create new trips 
  app.post("/api/trips", function (req, res) {
    console.log("I made it to app.post")
    console.log(req.user);
    req.body.UserId = req.user.id;
    // req.user.id => req.body.UserId = req.user.id
    console.log(req.body);
    db.Trips.create(req.body)
      .then(function (dbTrips) {
        //console.log(dbTrips)
        res.json(dbTrips);
      });
  });

  //This route would create new reviews 
  app.post("/api/review", function (req, res) {
    console.log("I made it to app.post for reviews")
    // console.log(req.user);
    // req.body.UserId = req.user.id;
    req.body.DestinationId = 3
    // req.user.id => req.body.UserId = req.user.id
    console.log(req.body);
    db.Reviews.create(req.body)
      .then(function (dbReviews) {
        //console.log(dbTrips)
        res.json(dbReviews);
      });
  });

  //This is the root route 
  app.get("/", function (req, res) {
    var title = {
      pageTitle: "New Exciting Trips"
    };
    res.render("index", title);
  });

//This route would pull the countries from the database
app.get("/destinations/countries", function(req, res) {
   db.countries.findAll({}).then(function(dbCountries) {
    res.json(dbCountries);
         
    });
    
  });
  
 
  app.get("/add-trips", function (req, res) {
    var title = {
      pageTitle : "Add a Trip"};
    res.render("trips", title);
  });

  //This is the my profile route which will work only when signed in 
  app.get("/my-profile",ensureLoggedIn('/signin'), function (req, res) {
    var render_obj = {pageTitle: "My Profile"};
    db.Trips.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function(dbTrips) {
      // res.json(dbTrips);
      render_obj.trips = dbTrips;
      res.render("my-profile", render_obj);
    });    
  });
 
  //This route is just to get the user name to be displayed when logged in
  app.get("/loggedIn", function (req, res) {
    res.send(req.user);
  });
 
//This is just a placeholder route when signed up or signed in will go here 
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






