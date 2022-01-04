const mongoose =require('mongoose');

const Schema =mongoose.Schema;

const tutorialSchema = new Schema({
    name:{type:String,required:true},
    description:String,
    duration:String
});


module.exports= mongoose.model('tutorial',tutorialSchema,'tutorials') 