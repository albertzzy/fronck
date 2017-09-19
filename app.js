const koa = require('koa')
const koaStatic = require('koa-static');
const koaBody = require('koa-body');

//plugin own promise 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const session = require('koa-session');
// const session2 = require('koa-session2');

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
    ContextStore:MgStore,
    // store:new MgStore(),
    // key:'apm:sess',
    key: 'apm:sess',
	maxAge: 86400000,
	overwrite: true,
	httpOnly: true,
	signed: true,
	rolling: false,
	domain:''
}


nextApp.prepare().then(()=>{
	
	
	app.use(koaBody());
	
	
	
	// koa-session
	app.use(session(config,app));


	// koa-session2
	/* app.use(session2({
		key:'apm:sess',
		store:new MgStore(),
		domain:'m.test.com',
		maxAge:Date.now()+1000000
	})); */

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












