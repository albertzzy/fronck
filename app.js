const koa = require('koa')
const koaStatic = require('koa-static');
const koaBody = require('koa-body');
const mongoose = require('mongoose');
const session = require('koa-session');


const routers  = require('./routers/routers');
const apiRouters = require('./routers/apiRouters');
const projectRouters = require('./routers/projectRouters');

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

app.use(koaBody())


app.use(koaStatic('statics/lib/'))


app.use(session(config,app))



app.use(routers.routes());
app.use(apiRouters.routes());
app.use(projectRouters.routes());





app.listen(3000,()=>{
    console.log('app is listening at 3000...');
})


