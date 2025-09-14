// Model for reviews
const { number, string, required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reveiwSchema = {
    comment : String, 
    rating : {
        type : Number,
        min : 1, 
        max : 5,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User",
    }
}

// exporting the module
module.exports = mongoose.model("Review", reveiwSchema);