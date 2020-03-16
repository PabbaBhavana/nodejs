const express=require('express');

//const mysql=require('mysql');
const app=express.Router();
const data =require("./services/connect");

app.get('/get',(req,res)=>{
    const result=data.find();
    if(result){
        res.send(result);
        console.log("successful info");
    }
    else{
        console.log("error")
    }
});
app.get('/get/:id',(req,res)=>{
    const id=req.params.id;
    const result=data.findById(id);
    if(result){
        res.send(result);
        console.log("successful info");
    }
    else{
        console.log("error")
    }
});
app.post('/post',(req,res)=>{
    const ele=new data({
        "id":req.body.id,
        "name":req.body.name
    })
    const result=ele.save();
    if(result){
        res.send(result);
        console.log("successful info");
    }
    else{
        console.log("error")
    }
});
app.put('/put/:id',(req,res)=>{
    const id=req.params.id;
    const result=data.findOneAndUpdate({_id:id},req.body);
    if(result){
        res.send(result);
        console.log("successful info");
    }
    else{
        console.log("error")
    }
});
app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    const result=data.find();
    if(result){
        res.send(result);
        console.log("successful info");
    }
    else{
        console.log("error")
    }
});
module.exports=app;
