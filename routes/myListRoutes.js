
const _ = require('lodash') ;
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Property = mongoose.model('properties');
const User = mongoose.model('users');
const {ObjectId} = mongoose.Types;


module.exports = app => {
    //mylist route
    app.get('/api/mylist/:userId', requireLogin, async (req, res) => {
        // console.log("api my list user id: ", req.params.userId);
        // console.log(req.user)
        const myList = await Property.find({_user: req.params.userId})
            .select({_user:false});// not include user field

        res.send(myList);
    });
    //mylist detail route
    app.get('/api/mylistproperty/:propertyId', requireLogin, async (req, res) => {
        // console.log("api my list user id: ", req.params.propertyId);
        // console.log(req.user)
        const myProperty = await Property.findById(req.params.propertyId)
            .select({_user:false});// not include user field

        res.send(myProperty);
    });
    //add mylist
    app.post('/api/mylist', requireLogin, async(req, res)=>{
        // console.log(req.body.propertyId, req.body.userId);
        let result;
        let result2;
        const {myList} = await User.findById(req.body.userId);
        
                //if item is already in my list
            if(myList.some(e => e == req.body.propertyId)){
                console.log("item exists in mylist");
                res.send("property already in the list");
            }
            else { //add property to my list and add user to the property
                try{
                    result = await User.findByIdAndUpdate(req.body.userId, {$push:{myList:req.body.propertyId}} );
                    result2 = await Property.findByIdAndUpdate(req.body.propertyId, {$push:{_user:req.body.userId}} );
                }
                catch(e){
                    res.send(e);
                }
            }

        
        res.send(result2);
    })
    //delete property from mylist
    app.patch('/api/mylist', requireLogin, async (req, res) => {
        console.log("api my list delete user id: ", req.body.userId);
        // console.log(req.data.userId)
        let result={};

        
        try{//delete property's id from user's info
            result.user = await User.findByIdAndUpdate(req.body.userId, {$pull:{myList:req.body.propertyId}} );
            //delete user's id from property's info
            result.property = await Property.findByIdAndUpdate(req.body.propertyId, {$pull:{_user:req.body.userId}} );
        }
        catch(e){
            res.send(e);
        }


        res.send(result);
    });
}
