const mongoose = require("mongoose");
const autherSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    biography:{
        type:String
    },
    dateOfBirth:{type:String},
    nationality:{type:String},
    books: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }],
})
module.exports = mongoose.model("Auther",autherSchema);