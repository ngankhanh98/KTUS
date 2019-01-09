var user=require('./user');
var admin={
    getUser:async()=>{
        let result=user.getUser();
        return result;
    },
}

module.exports=admin;