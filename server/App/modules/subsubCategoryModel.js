const mongoose = require('mongoose');

let subsubCategorySchema= mongoose.Schema({
    subsubCategoryName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    subsubCategoryImage:String,
    subsubCategoryParent:String,
    subsubCategory:String,
    subsubCategoryStatus :Boolean,
    subsubCategoryOrder: Number

})

let subsubCategoryModel=mongoose.model("subsubCategory",subsubCategorySchema)
module.exports={subsubCategoryModel}