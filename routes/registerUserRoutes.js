const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/keys');

const User = mongoose.model('users');



module.exports = app => {
    //register user with jwt
    app.post('/jwt/registerUser',(req, res, next)=>{

        passport.authenticate('register', async (err, user, info) => {

            if(err){
                console.log(err);
            }
            if(info){
                console.log(info.message);
                res.send(info.message);
            }
            else{
                req.logIn(user, err =>{
                    res.redirect('/');
                })
                


            }
        })(req, res, next);
    });

    app.get('/jwt/loginUser', (req, res, next) => {
        passport.authenticate('login', async (err, user, info) => {
            if (err){
                console.log(err);
            }
            if(info){
                console.log(info.message);
                res.send(info.message);
            }
            else{
                req.logIn(user, err => {
                    const foundUser = User.findOne({email:req.body.email});
                    const token = jwt.sign({id: foundUser.email}, jwtSecret);

                    res.redirect('/');
                    
                })
            }
        })(req, res, next);
    })    

}