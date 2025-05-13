
const { materialModel } = require("../../modules/materialModel")

let materialview=async (req,res)=>{
    let searchData={}
    let title = req.query.title;
   

    if(title){
        searchData={
            materialName:new RegExp(title,"i")
        }        
}
    let materialData=await materialModel.find(searchData)
    res.send({
        status:1,
        msg:"material data",
        materialData
    })
}

let materialinsert=async (req,res)=>{
    let {materialName,materialOrder}=req.body
    let obj={
        materialName,    
        materialStatus:"true",
        materialOrder
        
    }
    let color=await materialModel(obj)
    let materialRes=await color.save()        ///insert
    res.send({
        status:1,
        msg:"material save",
        materialRes
    })
}

let materialdelete=async (req,res)=>{
    let ids=req.body.ids
      let deleteRes=await materialModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"material delete",
        deleteRes
    })
}

/////edit row data
let materialedit=async (req,res)=>{
    let {id}=req.params
    let materialData=await materialModel.findOne({_id:id})
   
    res.send({
        status:1,
        msg:"material edit",
        materialData
})
}

//update
let materialupdate=async (req,res)=>{
    let {id}=req.params
    let {materialName,materialOrder}=req.body
    let obj={
        materialName,
        materialOrder,
        materialStatus:"true"   
    }
   
    let material=await materialModel.updateOne({_id:id},{$set:obj})
   
    res.send({
        status:1,
        msg:"material update",
        material
    })
}

module.exports={materialview,materialinsert,materialdelete,materialedit,materialupdate}