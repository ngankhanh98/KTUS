var post=require('../models/post');
var topicdb=require('../models/topic');
var home={

    getIndex:async (req,res)=>
    {
       let result= await post.searchHot();
       let resultNew= await post.searchNew();
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(1,tempt.indexOf("T"));   
           time.push(tempt);
           tempt= await topicdb.getname(result[i].id_topic); 
           topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(1,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
    
        res.render('index',info);
       
    },
// get skills
    getType1:async (req,res)=>
    {
       let result= await post.searchHotType(1);
       let resultNew= await post.searchNewType(1);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
           topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(1,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
    
        res.render('index',info);
       
    },

    // get sciences
    getType2:async (req,res)=>
    {
       let result= await post.searchHotType(2);
       let resultNew= await post.searchNewType(2);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
        topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(1,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
        res.render('index',info);
       
    },

    // get inspired
    getType3:async (req,res)=>
    {
       let result= await post.searchHotType(3);
       let resultNew= await post.searchNewType(3);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
        topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(0,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
        res.render('index',info);
       
    },

    // get movies
    getType4:async (req,res)=>
    {
       let result= await post.searchHotType(4);
       let resultNew= await post.searchNewType(4);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
        topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(0,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
        res.render('index',info);
       
    },
    
    // get musics 
    getType5:async (req,res)=>
    {
       let result= await post.searchHotType(5);
       let resultNew= await post.searchNewType(5);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
        topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(0,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
        res.render('index',info);
       
    },

    // get cultural
    getType6:async (req,res)=>
    {
       let result= await post.searchHotType(6);
       let resultNew= await post.searchNewType(6);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
        topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(0,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
        res.render('index',info);
       
    },

    // get politic
    getType7:async (req,res)=>
    {
       let result= await post.searchHotType(7);
       let resultNew= await post.searchNewType(7);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
        topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(0,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
        res.render('index',info);
       
    },

    // get dicusions
    getType8:async (req,res)=>
    {
       let result= await post.searchHotType(8);
       let resultNew= await post.searchNewType(8);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
        topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(0,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
        res.render('index',info);
       
    },

    // get travels
    getType9:async (req,res)=>
    {
       let result= await post.searchHotType(9);
       let resultNew= await post.searchNewType(9);
       
       // hot
       let id=[],title=[],time=[],tempt,content=[],topic=[];

       for (i=0;i<result.length;i++){
           
           id.push(result[i].id_post);
           title.push(result[i].title);
           //covert html to plain text
           tempt =JSON.stringify(result[i].content).replace(/<\/?[^>]+>/ig, " ");
           content.push(tempt.slice(1,tempt.indexOf(".")));//  get dicription
           //get time yyyy-mm-dd
           tempt=JSON.stringify(result[i].time);
           tempt=tempt.slice(1,tempt.indexOf("GMT"));
           tempt=tempt.slice(0,tempt.indexOf("T"));   
           time.push(tempt);
           tempt=await topicdb.getname(result[i].id_topic);
        topic.push(tempt.name);

           
       };

       // lay bai new
       let nid=[],ntitle=[],ntime=[],ntempt,ncontent=[],ntopic=[];
       for (i=0;i<resultNew.length;i++)
       {
        nid.push(resultNew[i].id_post);
        ntitle.push(resultNew[i].title);
        //covert html to plain text
        ntempt =JSON.stringify(resultNew[i].content).replace(/<\/?[^>]+>/ig, " ");
        ncontent.push(ntempt.slice(0,ntempt.indexOf(".")));//  get dicription
        //get time yyyy-mm-dd
        ntempt=JSON.stringify(resultNew[i].time);
        ntempt=ntempt.slice(1,ntempt.indexOf("GMT"));
        ntempt=ntempt.slice(0,ntempt.indexOf("T"));   
        ntime.push(ntempt);
        ntempt=await topicdb.getname(resultNew[i].id_topic);
        ntopic.push(ntempt.name);

        
       };
       
    let info={
        isLogin:req.session.isLogin,
        name: req.session.name,
        avatar:req.session.avatar,
        id:id,
        title: title,
        time:time,
        dicription:content,
        topic:topic,
        nid:nid,
        ntitle: ntitle,
        ntime:ntime,
        ndicription:ncontent,
        ntopic:ntopic
        
    }
        res.render('index',info);
       
    },
}
module.exports=home