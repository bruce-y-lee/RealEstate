
const mongoose = require('mongoose');



const Property = mongoose.model('properties');

module.exports = app => {
    app.get('/api/properties', async (req, res) => {
        // req.user
        console.log(req.body);
        const properties = await Property.find().limit(100);

        res.send(properties);
    });
    app.post('/api/properties', async (req, res) => {
        // req.user
        console.log(req.body);
        let properties;
        
        try{
            properties = await Property.find({price:{$gte:req.body.value2[0], $lte:req.body.value2[1]},
                                sq:{$gte:req.body.value1[0],$lte:req.body.value1[1]}            
                    }).limit(100);
        }catch(e){
            console.log(e);
        }        

        if(req.body.Location){
           properties =  properties.filter(i => {
               return i.address.city == req.body.Location
           })
           
        }
        if(req.body.PropertyType){
            properties =  properties.filter(i => {
                return i.propertyType == req.body.PropertyType
            })
            
         }

         if(req.body.Bedrooms){
            properties =  properties.filter(i => {
                return i.bedrooms >= req.body.Bedrooms
            })
            
         }

         if(req.body.Bathrooms){
            properties =  properties.filter(i => {
                return i.bathrooms >= req.body.Bathrooms
            })
            
         }
        // console.log(properties);
        res.send(properties);
    });

    app.get('/api/properties/:propertyIdorQuery', async (req, res) => {
        // req.user
        // console.log("propertyRoutes get /api/properties/:propertyId");
        // console.log(req.params.propertyId);
        if (req.params.propertyIdorQuery.match(/^[0-9a-fA-F]{24}$/)) {
            // it's an ObjectID   
            console.log("it is id")
            try{
                const property = await Property.findById(req.params.propertyIdorQuery);
    
                res.send(property);
            }
            catch(e){
                console.log(e.message);
                // res.send(e.message);
                // res.status(404).redirect('/');
                res.redirect('/');
            } 
        } else {
            // nope
            console.log(req.params.propertyIdorQuery);
        }
        
        
        // console.log(property);
        
    });

    


    
   

    
};