const mongoose =require('mongoose');

const Schema =mongoose.Schema;

const userSchema = new Schema({
    email:{type:String,required:true},
    // email:String,
    password:String
});


module.exports= mongoose.model('user',userSchema,'users') 