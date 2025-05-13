const { now } = require("mongoose")
const { countryModel } = require("../../modules/countryModel")

let countryview=async (req,res)=>{

    let searchData={}
    let title = req.query.title;
   

    if(title){
        searchData={
            countryName:new RegExp(title,"i")
        }   }

    // if (title) {
    //     searchData.countryName = new RegExp(title, "i");
    // }

    // if (code) {
    //     searchData.countryCode = new RegExp(code, "i");
    // }
    let countryData=await countryModel.find(searchData)
    res.send({
        status:1,
        msg:"country data",
        countryData
    })
}

let countryinsert=async (req,res)=>{
    let {countryName,countryOrder}=req.body
    let obj={
        countryName,
        
        countryOrder,
        countryStatus:"true"
       
        
    }
    let country=await countryModel(obj)
    let countryRes=await country.save()        ///insert
    res.send({
        status:1,
        msg:"country save",
        countryRes
    })
}

let countrydelete= async (req,res)=>{                                   ///first method id delete ka
    let ids=req.body.ids
      let deleteRes=await countryModel.deleteMany({_id:{$in:ids}})
      res.send({
        status:1,
        msg:"country delete",
        deleteRes
    })
}

/////edit row data
let countryedit=async (req,res)=>{
    let {id}=req.params
    let countryData=await countryModel.findOne({_id:id})
   
    res.send({
        status:1,
        msg:"country edit",
        countryData
})
}

//update
let countryupdate=async (req,res)=>{
    let {id}=req.params
    let {countryName,countryOrder}=req.body
    let obj={
        countryName,
        countryOrder,
        countryStatus:"true"   
    }
   
    let country=await countryModel.updateOne({_id:id},{$set:obj})
   
    res.send({
        status:1,
        msg:"country update",
        country
    })
}


// let countrydelete= async (req,res)=>{                                   ////second method id delete ka
//     let ids=["68121e90766ab61f5fdfcaa9","68122043766ab61f5fdfcaad"]
//       for(let v of ids){
//         await countryModel.deleteOne({_id:v})
//       }
//       res.send({
//         status:1,
//         msg:"country delete",
       
//     })
// }

module.exports={countryview,countryinsert,countrydelete,countryedit,countryupdate}