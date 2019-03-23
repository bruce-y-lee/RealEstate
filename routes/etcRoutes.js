var {sendEmail} = require('../utils/sendEMail');


module.exports =  app => {
    app.get('/api/contact', async (req,res)=>{
        
        console.log("api/contact");
        console.log(req.query);
        console.log(req.query.author)
        // sendEmail(req.query);
        res.send(sendEmail(req.query));
     });

    

    
}

 

 