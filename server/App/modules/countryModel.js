const mongoose = require('mongoose');

let countrySchema= mongoose.Schema({
    countryName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    
    countryStatus :Boolean,
    countryOrder: Number

})

let countryModel=mongoose.model("country",countrySchema)
module.exports={countryModel}