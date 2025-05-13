let express=require("express")
const { materialview, materialinsert, materialdelete, materialupdate, materialedit } = require("../../controllers/admin/materialController")

let materialRoutes=express.Router()

materialRoutes.get("/view",materialview)


materialRoutes.post("/insert",materialinsert)
                                          
materialRoutes.post("/delete",materialdelete)                /// yeh controller ke sath

// materialRoutes.delete("/delete",(req,res)=>{
//     res.send("color delete")                       ye bina contoller ke likh sakte h

// })

///edit one row

materialRoutes.get("/edit/:id",materialedit)

///update on row
materialRoutes.put("/update/:id",materialupdate)



module.exports={materialRoutes}