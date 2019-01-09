var db=require('./db')
var post={
    //search hot theo topic max 6 bài
    searchHotType:async ( topic)=>{
        return new Promise((resolve,reject)=>{
            let sql=`select  id_post,time,title,content
            from post post1
            where id_topic ='${topic}' and 5>= (select COUNT(*) from post post2
            where post2.score>post1.score and post2.id_topic='${topic}' ) `;
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0)
                        resolve(result);
                    else
                        resolve(0);
                }
            }) ;   
        });
    },
    //search hot nhat 7 bài
    searchHot:async ()=>{
        return new Promise((resolve,reject)=>{
            let sql=`select id_post,time,title,content,id_topic
            from post post1
            where 6>= (select COUNT(*) from post post2
            where post2.score>post1.score)`
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0)
                        resolve(result);
                    else
                        resolve(0);
                }
            }) ;   
        });
    },
    //search title
    
    getSearchTitle:async (title)=>{
        title="%"+title+"%";
        return new Promise((resolve,reject)=>{
            let sql=`select *
            from post  
            where title like '${title}'`;
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0)
                        resolve(result);
                    else
                        resolve(0);
                }
            }) ;   
        });
    },
    searchTitle:async (title)=>{
        title="%"+title+"%";
        return new Promise((resolve,reject)=>{
            let sql=`select id_post
            from post  
            where title like '${title}'`;
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0)
                        resolve(result);
                    else
                        resolve(0);
                }
            }) ;   
        });
    },
     //search newest nhieu nhat 7 bài
     searchNew:async ()=>{
        return new Promise((resolve,reject)=>{
            let sql=`select id_post,time,title,content,id_topic
            from post post1
            where  6>= (select COUNT(*) from post post2
            where post2.time>post1.time) `;
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0)
                        resolve(result);
                    else
                        resolve(0);
                }
            }) ;   
        });
    },
    //search newest theo topic nhieu nhat 6 bài
    searchNewType:async (topic)=>{
        return new Promise((resolve,reject)=>{
            let sql=`select *
            from post post1
            where post1.id_topic='${topic}' && 5>= (select COUNT(*) from post post2
            where post2.time>post1.time) `;
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0)
                        resolve(result);
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