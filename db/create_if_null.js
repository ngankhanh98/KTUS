module.exports.create_if_null= async ()=> {
    try {
        var role = require('../models/role.js');
        await role.create_table();
        var topic = require('../models/topic.js');
        await topic.create_table();
        var user =  require('../models/user.js');
        await user.create_table();
        var post = require('../models/post.js');
        await post.create_table();
        var follow = require('../models/follow.js');
        await follow.create_table();
        var like = require('../models/likes.js');
        await like.create_table();
        var share =  require('../models/shares.js');
        await share.create_table();
        var comment =  require('../models/comments.js');
        await comment.create_table();
        Promise.resolve(console.log('Database init success!'))
    } catch (e) {
            console.log(e);
    }
}