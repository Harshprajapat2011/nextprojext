const mongoose = require('mongoose');

let whyChooseUsSchema= mongoose.Schema({
    whyChooseUsTitle:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    whyChooseUsImage:String,
    whyChooseUsDescription:String,

    whyChooseUsStatus :Boolean,
    whyChooseUsOrder: Number

})

let whyChooseUsModel=mongoose.model("whyChooseUs",whyChooseUsSchema)
module.exports={whyChooseUsModel}