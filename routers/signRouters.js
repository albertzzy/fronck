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

    
    let pro = new Promise(function(resolve,reject){

// console.log('++++++++++++++')
        user.save(function(err,res){
            
        console.log(err);
        console.log('=========');
        console.log(res);

            if(err){
                reject(err)

                // ctx.body = err;
            }else{

                resolve(res)
                // ctx.body = res;
            }
        });

    })  


    ctx.body = await pro;



})



router.post('/signin',function(ctx,next){
    let param = ctx.request.body;
    
    let {name,password} = param;

    UserModel.find({$or:[{name:name},{email:name}]}).exec().then((res)=>{

        console.log(res);



    })





    ctx.body = {
        result:'success'
    }
})




router.post('/logout',function(ctx,next){
    
    // ctx.session = null;

})



module.exports = router;
