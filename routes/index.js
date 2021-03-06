var express = require('express');
var router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');
const isLoggedIn = require('../config/auth');

router.get('/', indexCtrl.index);

router.get('/dashboard', isLoggedIn, indexCtrl.dashboard);

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/oauth2callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/'
}))

router.get('/logout', function(req,res){
  req.logout();
  res.redirect('/');
})

module.exports = router;
