const express = require('express');
const router = express.Router();
const pledgesCtrl = require('../controllers/pledges');
const isLoggedIn = require('../config/auth');

router.get('/projects/:id/pledges/new', isLoggedIn, pledgesCtrl.new);
router.post('/projects/:id/pledges', isLoggedIn, pledgesCtrl.create);

module.exports = router;