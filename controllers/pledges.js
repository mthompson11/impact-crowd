const Project = require('../models/project');
const Wallet = require('../models/wallet')

function newPledge(req,res){
    Wallet.findOne({owner:req.user._id}, function(err, wallet){
        res.render('pledges/new', {title: 'New Pledge', projectId : req.params.id, wallet});
    })
}

function create(req, res){
    Wallet.findOne({owner: req.user._id}, function(err, wallet){
        wallet.amount -= Number(req.body.pledgeAmount)
        wallet.save(function(err){
            Project.findById(req.params.id, function(err, project){
                req.body.pledger = req.user_id
                project.pledges.push(req.body)
                project.save(function(err){
                    res.redirect(`/projects/${project._id}`)
                })
            })
        })
    })
};

module.exports = {
    new : newPledge,
    create
}