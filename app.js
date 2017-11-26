const koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const koaBody = require('koa-body');
const koaNunjucks = require('koa-nunjucks-2');

//plugin own promise 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;



mongoose.connect('mongodb://localhost:27017/apm',{
    useMongoClient:true
});

const session = require('koa-session');



// routers
const pageRouters = require('./routers/pageRouters');
const signRouters  = require('./routers/signRouters');
const apiRouters = require('./routers/apiRouters');




const app = new koa();


app.keys = ['some secret hurr'];

const config = {
    key: 'apm:sess',
	maxAge: 86400000,
	overwrite: true,
	httpOnly: true,
	signed: true,
	rolling: false,
	domain:''
}



app.use(koaBody());

app.use(koaStatic('statics/js'))
app.use(koaStatic('statics/style'))

// koa-session
app.use(session(config,app));


app.use(koaNunjucks({
	ext: 'html',
	path: path.join(__dirname, 'statics/pages'),
	nunjucksConfig: {
		trimBlocks: true
	}
}));
  


// page routes
app.use(pageRouters.routes());


// api routes
app.use(signRouters.routes());
app.use(apiRouters.routes());



app.listen(3000,()=>{
	console.log('app is listening at 3000 u smart ass...');
})













