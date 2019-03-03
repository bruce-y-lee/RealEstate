const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const {Schema} = mongoose;

const userSchema = new Schema({
    googleId: String,
    instagramId: String,
    facebookId: String,
    name: String,
    // credits: {type: Number, default: 0},
    email: String,
    password: {type: String, required: true},
    myList:[{type: Schema.Types.ObjectId, ref: 'Property'}]
});

mongoose.model('users', userSchema);