const mongoose = require('mongoose');

let subCategorySchema= mongoose.Schema({
    subCategoryName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    subCategoryImage:String,
    subCategoryParent:String,
    subCategoryStatus :Boolean,
    subCategoryOrder: Number

})

let subCategoryModel=mongoose.model("subCategory",subCategorySchema)
module.exports={subCategoryModel}