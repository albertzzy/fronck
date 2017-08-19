const Router = require('koa-router');
const fs = require('fs');
const UserModel = require('../models/user');
// const  crypto = require('crypto');
// const hash = crypto.createHash('sha256');

const router = Router();


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




router.post('/logout',function(ctx,next){
    
    // ctx.session = null;

})



module.exports = router;
