const { now } = require("mongoose")
const { colorModel } = require("../../modules/colorModel")

let colorview=async (req,res)=>{

    let searchData={}
    let title = req.query.title;
    let code = req.query.code;

//     if(title){
//         searchData={
//             $or:[{colorName:new RegExp(title,"i")},{colorCode:new RegExp(title,"i")}]
//         }        
// }

    if (title) {
        searchData.colorName = new RegExp(title, "i");
    }

    if (code) {
        searchData.colorCode = new RegExp(code, "i");
    }
    let colorData=await colorModel.find(searchData)
    res.send({
        status:1,
        msg:"color data",
        colorData
    })
}

let colorinsert=async (req,res)=>{
    let {colorName,colorCode,colorOrder}=req.body
    let obj={
        colorName,
        colorCode,
        colorOrder,
        colorStatus:"true"
       
        
    }
    let color=await colorModel(obj)
    let colorRes=await color.save()        ///insert
    res.send({
        status:1,
        msg:"color save",
        colorRes
    })
}

let colordelete= async (req,res)=>{                                   ///first method id delete ka
    let ids=req.body.ids
      let deleteRes=await colorModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"color delete",
        deleteRes
    })
}

/////edit row data
let coloredit=async (req,res)=>{
    let {id}=req.params
    let colorData=await colorModel.findOne({_id:id})
   
    res.send({
        status:1,
        msg:"color edit",
        colorData
})
}

//update
let colorupdate=async (req,res)=>{
    let {id}=req.params
    let {colorName,colorOrder}=req.body
    let obj={
        colorName,
        colorOrder,
        colorStatus:"true"   
    }
   
    let color=await colorModel.updateOne({_id:id},{$set:obj})
   
    res.send({
        status:1,
        msg:"color update",
        color
    })
}

// let colordelete= async (req,res)=>{                                   ////second method id delete ka
//     let ids=["68121e90766ab61f5fdfcaa9","68122043766ab61f5fdfcaad"]
//       for(let v of ids){
//         await colorModel.deleteOne({_id:v})
//       }
//       res.send({
//         status:1,
//         msg:"color delete",
       
//     })
// }

//  let colorChangeStatus=async (req,res)=>{
    
//      try {
//          let {ids}=req.body
//         if (!Array.isArray(ids) || ids.length === 0) {
//             return res.status(400).json({ error: "IDs are required" });
//         }
//         for (let id of ids) {
//             let color = await colorModel.findById(id);
//             if (color) {
//                 console.log("Before:", colorModel.colorStatus);
//                 colorModel.colorStatus = !colorModel.colorStatus;
//                 await color.save();
//                 console.log("After:", colorModel.colorStatus);
//             }
//         }
//         res.json({ success: true });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
//  }



module.exports={colorview,colorinsert,colordelete,coloredit,colorupdate,}