const Router = require('koa-router');
const router = Router();
const ApiModel = require('../models/api');


router.get('/',async (ctx,next)=>{
	await ctx.render('index');
})


router.get('/apilist',async (ctx,next) =>{
	if(ctx.session.isNew){
		ctx.redirect('/');
	}else{
		let apilist = await ApiModel.find({});

		await ctx.render('apilist',{apilist});
	}
})


router.get('/apidetail',async (ctx,next) =>{
	if(ctx.session.isNew){
		ctx.redirect('/');
	}else{
		let {aid} = ctx.request.query;
		let detail = await ApiModel.findOne({_id:aid});
		await ctx.render('apidetail',{detail});
	}
})






module.exports = router;