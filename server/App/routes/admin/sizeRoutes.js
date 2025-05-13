let express=require("express")
const { sizeview, sizeinsert, sizedelete } = require("../../controllers/admin/sizeController")

let sizeRoutes=express.Router()

sizeRoutes.get("/view",sizeview)
sizeRoutes.post("/insert",sizeinsert)


sizeRoutes.delete("/delete",sizedelete)                  /// yeh controller ke sath

// sizeRoutes.delete("/delete",(req,res)=>{                   // ye bina contoller ke likh sakte h
//     res.send("size delete")

// })



module.exports={sizeRoutes}