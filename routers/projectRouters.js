const Router = require('koa-router');
const Project = require('../models/project');


const router = new Router({
    prefix:'/projects'
});

router.post('/add',async function(ctx,next){
    
    let param = ctx.request.body;
    let pname = param.name,pauthor = param.author;

    let pro = new Project({name:pname,author:pauthor});
    let resPromise,resbody;

    resPromise = pro.save();
    resPromise.then(function(res){
        return {
            result:'success'
        }
    }).catch(function(err){
        return {
            result:"error"
        }
    })

   ctx.body = await resPromise;
    
})
.post('/save',function(ctx,next){
    let param = ctx.request.body;

    ctx.body = {
        result:'success'
    }
})
.get('/delete/:pid',function(ctx,next){
    let param = ctx.params.pid;

    ctx.body = {
        result:'success'
    }
})

module.exports = router;