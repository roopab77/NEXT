var exports = module.exports = {}
var express = require("express");
var router = express.Router();
var trips = require("../models/trips.js");

exports.addTrip = function (req, res) {
  var title = {
    pageTitle : "Add a Trip"};
  res.render("trips", title);
}


// Create all our trip routes and set up logic within those routes where required.
router.get("/trips", function(req, res) {
  trips.all(function(data) {
    var hbsObject = {
      trips: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/trips", function(req, res) {
  console.log(req.body)
  trips.create(["tripName", "tripStartDate", "tripEndDate"], [req.body.tripName, req.body.tripStartDate, req.body.tripEndDate], function(result) {
    // Send back the ID of the new quote
    res.json(result);
  });
});



// Export routes for server.js to use.
module.exports = router;
