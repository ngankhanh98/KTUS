var upload_image=require('../models/image_upload');
var fs=require('fs');
var path=require('path');
upload={
    upload:async (req,res)=>{
        upload_image(req, function(err, data) {


            if (err) {
                return res.status(404).end(JSON.stringify(err));
            }
    
            res.send(data);
        });
    },
    remove:async (req,res)=>{
        fs.access(path.dirname(require.main.filename)+req.body.src, error => {
            if (!error) {
                fs.unlink(path.dirname(require.main.filename)+req.body.src,function(error){
                    if(error)
                        console.log(error);
                });
            } else {
                console.log(error);
            }
        });
          
          res.send();
    }
}
module.exports=upload;
   
    

