var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects')
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, projectsCtrl.new);
router.get('/:id', projectsCtrl.show);
router.post('/', isLoggedIn, projectsCtrl.create);

module.exports = router