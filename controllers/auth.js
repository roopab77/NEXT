var authController = require('./authcontroller.js');


module.exports = function (app, passport) {
  app.get('/signup', authController.signup);
  app.get('/signin', authController.signin);
  app.post('/signup', passport.authenticate('local-signup', {
    successReturnToOrRedirect: '/dashboard',
    failureRedirect: '/signup'
  }));
  app.get('/dashboard', isLoggedIn, authController.dashboard);
  app.post('/signin', passport.authenticate('local-signin', {
    successReturnToOrRedirect: '/dashboard',
    failureRedirect: '/signin'
  }));
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  }
}


