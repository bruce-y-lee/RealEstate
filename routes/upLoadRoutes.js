const mongoose = require('mongoose');
const Property = mongoose.model('properties');
// const aws = require('aws-sdk')
const multer = require('multer');
const {uploadS3} = require('../services/upLoadToS3')
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
const upload = uploadS3.single('file');

module.exports =  app => {

    //contact via email 
    // app.post('/api/uploadproperty', upload.single('propertyImage'), async (req,res)=>{
    app.post('/api/uploadproperty',async (req,res)=>{
        // console.log("upload property data ")
        // console.log(req.body);
        var result = await new Property({...req.body,"address.city": req.body.city,"address.streetAddress":req.body.streetaddress}).save();
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
             return res.status(200).send(req.file.location)
 
        })
     });

    

    
}

 

 