const Project = require('../models/project')
const Wallet = require('../models/wallet')

function index(req, res){
    Project.find({}, function(err, projects){
        res.render('index', {title: 'Explore', projects})
    });
}

function dashboard(req,res){
    Project.find({projectOwner : req.user._id}, function(err,projects){
        Wallet.find({owner : req.user._id}, function(err, wallet){
            Project.find({ pledges : {$elemMatch : {pledger : req.user._id}}}, function(err, pledgedProjects){
                myPledges = [];
                pledgedProjects.forEach(function(project){
                    totalPledge = project.pledges.reduce(function(acc, cur){
                        if(cur.pledger.toString() === req.user._id.toString()){
                            return acc + cur.pledgeAmount;
                        }
                    },0)
                    myPledges.push({id:project._id, name: project.projectName, totalPledge})
                })
                res.render('dashboard', {title: 'Dashboard', projects, myPledges, wallet});
            })
        })
    })
}

module.exports = {
    index,
    dashboard
}