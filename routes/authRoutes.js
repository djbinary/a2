const passport = require('passport');
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  // Register user
  app.get('/auth/google/callback', passport.authenticate('google'))
};
