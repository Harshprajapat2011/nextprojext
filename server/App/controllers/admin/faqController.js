const { faqModel } = require("../../modules/faqModel")

let faqview=async (req,res)=>{
    let colorData=await faqModel.find()
    res.send({
        status:1,
        msg:"faq data",
        colorData
    })
}

let faqinsert=async (req,res)=>{
    let {faqQuestion,faqAnswer,faqOrder}=req.body
    let obj={
        faqQuestion,
        faqAnswer,
        faqStatus:"true",
        faqOrder
        
    }
    let color=await faqModel(obj)
    let colorRes=await color.save()        ///insert
    res.send({
        status:1,
        msg:"faq save",
        colorRes
    })
}

let faqdelete=async (req,res)=>{
    let ids=req.body.ids
      let deleteRes=await faqModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"faq delete",
        deleteRes
    })
}

/////edit row data
let faqedit=async (req,res)=>{
    let {id}=req.params
    let faqData=await faqModel.findOne({_id:id})
   
    res.send({
        status:1,
        msg:"material edit",
       faqData
})
}

//update
let faqupdate=async (req,res)=>{
    let {id}=req.params
    let {faqQuestion,faqAnswer,faqOrder}=req.body
    let obj={
       faqQuestion,
       faqAnswer,
       faqOrder,
       faqStatus:"true"   
    }
   
    let faq=await faqModel.updateOne({_id:id},{$set:obj})
   
    res.send({
        status:1,
        msg:"faq update",
       faq
    })
}

module.exports={faqview,faqinsert,faqdelete,faqedit,faqupdate}