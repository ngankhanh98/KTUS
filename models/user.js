
var db=require('./db');
var bcrypt = require('bcrypt-nodejs');

var user={
    login:(email,password)=>
    {

       return new Promise((resolve,reject)=>
       {
          let query=`select * from user where email='${email}'`;
        
          db.query(query,(err,result)=>
          {
              if(err)
              {
                  
                  resolve(false)
              }
              else
              {
                if(bcrypt.compareSync(password,result[0].password)&&result.length>0) {
                    
                    resolve(result[0]);
                }
                else
                {
                    resolve(false);
                }
              }
          })
       });
    },
    signUp:(username,email,password)=>
    {
        return new Promise((resolve,reject)=>
        {
            let search_query=`select id_user from user where email='${email}'`;
            db.query(search_query,(err,result)=>{
                if(err)
                {
                    console.log("search err");
                    console.log(err);
                    resolve(-1);
                }
                else
                {
                    if(result.length>0)
                    {
                        console.log("search");
                        resolve(false);   
                    }
                    else
                    {
                        let hash_pass=bcrypt.hashSync(password);
                        var sql = `insert into user(username,email,password,id_role) values ('${username}','${email}','${hash_pass}',2)`;
                        db.query(sql,(err) =>{
                            if(err)
                            {
                                console.log(err);
                                resolve(-1);
                            }
                            else
                            {   
                                
                                resolve(true);
                            }
                        });
                    }
                    
                }
            });
                
                    

        
        });
        
    },
    // get user list
    getUser:()=>{
        return new Promise((resolve,reject)=>
       {
          let query=`select id_user,username,avatar,email from user`;
        
          db.query(query,(err,result)=>
          {
              if(err)
              {
                  resolve(-1);
              }
              else
              {
                  if(result.length>0)
                  {
                      resolve(result);
                  }
                  else
                  {
                      resolve(0);
                  }

              }
          })
       });
    },
}

module.exports=user;