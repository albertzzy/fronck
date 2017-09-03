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
        let pro =  await user.save();

        ctx.body = {
            success:true,
            name,
            email
        }

    }catch(e){

        ctx.body = new Error('saved error');
    }

})



router.post('/signin',async function(ctx,next){
    let param = ctx.request.body;
    
    let {name,password} = param;

    try{

       let userPro = await UserModel.find({$or:[{name:name},{email:name}]}).exec();


        let resPro = await userPro[0].comparePassword(password);


        ctx.body = {
            success:resPro,
        };

        /*if(resPro){
            ctx.redirect('/workspace');
        }else{
            ctx.body = new Error('password error');
        }*/

       }catch(e){
             ctx.body = {
                 success:false,
                 res:new Error('signin error')
             }

       }


})




router.post('/logout',function(ctx,next){
    
    // ctx.session = null;

})



module.exports = router;
