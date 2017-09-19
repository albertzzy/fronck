const SessionModel = require('../models/session');
const {Store}  = require('koa-session2')

class MgStore{

    constructor(ctx){
        this.ctx = ctx;
        this.sm = SessionModel;

    }


    async get(key,maxAge,{rolling}){
        console.log('get');

        let sid = this.ctx.cookies.get(key);
        let sm = this.sm;

        try{
            let sess = await sm.findOne({sid:sid});
            
        }catch(e){
            console.log(e)
        }

        return sess;

    }

    async set(key,sess,maxAge,{rolling,changed}){

        console.log('set');

        let sid = this.ctx.cookies.get(key);
        let sm = this.sm;

        let se = new sm({
            sid:sid,
            session:sess,
            expires:new Date().getTime()+maxAge
        })


        try{
           await se.save();
            
        }catch(e){
            console.log(e)
        }

    }

    async destroy(key){

        console.log('destroy');

        this.ctx.session = null;

        let sm = this.sm;
        let sid = this.ctx.cookies.get(key);

        try{
            await sm.findOneAndRemove({sid:sid})
            
        }catch(e){

            console.log(e)
        }


    }


}

module.exports = MgStore;


/* class Mgstore extends Store{

    constructor(){
        super();

        this.sm = SessionModel;
        console.log('constructor');
    }


    async get(sid, ctx) {
        console.log('get');
        
        try{
            let sess = await this.sm.findOne({sid:sid});
            
        }catch(e){
            console.log(e)
        }

        return sess;
    }

    async set(session, { sid =  this.getID(24), maxAge = 1000000 } = {}, ctx) {
        console.log('set');

        let sm = this.sm;

        let se = new sm({
            sid:sid,
            session:session,
            expires:new Date().getTime()+maxAge
        })

        try{
            await se.save();
            
        }catch(e){
            console.log(e)
        }
    }

    async destroy(sid, ctx) {

        console.log('destroy');

        ctx.session = null;
        let sm = this.sm;

        try{
            await sm.findOneAndRemove({sid:sid})
            
        }catch(e){

            console.log(e)
        }
    }

}

module.exports = Mgstore; */