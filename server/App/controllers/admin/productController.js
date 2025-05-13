const { now } = require("mongoose")
const { productModel } = require("../../modules/productModel")



let productinsert=async (req,res)=>{
    let {productName,productOrder}=req.body
    let obj={
        productName,
        
        productOrder,
        productStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['productImage']=req.file.filename
    }}
    let product=await productModel(obj)
    let productRes=await product.save()        ///insert
    res.send({
        status:1,
        msg:"product save",
        productRes
    })
}



module.exports={productinsert}