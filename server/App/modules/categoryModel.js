const mongoose = require('mongoose');

let categorySchema= mongoose.Schema({
    categoryName:{
        type:String,
        minlength:3,
        maxlength:20,
         unique: true,
        required:true
    },
    categoryImage:String,
    categoryStatus :Boolean,
    categoryOrder: Number

})

let categoryModel=mongoose.model("category",categorySchema)
module.exports={categoryModel}