const mongoose = require('mongoose');
const Property = mongoose.model('properties');
// const aws = require('aws-sdk')
const multer = require('multer');
const {uploadS3,deleteObject} = require('../services/upLoadToS3')
// const upload = multer({dest:'../client/public/img/'});

//upload to local
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
        
//     cb(null, './client/public/img/item')
    
    
//   },
//   filename: async function (req, file, cb) {
//       console.log(req.body);
    
//     //add file name to property data
//     let name = req.body.address + '-'+ file.originalname; 
//         name = name.toLowerCase();
//         name = name.replace(/\s/g, '-');
//     try{
//         let result = await Property.findOneAndUpdate({_id:req.body.propertyId}, {$push:{images:name}} );
//     }
//     catch(e){
//         console.log(e)
//     }
    
//     cb(null, name)
//   }
// })


// var upload = multer({ storage: storage,
//                       limit: {
//                           fileSize: 1024 * 1024 * 5
//                       }
//                      }).single('file')


//upload to S3
const upload = uploadS3.array('file');

module.exports =  app => {

    //contact via email 
    // app.post('/api/uploadproperty', upload.single('propertyImage'), async (req,res)=>{
    app.post('/api/uploadproperty',async (req,res)=>{
        // console.log("upload property data ")
        // console.log(req.body);
        let unit;
        if(!req.body.unit)
            unit = "";
        else
            unit = req.body.unit;

        var result = await new Property({...req.body,
            "address.unit": unit, "address.city": req.body.city,"address.streetAddress":req.body.streetaddress,"address.country":req.body.country,
            "address.postalCode": req.body.postalCode, "address.province": req.body.province,
            imageSource:'https://real-estate-by-lee.s3.amazonaws.com/',"datePosted": new Date().toISOString()
            }).save();
        // console.log(result);

        res.send(result);
        });
    app.post('/api/uploadpropertyimages',async (req,res)=>{
        // console.log("upload image files ")
        // console.log(req);

        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            

            // console.log(req.file.location);
             return res.status(200).send(req.file)
 
        })
     });

     app.patch('/api/uploadpropertyremoveimage',async (req,res)=>{
        
        deleteObject(req.body.image,res);
        let result = await Property.findByIdAndUpdate(req.body.propertyId, {$pull:{images:req.body.image}} );
        res.send(result); 
     })
     app.patch('/api/uploadpropertyremovevideo',async (req,res)=>{
        
        deleteObject(req.body.video,res);
        console.log(req.body.video);
        let result = await Property.findByIdAndUpdate(req.body.propertyId, {$pull:{videos:req.body.video}} );
        console.log(result);
        res.send(result); 
     })

    

    
}

 

 