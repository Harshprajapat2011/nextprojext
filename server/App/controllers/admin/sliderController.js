const { now } = require("mongoose")
const { sliderModel } = require("../../modules/sliderModel")

let sliderview=async (req,res)=>{

    let searchData={}
    let title = req.query.title;
    // let code = req.query.code;

 if(title){
    searchData={
        sliderName:new RegExp(title,"i")
    }        
}
    let sliderData=await sliderModel.find(searchData)
    let staticPath=process.env.STATICPATH+"/uploads/slider/"
    res.send({
        status:1,
        staticPath,
        msg:"slider data",
        sliderData
    })
}

//insert
let sliderinsert=async (req,res)=>{
    let { sliderName,sliderOrder}=req.body
    let obj={
         sliderName,
        sliderOrder,
        sliderStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['sliderImage']=req.file.filename
    }}
    let slider=await sliderModel(obj)
    let sliderRes=await slider.save()        ///insert
    res.send({
        status:1,
        msg:"slider save",
        sliderRes
    })
}

///delete
let sliderdelete=async (req,res)=>{
    let ids=req.body.ids
      let deleteRes=await sliderModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"slider delete",
        deleteRes
    })
}



module.exports={sliderinsert,sliderdelete,sliderview}