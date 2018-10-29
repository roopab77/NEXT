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

  //This route is to  trops in the database.
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
    var title = {
      pageTitle : "My Profile"};
    res.render("my-profile", title);
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






