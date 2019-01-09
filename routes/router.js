var express = require('express');
var router = express.Router();
// controller require
var userController=require('../controllers/UserController');
var homeController=require('../controllers/homecontroller');
var postController=require('../controllers/postcontroller');
var imageController=require('../controllers/image_upload_controller');
var admin=require('../controllers/admin_controller');
/* GET home page. */
router.get('/',homeController.getIndex);
router.get('/skills',homeController.getType1);// 1--skill
router.get('/sciences',homeController.getType2);// 2--sciences
router.get('/inspired',homeController.getType3);// 3--inspired
router.get('/inspired',homeController.getType3);// 3--inspired
router.get('/movies',homeController.getType4);// 4--movies
router.get('/musics',homeController.getType5);// 5---musics
router.get('/cultural',homeController.getType6);// 6-cultural
router.get('/politic',homeController.getType7);// 7--politic
router.get('/discusions',homeController.getType8);// 8--discusions
router.get('/travels',homeController.getType9);//9-- travels

//post
    //new post
router.get('/new-post',postController.getNewPost);
router.post('/new-post',postController.post);
    // get post
//router.post('/post',postController.getPost);
router.get('/post/:id',postController.getPost);
//search
router.post('/search',postController.searchTitle);
router.get('/search/:title',postController.getSearchTitle);

//sign in
router.get('/signin',userController.getLogin);
router.post('/signin',userController.login);
//sign up
router.get('/signup',userController.getsignup);
router.post('/signup',userController.signup);
router.get('/logout',userController.logout);
//image upload
router.post('/image_upload',imageController.upload);
//image remove
router.post('/delete_image',imageController.remove);

//dashboard
router.get('/dashboard-user',admin.getDashboard_user);
router.get('/dashboard-post',admin.getDashboard_post);
router.get('/dashboard',admin.getDashboard);
module.exports = router;
