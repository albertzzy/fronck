const Router = require('koa-router');
const fs = require('fs');


const router = Router();


router.get('/',function (ctx,next){
    
    const file = fs.readFileSync('./statics/index.html','utf8');
    ctx.type = 'text/html';
    ctx.length = Buffer.byteLength(file);
    ctx.body = file;
})

// router.get('project/:pid',function(ctx,next){


// })


module.exports = router;
