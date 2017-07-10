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


router.post('/save',async function(ctx,next){
    let param = ctx.request.body;
    
    await Project.findOneAndUpdate({_id:param.pid},{name:param.name,author:param.author})

    ctx.body = {
        result:'success'
    }
})




router.post('/delete',async function(ctx,next){
    let param = ctx.request.body;

    await Project.findByIdAndRemove(param.pid)

    ctx.body = {
        result:'success'
    }
})



router.get('/queryAll',async function(ctx,next){
    let projectList = await Project.find();

    ctx.body = {
        result:'success',
        data:projectList
    }
})

module.exports = router;