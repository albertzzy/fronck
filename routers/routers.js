const Router = require('koa-router');
const fs = require('fs');
const UserModel = require('../models/user');

const router = Router();


router.get('/',function (ctx,next){
    
    const file = fs.readFileSync('./statics/index.html','utf8');
    ctx.type = 'text/html';
    ctx.length = Buffer.byteLength(file);
    ctx.body = file;
})


router.post('/signup',function(ctx,next){
    let params = ctx.request.body;

    let user = new UserModel({
        name:params.name,
        email:params.email,
        password:params.password
    })

    user.save(function(err){
        if(err){console.log(err);next(err)}

    })

})



router.post('/login',function(ctx,next){
    


})

router.post('/logout',function(ctx,next){
    

})



module.exports = router;
