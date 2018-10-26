var db = require("../models");

module.exports = function (app) {
  // Create all our routes and set up logic within those routes where required.
  app.get("/", function (req, res) {
    var title = {
      pageTitle : "New Exciting Trips"};
    res.render("index", title);
  });

  // app.get("/signin", function (req, res) {
  //   res.render("signin", {});
  // });

  // app.post("/signup", function (req, res) {
  //   var title = {
  //     pageTitle : "Sign UP"};
  //   res.render("signup", title);
  // });

  app.post("/add", function (req, res) {
    res.render("add", {});
  });

 

}
