var db = require("../models");
var authController = require('../controllers/authcontroller.js');

var  ensureLoggedIn          = require("connect-ensure-login").ensureLoggedIn;
module.exports = function (app, passport) {
  // Create all our routes and set up logic within those routes where required.

  app.get('/trips',
  ensureLoggedIn('/signin'),
  function(req, res) {
    res.render('trips', { pageTitle: "Add a Trip" });
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
      pageTitle: "New Exciting Trips"
    };
    res.render("index", title);
  });


  // app.get("/trips", isLoggedIn, function (req, res) {
    
  //   var title = {
  //     pageTitle: "Add a Trip"
  //   };
  //   res.render("trips", title);
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

