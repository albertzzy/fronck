const koa = require('koa')
const koaStatic = require('koa-static');
const koaBody = require('koa-body');
const mongoose = require('mongoose');

const routers  = require('./routers/routers');
const apiRouters = require('./routers/apiRouters');
const projectRouters = require('./routers/projectRouters');

mongoose.connect('mongodb://localhost:27017/apm');

const app = new koa();

app.use(koaBody())


app.use(koaStatic('statics/lib/'))

app.use(routers.routes());
app.use(apiRouters.routes());
app.use(projectRouters.routes());





app.listen(3000,()=>{
    console.log('app is listening at 3000...');
})


