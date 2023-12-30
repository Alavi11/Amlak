const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    number : {type : Number, required : true},

    ostan:{type : String, required : true},

    shahr:{type : String, required : true},

    mantaghe:{type : String, required : true},

    karbari:{type : String, required : true},

    melktype:{type : String , required:true },

    address:{type : String, required : true},

    zirbana:{type : Number, required : true},

    masahat:{type : Number, required : true},

    barmelk:{type : Number, required : true},

    gheimat:{type : Number, required : true},

    ejare:{type : Number, required : false},

})

const model = new mongoose.model("advertisement",schema);

module.exports = model;