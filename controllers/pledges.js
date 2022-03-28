const Project = require('../models/project');

function newPledge(req,res){
    res.render('pledges/new', {title: 'New Pledge', projectId : req.params.id});
}

function create(req, res){
    Project.findById(req.params.id, function(err, project){
        req.body.pledger = req.user._id
        project.pledges.push(req.body)
        project.save(function(err){
            res.redirect(`/projects/${project._id}`)
        })
    })
};

module.exports = {
    new : newPledge,
    create
}