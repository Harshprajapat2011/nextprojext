const mongoose = require('mongoose');

let faqSchema= mongoose.Schema({
    faqQuestion:{
        type:String,
        minlength:2,
        maxlength:50,
        required:true
    },
    faqAnswer:{
        type:String,
        minlength:2,
        maxlength:100,
        required:true
    },
    
    faqStatus :Boolean,
    faqOrder: Number

})

let faqModel=mongoose.model("faq",faqSchema)
module.exports={faqModel}