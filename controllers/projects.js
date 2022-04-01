const Project = require('../models/project');
const Wallet = require('../models/wallet');

function newProject(req,res){
    res.render('projects/new', {title: 'New Project'});
};

function create(req,res){
    req.body.projectOwner = req.user._id;
    Project.create(req.body);
    res.redirect('/dashboard');
};

function show(req, res){
    Project.findById(req.params.id, function(err, project){
        res.render('projects/show', {title : 'Project Detail', project});
    });
};

function edit(req,res){
    Project.findById(req.params.id, function(err, project){
        if(project.projectOwner.equals(req.user._id)){
            res.render('projects/edit', {title: 'Edit Project', project})
        }else{
            res.redirect('/');
        };
    });
};

function update(req,res){
    Project.findById(req.params.id, function(err, project){
        project.projectName = req.body.projectName;
        project.img = req.body.img;
        project.description = req.body.description;
        project.save(function(err){
            res.redirect('/dashboard');
        });
    });
};

function deleteProject(req,res){
    Project.findById(req.params.id, function(err, project){
        project.pledges.forEach(function(pledge){
            Wallet.findOne({owner : pledge.pledger}, function(err, wallet){
                wallet.amount += pledge.pledgeAmount
                wallet.save()
            });
        });
        project.remove(function(err){
            res.redirect('/dashboard') 
        });
    });
};

module.exports = {
    show,
    create,
    new: newProject,
    edit, 
    update,
    delete: deleteProject
};