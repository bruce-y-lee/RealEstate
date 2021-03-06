const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcrypt');

const mongoose = require('mongoose');
const {googleClientID, googleClientSecret, instaClientID, instaClientSecret} = require('../config/keys');
const {facebookAppID, facebookAppSecret, jwtSecret} = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user,done) => {
    done(null, user.id); //user.id -> mongo _id  we use this internal ID
    console.log("serialzeUser user",user);
});

passport.deserializeUser((id, done) => { // id -> user.id
console.log("deserializer id", id);
    User.findById(id)
        .then((user) => {
            done(null, user);
        });

});

passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL:'/auth/google/callback',
    proxy: true
  },
    async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleId: profile.id})
        
            if(existingUser){
                //we already have a record of a profile id
                
                done(null,existingUser);
            }else {
                // we don't have a record, make a new record
                
                const user = await new User({ name: profile.displayName, googleId: profile.id, password: "googleId"}).save()
                
                done(null,user);
            }
        
    
    
  })
);
passport.use(new InstagramStrategy({
    clientID: instaClientID,
    clientSecret: instaClientSecret,
    callbackURL: '/auth/instagram/callback',
    proxy:true
  },
    async (accessToken, refreshToken, profile, done) => {
    const existingUser =  await User.findOne({ instagramId: profile.id })
    console.log(profile);
    if(existingUser){
        //we already have a record of a profile id
        done(null,existingUser);
    }else {
        // we don't have a record, make a new record
        const user = await new User({ name: profile.displayName, instagramId: profile.id, password: "instargram"}).save()
        
        done(null,user);
    }

  })
);

passport.use(new FacebookStrategy({
    clientID: facebookAppID,
    clientSecret: facebookAppSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
  },
    async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({facebookId: profile.id});
    

    if(existingUser){
        done(null, existingUser);
    }else {
        const user = await new User({ name:profile.displayName, facebookId : profile.id, password: "facebook"}).save()
        done(null, user);
    }
    
    
  })
);

const BCRYPT_SALT_ROUNDS = 10;

passport.use('register',
    new LocalStrategy({
        
        usernameField: 'email',
        passwordField: 'password',
        session: false,
        passReqToCallback: true
    },
    async (req, email, password, done) => {
        try{
            //find by user by email
            const existingUser =  await User.findOne({email: email});

            if(existingUser){
                console.log('email already exist!');
                return done(null, false, {message: 'exists'});
            }
            else {
                const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
                
                const user = await new User({name:req.body.name, email:email, password: hashedPassword}).save();
                
                return done(null, user);
            }
        } catch(err) {
            done(err);
        }
        
    }
    )    
);

passport.use(
    'login',
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },
    async (email, password, done) => {
        try {
            const existingUser = await User.findOne({email: email});

            if(!existingUser){
                return done(null, false, {message: 'email do not exist'});
            }
            else {
             const matchPassword = await bcrypt.compare(password, existingUser.password);
             //if password matches
             if(matchPassword){
                
                 return done(null, existingUser);
             }
             else{
                
                 return done(null, false, {message: 'password do not match'});

             }
            }
        }
        catch(err){
            done(err);
        }
    }

    )
);


var opts = {}

    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = jwtSecret;


passport.use(
    'jwt',
    new JWTStrategy(opts, 
        async (jwt_payload, done) => {
          try {
            //user's email is id
              const existingUser = await User.findOne({ email: jwt_payload.id });
              if(existingUser){
                
                  done(null, existingUser);
              }
              else{
                //   console.log('user not found in db');
                  done(null, false)
              }
          }
          catch(err){
              done(err);
          }  
        })
)

