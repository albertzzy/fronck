const SessionModel = require('../models/session');


class MgStore{

    constructor(ctx){
        this.ctx = ctx;

    }


    async get(key,maxAge,{rolling}){
        console.log('get');

        let sid = this.ctx.cookies.get(key);
        try{
            let sess = await SessionModel.findOne({sid:sid});
            
        }catch(e){
            console.log(e)
        }

        return sess;

    }

    async set(key,sess,maxAge,{rolling,changed}){

        console.log('set');

        let sid = this.ctx.cookies.get(key);

        let se = new SessionModel({
            sid:sid,
            session:sess,
            expires:new Date(new Date().getTime()+maxAge)
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
        let sid = this.ctx.cookies.get(key);
        try{
            await SessionModel.findOneAndRemove({sid:sid})
            
        }catch(e){

            console.log(e)
        }


    }


}

module.exports = MgStore;