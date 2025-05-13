const mongoose = require('mongoose');

let parentCatSchema= mongoose.Schema({
    parentCatName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    parentCatImg:String,
    parentCatStatus :Boolean,
    parentCatOrder: Number

})

let parentCatModel=mongoose.model("parent-cat",parentCatSchema)
module.exports={parentCatModel}