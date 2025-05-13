const { now } = require("mongoose")
const { whyChooseUsModel } = require("../../modules/whyChooseUsModel")

let whyChooseUsview=async (req,res)=>{

    let searchData={}
    let title = req.query.title;
    // let code = req.query.code;

 if(title){
    searchData={
        whyChooseUsName:new RegExp(title,"i")
    }        
}
    let whyChooseUsData=await whyChooseUsModel.find(searchData)
    let staticPath=process.env.STATICPATH+"/uploads/whyChooseUs/"
    res.send({
        status:1,
        staticPath,
        msg:"whyChooseUs data",
        whyChooseUsData
    })
}

///insert
let whyChooseUsinsert=async (req,res)=>{
    let { whyChooseUsTitle,whyChooseUsOrder,whyChooseUsDescription}=req.body
    let obj={
         whyChooseUsTitle,
         whyChooseUsDescription,
        whyChooseUsOrder,
        whyChooseUsStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['whyChooseUsImage']=req.file.filename
    }}
    let whyChooseUs=await whyChooseUsModel(obj)
    let whyChooseUsRes=await whyChooseUs.save()        ///insert
    res.send({
        status:1,
        msg:"whyChooseUs save",
        whyChooseUsRes
    })
}

///delete
let whyChooseUsdelete=async (req,res)=>{
    let ids=req.body.ids
      let deleteRes=await whyChooseUsModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"whyChooseUs delete",
        deleteRes
    })
}

/////edit row data
let whyChooseUsedit=async (req,res)=>{
    let {id}=req.params
    let whyChooseUsData=await whyChooseUsModel.findOne({_id:id})
    let staticPath=process.env.STATICPATH+"/uploads/whyChooseUs/"
    res.send({
        status:1,
        staticPath,
        msg:"why-Choose-Us edit",
        whyChooseUsData
})
}

//update
let whyChooseUsupdate=async (req,res)=>{
    let {id}=req.params
    let {whyChooseUsTitle,whyChooseUsOrder,whyChooseUsDescription}=req.body
    let obj={
        whyChooseUsTitle,
        whyChooseUsDescription,
        whyChooseUsOrder,
        whyChooseUsStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['whyChooseUsImage']=req.file.filename
    }}
    let whyChooseUs=await whyChooseUsModel.updateOne({_id:id},{$set:obj})
   
    res.send({
        status:1,
        msg:"whyChooseUs update",
        whyChooseUs
    })
}





module.exports={whyChooseUsinsert,whyChooseUsdelete,whyChooseUsview,whyChooseUsedit,whyChooseUsupdate}