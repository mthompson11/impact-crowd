const express = require('express');
const router = express.Router();
const walletCtrl = require('../controllers/wallet');
const isLoggedIn = require('../config/auth');

router.put('/:id', isLoggedIn, walletCtrl.update);

module.exports = router;