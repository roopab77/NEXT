var exports = module.exports = {}


exports.signup = function (req, res) {
  var title = {
    pageTitle : "Sign UP"};
  res.render("signup", title);
  //res.render('signup',);

}

exports.signin = function (req, res) {
  var title = {
    pageTitle : "Sign IN"};
  res.render("signin", title);
  

}


exports.dashboard = function (req, res) {

  res.render('dashboard');

}