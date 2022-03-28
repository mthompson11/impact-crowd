const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    amount: {type: Number, default: 0}
}, {
    timestamps: true
});

module.exports = mongoose.model('Wallet', walletSchema);