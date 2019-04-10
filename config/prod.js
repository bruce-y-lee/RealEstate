//production keys here
module.exports = {
    googleClientID : process.env.GOOGLE_CLIENT_ID,
   
    googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
    instaClientID: process.env.INSTAGRAM_CLIENT_ID,
    instaClientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    facebookAppID: process.env.FACEBOOK_APP_ID,
    facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    jwtSecret: process.env.JWT_SECRET,
    mongoURI: process.env.MONGO_URI,
   
    cookieKey: process.env.COOKIE_KEY,
    emailKey: process.env.EMAIL_KEY,
    emailSecret: process.env.EMAIL_SECRET,
    
    redirectDomain: process.env.REDIRECT_DOMAIN,
    amazonS3AccessKey: process.env.AMAZONS3_ACCESS_KEY,
    amazonS3AccessKeySecret :process.env.AMAZONS3_ACCESS_KEY_SECRET,
    amazonS3Region: process.env.AMAZONS3_REGION

}

