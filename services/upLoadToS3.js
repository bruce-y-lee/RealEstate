const aws = require('aws-sdk');
const mongoose = require('mongoose');
const Property = mongoose.model('properties');
const multer = require('multer');
const multerS3 = require('multer-s3');
const {amazonS3AccessKey, amazonS3AccessKeySecret, amazonS3Region} = require('../config/keys');

aws.config.update({
    secretAccessKey: amazonS3AccessKeySecret,
    accessKeyId: amazonS3AccessKey,
    region: amazonS3Region
})
const s3 = new aws.S3();
 
const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'real-estate-by-lee',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      // cb(null, {fieldName: file.fieldname});
      cb(null, {fieldName: file.originalname});
    },
    key: async function (req, file, cb) {
      let name = req.body.address + '-'+ file.originalname; 
        name = name.toLowerCase();
        name = name.replace(/\s/g, '-');
        try{
            await Property.findOneAndUpdate({_id:req.body.propertyId}, {$push:{images:name}} );
        }
        catch(e){
            console.log(e)
        }
      cb(null, name);
    }
  })
});

const deleteObject = async function (req, res) {
  
  const params = {
    Bucket: 'real-estate-by-lee',
    Key: req //if any sub folder-> path/of/the/folder.ext
  }
  try {
  await s3.headObject(params).promise()
  console.log("File Found in S3")
  try {
      await s3.deleteObject(params).promise()
      console.log("file deleted Successfully")
  }
  catch (err) {
      console.log("ERROR in file Deleting : " + JSON.stringify(err))
  }
  } catch (err) {
      console.log("File not Found ERROR : " + err.code)
  }
}


module.exports = {uploadS3,deleteObject};

// if(process.env.NODE_ENV === 'production'){
//     //we are in poduction
//     module.exports = require('./prod');
// }else {
//     //we are in development
//     module.exports = require('./dev');
    
// }