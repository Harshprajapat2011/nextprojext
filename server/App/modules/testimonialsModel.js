const mongoose = require('mongoose');

let testimonialsSchema= mongoose.Schema({
    testimonialsName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    testimonialsDesignation:String,
    testimonialsImage:String,
    testimonialsRating:Number,
    testimonialsStatus :Boolean,
    testimonialsOrder: Number,
    testimonialsMessage:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true
    }

})

let testimonialsModel=mongoose.model("testimonials",testimonialsSchema)
module.exports={testimonialsModel}