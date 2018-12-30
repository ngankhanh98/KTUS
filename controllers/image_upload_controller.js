var upload_image=require('../models/image_upload');

module.exports.upload=  (req, res)=> {
    upload_image(req, function(err, data) {


        if (err) {
            return res.status(404).end(JSON.stringify(err));
        }

        res.send(data);
    });
}
