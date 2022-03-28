const Project = require('../models/project')

function index(req, res){
    Project.find({}, function(err, projects){
        res.render('index', {title: 'Explore', projects})
    });
}

function dashboard(req,res){
    res.render('dashboard', {title: 'Dashboard'})
}

module.exports = {
    index,
    dashboard
}