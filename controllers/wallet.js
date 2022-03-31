const Wallet = require('../models/wallet');

function update(req,res){
    Wallet.findOne({owner : req.params.id}, function(err, wallet){
        wallet.amount += Number(req.body.amount)
        wallet.save(function(err){
            res.redirect('/dashboard');
        })
    })
};

module.exports = {
    update
}
