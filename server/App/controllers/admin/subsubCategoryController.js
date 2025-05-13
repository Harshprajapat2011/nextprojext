const { now } = require("mongoose")
const { subsubCategoryModel } = require("../../modules/subsubCategoryModel")


let subsubCategoryview=async (req,res)=>{

    let searchData={}
    let title = req.query.title;
    // let code = req.query.code;

 if(title){
    searchData={
        subsubCategoryName:new RegExp(title,"i")
    }        
}
    let subsubCategoryData=await subsubCategoryModel.find(searchData)
    let staticPath=process.env.STATICPATH+"/uploads/subsubCategory/"
    res.send({
        status:1,
        staticPath,
        msg:"subsubCategory data",
        subsubCategoryData
    })
}


///insert
let subsubCategoryinsert=async (req,res)=>{
    let {subsubCategoryName,subsubCategoryOrder,subsubCategoryParent,subsubCategory}=req.body
    let obj={
        subsubCategoryName,
        subsubCategoryParent,
        subsubCategory,
        subsubCategoryOrder,
        subsubCategoryStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['subsubCategoryImage']=req.file.filename
    }}
    let subsubCategorys=await subsubCategoryModel(obj)
    let subsubCategoryRes=await subsubCategorys.save()        ///insert
    res.send({
        status:1,
        msg:"subsubCategory save",
        subsubCategoryRes
    })
}

///delete
let subsubCategorydelete=async (req,res)=>{
    let ids=req.body.ids
      let deleteRes=await subsubCategoryModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"subsubCategory delete",
        deleteRes
    })
}



module.exports={subsubCategoryinsert,subsubCategoryview,subsubCategorydelete}