const mongoose=require('mongoose');
const array=mongoose.array;
const values=new array({
    id:Number,
    name:String
});
module.exports=moogose.model('table',values);