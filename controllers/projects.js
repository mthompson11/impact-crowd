const Project = require('../models/project')

function newProject(req,res){
    res.render('projects/new');
};

function create(req,res){
    req.body.projectOwner = req.user._id;
    Project.create(req.body);
    res.redirect('/dashboard');
};

function show(req, res){
    Project.findById(req.params.id, function(err, project){
        res.render('projects/show', {title : 'Project Detail', project})
    })
}


module.exports = {
    show,
    create,
    new: newProject
};