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
	router.get('*',(ctx,next)=>{	


		console.log('======================')
		console.log(ctx.session)
		console.log('======================')


		return handle(ctx.req, ctx.res);

	})


	return router.routes();
}



module.exports = pageRouters;