module.exports.create_if_null= async ()=> {
    try {

            var role = require('../models/role.js');
            await role.create_table();
            var topic = require('../models/topic.js');
            await topic.create_table();
            var user = require('../models/user.js');
            await user.create_table();
            var post = require('../models/post.js');
            await post.create_table();
            var follow = require('../models/follow.js');
             follow.create_table();
            var like = require('../models/likes.js');
             like.create_table();
            var share = require('../models/share.js');
             share.create_table();
            var comment = require('../models/comment.js');
            comment.create_table();

        Promise.resolve(console.log('Creating table if null!'))
    } catch (e) {
            console.log(e);
    }
}