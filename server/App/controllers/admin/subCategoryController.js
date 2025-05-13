const { now } = require("mongoose")
const { subCategoryModel } = require("../../modules/subCategoryModel")


let subCategoryview=async (req,res)=>{

    let searchData={}
    let title = req.query.title;
    // let code = req.query.code;

 if(title){
    searchData={
        subCategoryName:new RegExp(title,"i")
    }        
}
    let subCategoryData=await subCategoryModel.find(searchData)
    let staticPath=process.env.STATICPATH+"/uploads/subCategory/"
    res.send({
        status:1,
        staticPath,
        msg:"subCategory data",
        subCategoryData
    })
}

///insert
let subCategoryinsert=async (req,res)=>{
    let {subCategoryName,subCategoryOrder,subCategoryParent}=req.body
    let obj={
        subCategoryName,
        subCategoryParent,
        subCategoryOrder,
        subCategoryStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['subCategoryImage']=req.file.filename
    }}
    let subCategory=await subCategoryModel(obj)
    let subCategoryRes=await subCategory.save()        ///insert
    res.send({
        status:1,
        msg:"subCategory save",
        subCategoryRes
    })
}
///delete
let subCategorydelete=async (req,res)=>{
    let ids=req.body.ids
      let deleteRes=await subCategoryModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"SubCategory delete",
        deleteRes
    })
}



module.exports={subCategoryinsert,subCategorydelete,subCategoryview}