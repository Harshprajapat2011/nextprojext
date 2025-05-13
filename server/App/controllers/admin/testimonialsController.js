const { now } = require("mongoose")
const { testimonialsModel } = require("../../modules/testimonialsModel")

let testimonialsview=async (req,res)=>{

    let searchData={}
    let title = req.query.title;
    // let code = req.query.code;

 if(title){
    searchData={
        testimonialsName:new RegExp(title,"i")
    }        
}
    let testimonialsData=await testimonialsModel.find(searchData)
    let staticPath=process.env.STATICPATH+"/uploads/testimonials/"
    res.send({
        status:1,
        staticPath,
        msg:"testimonials data",
        testimonialsData
    })
}

//insert
let testimonialsinsert=async (req,res)=>{
    let {testimonialsName,testimonialsOrder,testimonialsMessage,testimonialsRating,testimonialsDesignation}=req.body
    let obj={
        testimonialsName,
        testimonialsMessage,
        testimonialsDesignation,
        testimonialsRating,
        testimonialsOrder,
        testimonialsStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['testimonialsImage']=req.file.filename
    }}
    let testimonials=await testimonialsModel(obj)
    let testimonialsRes=await testimonials.save()        ///insert
    res.send({
        status:1,
        msg:"testimonials save",
        testimonialsRes
    })
}

///delete
let testimonialsdelete=async (req,res)=>{
    let ids=req.body.ids
      let deleteRes=await testimonialsModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"testimonials delete",
        deleteRes
    })
}



module.exports={testimonialsinsert,testimonialsdelete,testimonialsview}