const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        unique:true  
    },
    groups:{
        type:Array,
        default:[]
    },
    projects:{
        type:Array,
        default:[]
    },
    password:String,
    email:String
});


UserSchema.pre('save',function(next){
    var self = this;
    
    // encrypt password

    var password = this.password;

    bcrypt.genSalt(10,function(err,salt){
        if(err){
            return next(err);
        }

        bcrypt.hash(password, salt, function(err, hash) {
            if(err){
                return next(err);
            }

            
            self.password = hash;

            next();
            
        });

    })
    // next();

});



UserSchema.methods = {
    comparePassword:function(password){
        var self = this;

        return new Promise(function(resolve,reject){

            bcrypt.compare(password,self.password,function(err,res){
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })

        })
    }


}




module.exports = UserSchema;