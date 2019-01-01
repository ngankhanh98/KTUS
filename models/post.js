var db=require('./db')
var post={
    //search hot chua xu li
    searchHot:async ()=>{
        return new Promise((resolve,reject)=>{
            let sql=`select * 
            from post  
            where title like %'${title}'%`;
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0)
                        resolve(result[0]);
                    else
                        resolve(0);
                }
            }) ;   
        });
    },
    //search title
    searchTitle:async (title)=>{
        return new Promise((resolve,reject)=>{
            let sql=`select id_post 
            from post  
            where title like %'${title}'%`;
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0)
                        resolve(result[0]);
                    else
                        resolve(0);
                }
            }) ;   
        });
    },
    //tao post
    newpost:async (id_user,title,content)=>{
        return new Promise((resolve,reject)=>{
            let sql=`insert into post(id_user,title,content) values('${id_user}','${title}','${content}')`;
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    console.log(result.insertId)
                    resolve(result.insertId);
                }
            }) ;   
        });
    },
    //lay post
    getPost:async (id)=>{
        return new Promise((resolve,reject)=>{
            let sql=`select content, title,time 
            from post  
            where id_post='${id}'`;console.log(sql);
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    console.log(result);
                    if(result.length>0)
                        resolve(result[0]);
                    else
                        resolve(0);
                }
            }) ;   
        });
    }
}

module.exports=post;