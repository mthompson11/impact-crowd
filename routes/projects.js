var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects')
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, projectsCtrl.new);
router.get('/:id', projectsCtrl.show);
router.get('/:id/edit', isLoggedIn, projectsCtrl.edit);
router.post('/', isLoggedIn, projectsCtrl.create);
router.put('/:id', isLoggedIn, projectsCtrl.update);
router.delete('/:id', isLoggedIn, projectsCtrl.delete);

module.exports = router