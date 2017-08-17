const Router = require('koa-router');
const UserModel = require('../models/user');



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


router.post('/signup',async function(ctx,next){
    let param = ctx.request.body;

    let {name,email,password} = param;

    let user = new UserModel({
        name,
        email,
        password
    })



    try{

       let res = await user.save();

       ctx.body = res;     

    }catch(e){

        // ctx.body = e;

    }


})



router.post('/signin',function(ctx,next){
    let param = ctx.request.body;

    
    let {name,email,password} = param;


    ctx.body = {
        result:'success'
    }
})



module.exports = router;