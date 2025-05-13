const mongoose = require('mongoose');

let sliderSchema= mongoose.Schema({
    sliderName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    sliderImage:String,
    sliderOrder: Number,
    sliderStatus :Boolean
   

})

let sliderModel=mongoose.model("slider",sliderSchema)
module.exports={sliderModel}