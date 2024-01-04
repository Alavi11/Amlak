const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    postcode : {type : Number, required : true},

    otagh : {type : Number, required : true},

    ostan:{type : String, required : true},

    shahr:{type : String, required : true},

    mantaghe:{type : String, required : true},

    karbari:{type : String, required : true},

    melktype:{type : String , required:true },

    address:{type : String, required : true},

    zirbana:{type : Number, required : true},

    masahat:{type : Number, required : true},

    gheimat:{type : Number, required : true},

    ejare:{type : Number, required : false},

    photo:{type:String, require:true},

    rate:{type : Number, required : false},

    gharardad:{type : String, required : true},

    phone:{type : String, required : true},

    year:{type : String, required : true},

    sanad:{type : String, required : false},

})

const model = new mongoose.model("advertisement",schema);

module.exports = model;