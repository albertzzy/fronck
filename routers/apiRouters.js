const Router = require('koa-router');

const router = new Router({
    prefix:'/apis'
});

// 产生一个唯一的id
router.post('/add',function(ctx,next){
    let param = ctx.request.body;

    ctx.body = {
        result:'success'
    }
})

router.post('/save',function(ctx,next){
    let param = ctx.request.body;

    ctx.body = {
        result:'success'
    }
})


router.get('/delete/:aid',function(ctx,next){
    let param = ctx.params.aid;

    ctx.body = {
        result:'success'
    }
})

module.exports = router;