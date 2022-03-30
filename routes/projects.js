var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects')
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, projectsCtrl.new);
router.get('/:id', projectsCtrl.show);
router.get('/:id/edit', projectsCtrl.edit);
router.post('/', isLoggedIn, projectsCtrl.create);
router.put('/:id', projectsCtrl.update);
router.delete('/:id', projectsCtrl.delete);

module.exports = router