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

		// console.log(ctx.session);

		return handle(ctx.req, ctx.res);

	})


	router.get('/apiDetail',function(ctx,next){

		// console.log(ctx.session.isNew);

		if(ctx.session.isNew){

			ctx.redirect('/index');

		}else{

			return handle(ctx.req, ctx.res);
		}

	})


	router.get('/workspace',function(ctx,next){

		// console.log(ctx.session);
		// console.log(ctx.session.isNew);

		if(ctx.session.isNew){

			ctx.redirect('/index');

		}else{

			return handle(ctx.req, ctx.res);
		}
		
	})


	router.get('/project',function(ctx,next){

		// console.log(this.session);

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