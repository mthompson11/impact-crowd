
require('dotenv').config();
require('./config/database');

const Project = require('./models/project');
const User = require('./models/user');

const data = require('./data');

const p1 = Project.deleteMany({});

Promise.all([p1])
.then(function(results) {
  return User.find({email:"mike.joseph.thompson@gmail.com"})})
.then(function(user){
    data.projects.forEach(function(project){
        project.projectOwner = user[0]._id;
        console.log(project)
    })
    return data.projects;
})
.then(function(projects){
    return Project.create(data.projects);
})
.then(process.exit);