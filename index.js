const express = require('express');
const cookieSession = require('cookie-session');

const mongoose = require('mongoose');
const {mongoURI, cookieKey} = require('./config/keys');
const bodyParser = require('body-parser')


mongoose.connect(mongoURI);
const app = express();

//make  all the data  parse and set to req.body
app.use(bodyParser.json())


app.use(express.static(__dirname));

app.use( 
    cookieSession({ //create cookie
        maxAge: 60 * 60 * 1000, // 1 hour
        keys: [cookieKey] // to encript cookie, can provide multiple it will randomly choose
    })
);



if(process.env.NODE_ENV === 'production') {
    //express will serve up production assets like our main.js file, or main.css file!
    app.use(express.static('client/build'));
    //Express will serve up the index.html file
    //if it deosn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is on ${PORT}`);
});