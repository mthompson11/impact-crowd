var express = require('express');
var router = express.Router();
const projectsCtrl = require('../controllers/projects')

router.get('/new', projectsCtrl.new);
router.get('/:id', projectsCtrl.show);
router.post('/', projectsCtrl.create);

module.exports = router