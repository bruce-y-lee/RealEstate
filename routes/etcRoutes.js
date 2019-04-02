var {sendEmail} = require('../utils/sendEmail');


module.exports =  app => {

    //contact via email 
    app.get('/api/contact', async (req,res)=>{
        
        
        // sendEmail(req.query);
        res.send(sendEmail(req.query));
     });

    

    
}

 

 