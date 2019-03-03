
const mongoose = require('mongoose');



const Property = mongoose.model('properties');

module.exports = app => {
    app.get('/api/properties', async (req, res) => {
        // req.user
        const properties = await Property.find();

        res.send(properties);
    });

    app.get('/api/properties/:propertyId', async (req, res) => {
        // req.user
        // console.log("propertyRoutes get /api/properties/:propertyId");
        // console.log(req.params.propertyId);
        try{
            const property = await Property.findById(req.params.propertyId);

            res.send(property);
        }
        catch(e){
            console.log(e.message);
            // res.send(e.message);
            // res.status(404).redirect('/');
            res.redirect('/');
        }
        
        // console.log(property);
        
    });


    
   

    
};