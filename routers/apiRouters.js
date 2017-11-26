const Router = require('koa-router');
const ApiModel = require('../models/api');



const router = new Router({
    prefix:'/apis'
});

// 产生一个唯一的id
router.post('/save',async function(ctx,next){
    let param = ctx.request.body;

    let api = new ApiModel(param)
    let res,status = false;

    try{
        res = await api.save();
        status = true;

    }catch(e){
        
        res = e;
        status = false;
    }


    ctx.body = {
        success:status,
        data:res
    }
})


router.get('/delete/:aid',function(ctx,next){
    let param = ctx.params.aid;

    ctx.body = {
        result:'success'
    }
})






module.exports = router;