const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{type : String, required : true},

    phone:{type : String, required : true},

    email:{type : String, required : true},

    password:{type : String, required : true},

    posts:{type : Array , required:false }

})

const model = new mongoose.model("register",schema);

module.exports = model;