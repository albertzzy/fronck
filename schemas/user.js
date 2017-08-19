const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{unique:true,type:String},
    groups:{type:Array,default:[]},
    projects:{type:Array,default:[]},
    password:{type:String},
    email:{unique:true,type:String}    
});


UserSchema.pre('save',function(next){
    var user = this;

    
    


});

UserSchema.methods = {
    comparePassword:function(password,cb){
        console.log(this);

        bcrypt.compare(password,this.password,function(err,res){
            if(err){
                cb(err)
            }else{
                cb(null,res)
            }
        })

    }


}




module.exports = UserSchema;