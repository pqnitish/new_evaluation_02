const mongoose = require("mongoose");
const bookSchema =  new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    ISBN:{
        type:String,
        required : true,
        unique : true
    },
    summary:{type:true},
    publicationDate:{type:Date},
    genres:[String],
    copiesAvailable:{type:Number,default:1},
    auther:{type:mongoose.Schema.Types.ObjectId,
        ref:"Auther"
    },
    borrowedBy:[
        {type:mongoose.Schema.Types.ObjectId,ref:"User"}
    ],
});
module.exports = mongoose.model("Book",bookSchema);