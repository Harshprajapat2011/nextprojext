const mongoose = require('mongoose');

let productSchema= mongoose.Schema({
    productName:{
        type:String,
        minlength:3,
        maxlength:20,
        required:true
    },
    productImage:String,
    productBackImage:String,
    galleryImage:String,
    productCategory:String,
    productMaterial:String,
    productType:String,
    productTopRated:String,
    productPrice:Number,
    productStock:Number,
    productParentCategory:String,
    productSubSubCategory:String,
    productColor:String,
    productSelling:String,
    productUpSell:String,
    productSalesPrice:Number,
    productDesccription:String,
    productStatus :Boolean,
    productOrder: Number

})

let productModel=mongoose.model("product",productSchema)
module.exports={productModel}