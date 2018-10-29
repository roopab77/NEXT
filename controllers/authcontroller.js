var exports = module.exports = {}


exports.signup = function (req, res) {
  var title = {
    pageTitle: "Sign UP"
  };
  res.render("signup", title);
 }

exports.signin = function (req, res) {
  var title = {
    pageTitle: "Sign IN"
  };
  console.log("return Url" + req.session.returnTo);
  res.render("signin", title);
}


exports.dashboard = function (req, res) {
  var title = {
    pageTitle: "Dash Board"
  };
  res.render('dashboard',title);
}

exports.logout = function(req, res) {
 
  req.session.destroy(function(err) {

      res.redirect('/');

  });

}


