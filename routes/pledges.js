const express = require('express');
const router = express.Router();
const pledgesCtrl = require('../controllers/pledges');

router.get('/projects/:id/pledges/new', pledgesCtrl.new);
router.post('/projects/:id/pledges', pledgesCtrl.create);

module.exports = router;