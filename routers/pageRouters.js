const Router = require('koa-router');

const router = new Router();


function pageRouters(nextApp){

	// const handle = nextApp.getRequestHandler();


	// for route mask
	router.get('/',(ctx,next)=>{


		nextApp.render(ctx.req,ctx.res,'/index');

	})	



	router.get('/workspace',(ctx,next)=>{

		console.log('======================')

		nextApp.render(ctx.req,ctx.res,'/workspace');


	})


	
	// that's default route-handler
	/*router.get('*',(ctx,next)=>{	

		return handle(ctx.req, ctx.res);

	})*/


	return router.routes();
}



module.exports = pageRouters;