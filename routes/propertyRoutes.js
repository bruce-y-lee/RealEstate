
const mongoose = require('mongoose');
const Property = mongoose.model('properties');

module.exports = app => {
    app.get('/api/properties', async (req, res) => {
        // req.user
        console.log(req.body);
        const properties = await Property.find().limit(100);

        res.send(properties);
    });

    app.get('/api/properties/latest', async (req, res) => {

        const properties = await Property.find({saleType:{$ne:"sold-out"}}).sort({_id:1}).limit(6);

        res.send(properties);
    });
    //search properties with condition
    app.post('/api/properties', async (req, res) => {
        // req.user
        // console.log(req.body);
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
    //property detail route
    app.get('/api/properties/:propertyIdorQuery', async (req, res) => {
        
        let property;
        if (req.params.propertyIdorQuery.match(/^[0-9a-fA-F]{24}$/)) {
            // it's an ObjectID   
            // console.log("it is id")
            try{
                property = await Property.findById(req.params.propertyIdorQuery);
    
                res.send(property);
            }
            catch(e){
                console.log(e.message);
        
                res.redirect('/');
            } 
        } else {
            //find by city name
            
            try{
                property = await Property.find({"address.city": req.params.propertyIdorQuery}).limit(4);
                // console.log(property);
                res.send(property);
            }
            catch(e){
                console.log(e.message)
                res.redirect('/');

            }
            
        }
        
        
        // console.log(property);
        
    });
    //find property's near properties( same city)
    app.get('/api/properties/near/:propertyId', async (req, res) => {
        
        let property;
        let propertyNear;
        if (req.params.propertyId.match(/^[0-9a-fA-F]{24}$/)) {
            // it's an ObjectID   
        
            try{
                property = await Property.findById(req.params.propertyId);
                propertyNear = await Property.find({"address.city":property.address.city}).limit(4);
                res.send(propertyNear);
            }
            catch(e){
                console.log(e.message);
                
                res.redirect('/');
            } 
        } 
        
        
        
        
        
    });
    //popular properties route
    app.get('/api/propertiespopular', async (req, res) => {
        
        
        let propertyPopular;
        
            // console.log("popular property")
            try{
                //find by property's user array's length
                propertyPopular = await Property.find({ $where: "this._user.length > 0" } ).sort({price:1}).limit(4);
                
                res.send(propertyPopular);
            }
            catch(e){
                console.log(e.message);
                
                res.redirect('/');
            } 
        
        
    });

    
    //delete property from database
    // app.patch('/api/removeproperty', requireLogin, async (req, res) => {
    app.patch('/api/removeproperty', async (req, res) => {
        console.log("delete user id: ", req.body.propertyId);
        // console.log(req.data.propertyId)
        let result;

        
        try{
            result = await Property.findOneAndDelete({_id:req.body.propertyId});
        }
        catch(e){
            res.send(e);
        }


        res.send(result);
    });

        
   

    
};