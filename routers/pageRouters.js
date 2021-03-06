const Router = require('koa-router');

const router = new Router();


function pageRouters(nextApp){

	const handle = nextApp.getRequestHandler();


	// for route mask
	/*router.get('/home',(ctx,next)=>{

		console.log(__dirname)

		nextApp.render(ctx.req,ctx.res,'/index');

	})	

	router.get('/ws',(ctx,next)=>{

		nextApp.render(ctx.req,ctx.res,'/workspace');

	})*/


	
	// that's default route-handler

	router.get('/index',(ctx,next)=>{	
		return handle(ctx.req, ctx.res);
	})


	router.get('/apidetail',function(ctx,next){
		if(ctx.session.isNew){
			ctx.redirect('/index');
		}else{
			return handle(ctx.req, ctx.res);
		}
	})


	router.get('/workspace',function(ctx,next){
		if(ctx.session.isNew){
			ctx.redirect('/index');
		}else{
			return handle(ctx.req, ctx.res);
		}
	})


	router.get('/project',function(ctx,next){
		if(ctx.session.isNew){
			ctx.redirect('/index');
		}else{
			return handle(ctx.req, ctx.res);
		}
	})


	// other stuff?
	router.get('*',(ctx,next)=>{	

		return handle(ctx.req, ctx.res);

	})


	return router.routes();
}



module.exports = pageRouters;