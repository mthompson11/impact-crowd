const Project = require('../models/project')
const Wallet = require('../models/wallet')

function index(req, res){
    Project.find({}, function(err, projects){
        res.render('index', {title: 'Explore', projects})
    });
}

 async function dashboard(req,res){
     const projects = await Project.find({projectOwner : req.user._id});
     const wallet = await Wallet.find({owner : req.user._id});
     const pledgedProjects = await Project.find({ pledges : {$elemMatch : {pledger : req.user._id}}});
     const myPledges = [];
     pledgedProjects.forEach(function(project){
        totalPledge = project.pledges.reduce(function(acc, cur){
            console.log(acc);
            if(cur.pledger.equals(req.user._id)){
                return acc + cur.pledgeAmount;
            }else{
                return acc
            }
        },0)
        myPledges.push({id:project._id, name: project.projectName, totalPledge});
    })
    res.render('dashboard', {title: 'Dashboard', projects, myPledges, wallet});
}

module.exports = {
    index,
    dashboard
}