
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Property = mongoose.model('properties');


module.exports = app => {
    app.get('/api/myList', requireLogin, async (req, res) => {
        console.log(req.user)
        const myList = await Property.find({_user: req.user.id})
            .select({_user:false});// not include user field

        res.send(myList);
    });
}
