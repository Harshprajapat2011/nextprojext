const { now } = require("mongoose")
const { categoryModel } = require("../../modules/categoryModel")

let categoryview=async (req,res)=>{

    let searchData={}
    let title = req.query.title;
    // let code = req.query.code;

 if(title){
    searchData={
        categoryName:new RegExp(title,"i")
    }        
}
    let categoryData=await categoryModel.find(searchData)
    let staticPath=process.env.STATICPATH+"/uploads/category/"
    res.send({
        status:1,
        staticPath,
        msg:"category data",
        categoryData
    })
}



///insert
let categoryinsert=async (req,res)=>{
    let {categoryName,categoryOrder}=req.body
    let obj={
        categoryName,
        
        categoryOrder,
        categoryStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['categoryImage']=req.file.filename
    }}
    try{
    let category=await categoryModel(obj)
    let categoryRes=await category.save()        ///insert
    res.send({
        status:1,
        msg:"category save",
        categoryRes
    })
    }
    catch(error){
          res.send({
        status:0,
        msg:"category name alredy exit",
        error
    })
    }
}

///delete
let categorydelete=async (req,res)=>{
    let ids=req.body.ids
      let deleteRes=await categoryModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"category delete",
        deleteRes
    })
}

///status
let categorystatus=async (req,res)=>{
    let {id}=req.params
    let {status}=req.body
    let categoryStatusUpdate=await categoryModel.updateOne({_id:id},{$set:{
        categoryStatus:status
    }})
     res.send({
        status:1,
        
        msg:"category status update",
        categoryStatusUpdate
})
}

/////edit row data
let categoryedit=async (req,res)=>{
    let {id}=req.params
    let categoryData=await categoryModel.findOne({_id:id})
    let staticPath=process.env.STATICPATH+"/uploads/category/"
    res.send({
        status:1,
        staticPath,
        msg:"category edit",
        categoryData
})
}

//update
let categoryupdate=async (req,res)=>{
    let {id}=req.params
    let {categoryName,categoryOrder}=req.body
    let obj={
        categoryName,
        
        categoryOrder,
        categoryStatus:"true"   
    }
    if(req.file){
        if(req.file.filename!=undefined && req.file.filename!=null && req.file.filename!=""){
            obj['categoryImage']=req.file.filename
    }}
    let category=await categoryModel.updateOne({_id:id},{$set:obj})
   
    res.send({
        status:1,
        msg:"category update",
        category
    })
}



module.exports={categoryinsert,categoryview,categorydelete,categoryedit,categoryupdate,categorystatus}