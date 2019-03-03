const mongoose = require('mongoose');
const {Schema} = mongoose;


const propertySchema = new Schema({
    propertyType: String,
    title: String,
    body: String,
    price: String,
    bedrooms: Number,
    bathrooms: Number,
    sq: Number,
    address: {
        streetAddress: String,
        unit: Number,
        city: String,
        province: String,
        postalCode: String,
        country: String
    },
    features:String,
    sold: Boolean,
    images:[],
    videos:[],
    _user: [{type: Schema.Types.ObjectId, ref: 'User'}],
    datePosted: Date,
    dateSold: Date,
    latResponded: Date
});

mongoose.model('properties', propertySchema);

// Kitchen
// Air_Condition 
// Balcony 
// Gym
// Garden
// CCTV
// Children_Play_Ground
// Comunity_Center
// Security_System
// Gated_Community
// Automatic_Sprinklers
// Fireplace
// Window_Shutters
// Ocean_Views
// Heated_Floors
// Private_Patio
// Beach_Access
// Rooftop_Terrace
