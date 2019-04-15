
const mongoose = require('mongoose');
const Property = mongoose.model('properties');
const {deleteObject} = require('../services/upLoadToS3')

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
        let c = req.body; 
        
        try{
            properties = await Property.find({price:{$gte:c.price[0], $lte:c.price[1]},
                                sq:{$gte:c.sq[0],$lte:c.sq[1]}            
                    });
          
        }catch(e){
            console.log(e);
        }        
        
        if(c.Location && c.Location !== "Location"){
           properties =  properties.filter(i => {
               return i.address.city == req.body.Location
           })
           
        }
        if(c.PropertyType && c.PropertyType !== "Property Type"){
            properties =  properties.filter(i => {
                return i.propertyType == req.body.PropertyType
            })
            
         }

         if(c.Bedrooms && c.Bedrooms !== "Bedrooms Min"){
            properties =  properties.filter(i => {
                return i.bedrooms >= req.body.Bedrooms
            })
            
         }

         if(c.Bathrooms && c.Bathrooms !== "Bathrooms Min"){
            properties =  properties.filter(i => {
                return i.bathrooms >= req.body.Bathrooms
            })
            
         }
        
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
        let {images,videos} = await Property.findById(req.body.propertyId);
        if(images.length!==0){// delete images in S3 server
            images.map(image=>{
                    deleteObject(image,res);
            });
        }
        if(videos.length!==0){// delete images in S3 server
            videos.map(v=>{
                    deleteObject(v,res);
            });
        }
            

        
        
        try{ 
            result = await Property.findOneAndDelete({_id:req.body.propertyId});
        }
        catch(e){
            res.send(e);
        }


        res.send(result);
    });

        
   

    
};