const express=require("express");
const path=express();
path.use(express.json());
require('./database/create');
const data =require("./services/connect");
var router=require("./routes/route");
path.use(router);
path.listen(3000,()=>{
    console.log("successfull");
});
