var db=require('./db')
var topic={
    //get topic name
    getname:async ( topic)=>{
        
        return new Promise((resolve,reject)=>{
            let sql=`select  name
            from topic
            where id_topic ='${topic}' `;
            
            db.query(sql,(err,result)=>
            {
                if(err)
                {
                    console.log(err);
                    resolve(-1);
                }
                else{
                    if(result.length>0){
                        
                        resolve(result[0]);
                    }
                    else
                        resolve(0);
                }
            }) ;   
        });
    },
    
}

module.exports=topic;