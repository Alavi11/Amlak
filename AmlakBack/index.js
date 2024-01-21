const express = require("express");
const mongoose = require("mongoose");
const App = express();
const api = require("./routes/api");
const cors = require("cors");
let cookieParser = require("cookie-parser");

App.use(cookieParser());
App.use(express.static("upload"));
App.use(cors({
    origin:"http://localhost:3000"
}))

App.use(express.json());
App.use("/api",api);



App.listen(3001,(err)=>{
    if(err){console.log(err);}
    else{
        console.log("conected");
    }
})

mongoose.connect('mongodb://127.0.0.1:27017/Amlak')
    .then(()=>{
        console.log("vasl shod");
    }).catch((err)=>{   
        console.log("vasl nashode");
})