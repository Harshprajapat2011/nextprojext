const mongoose = require('mongoose');

let materialSchema= mongoose.Schema({
    materialName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    // colorCode:String,
    materialStatus :Boolean,
    materialOrder: Number

})

let materialModel=mongoose.model("material",materialSchema)
module.exports={materialModel}