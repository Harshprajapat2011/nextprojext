const mongoose = require('mongoose');

let colorSchema= mongoose.Schema({
    colorName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    colorCode:String,
    colorStatus :Boolean,
    // colorStatus: {
    //     type: Boolean,
    //     default: true
    // },
    colorOrder: Number

})

let colorModel=mongoose.model("color",colorSchema)
module.exports={colorModel}