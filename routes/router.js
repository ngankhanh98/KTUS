var express = require('express');
var router = express.Router();
// controller require
var userController=require('../controllers/UserController');
var homeController=require('../controllers/homecontroller');
var postController=require('../controllers/postcontroller');
var imageController=require('../controllers/image_upload_controller');
/* GET home page. */
router.get('/',homeController.getIndex);
//post
    //new post
router.get('/new-post',postController.getNewPost);
router.post('/new-post',postController.post);
    // get post
//router.post('/post',postController.getPost);
router.get('/post/:id',postController.getPost);

//sign in
router.get('/signin',userController.getLogin);
router.post('/signin',userController.login);
//sign up
router.get('/signup',userController.getsignup);
router.post('/signup',userController.signup);
router.get('/logout',userController.logout);
//image upload
router.post('/image_upload',imageController.upload);
module.exports = router;
