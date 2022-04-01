const Project = require('../models/project');
const Wallet = require('../models/wallet');

function newPledge(req,res){
    Wallet.findOne({owner:req.user._id}, function(err, wallet){
        res.render('pledges/new', {title: 'New Pledge', projectId : req.params.id, wallet});
    })
}

async function create(req, res){
    const wallet = await Wallet.findOne({owner: req.user._id});
    wallet.amount -= Number(req.body.pledgeAmount);
    wallet.save();
    const project = await Project.findById(req.params.id);
    req.body.pledger = req.user._id;
    project.pledges.push(req.body);
    project.save();
    res.redirect(`/projects/${project._id}`);
};

module.exports = {
    new : newPledge,
    create
};