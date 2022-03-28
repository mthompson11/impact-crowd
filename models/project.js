const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pledgeSchema = new Schema({
    pledger: {type: Schema.Types.ObjectId, ref: 'User'},
    pledgeAmount: {type: Number, required: true}
}, {
    timestamps: true
});

const projectSchema = new Schema({
    projectOwner: {type: Schema.Types.ObjectId, ref: 'User'},
    projectName: {type: String, required: true},
    img: {type: String},
    description: {type: String},
    target: {type: Number, required: true},
    pledges: [pledgeSchema]
},{
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);