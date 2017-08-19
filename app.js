const koa = require('koa')
const koaStatic = require('koa-static');
const koaBody = require('koa-body');
const mongoose = require('mongoose');
const session = require('koa-session');

// next.js
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
	dev,
	dir:'./statics'
});



// routers
const pageRouters = require('./routers/pageRouters');
const signRouters  = require('./routers/signRouters');
const apiRouters = require('./routers/apiRouters');
const projectRouters = require('./routers/projectRouters');

// session store
const MgStore = require('./store')


const app = new koa();

mongoose.connect('mongodb://localhost:27017/apm',{
    useMongoClient:true
});


const config = {
    ContextStore :MgStore,
    key:'apm:sess',
    maxAge:864000,
    rolling:false    
}


nextApp.prepare().then(()=>{

	app.use(koaBody());
	

	app.use(session(config,app));



	// page routes
	app.use(pageRouters(nextApp));


	// api routes
	app.use(signRouters.routes());
	app.use(apiRouters.routes());
	app.use(projectRouters.routes());



	app.listen(3000,()=>{
	    console.log('app is listening at 3000 u smart ass...');
	})


})












