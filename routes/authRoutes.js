const passport = require('passport');





module.exports = app => {
    // google authentication
    app.get('/auth/google', passport.authenticate('google',{
        scope:['profile','email'] 
     })
    );
    //google auth call back
    app.get('/auth/google/callback',passport.authenticate('google'),(req,res)=>{
        
        res.redirect('/');
    });

    //instagram authentication
    app.get('/auth/instagram', passport.authenticate('instagram'));
    //instagram authentication callback
    app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), (req, res) => {
        // Successful authentication, redirect home.
        
        res.redirect('/');
    });
    //facebook authentication
    app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/',
                                                                           failureRedirect: '/login' }));
    
    app.get('/api/logout',(req,res)=>{
        
        req.logout();
        
        res.redirect('/');
    }); 
    //current user info
    app.get('/api/current_user', (req, res) => {
        
        res.send(req.user);
        

    });
    

    
}

 

 