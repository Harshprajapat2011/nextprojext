let express=require("express")
const { colorview, colorinsert, colordelete,coloredit,colorupdate, colorChangeStatus } = require("../../controllers/admin/colorController")

let colorRoutes=express.Router()

colorRoutes.get("/view",colorview)


colorRoutes.post("/insert",colorinsert)
                                          
colorRoutes.post("/delete",colordelete)             /// yeh controller ke sath   ///delete url per 
                                                                                 //  array nahi ataa is 
                                                                             // isliye post aayaega 
// colorRoutes.delete("/delete",(req,res)=>{
//     res.send("color delete")                       ye bina contoller ke likh sakte h

// })

///edit one row

colorRoutes.get("/edit/:id",coloredit)

///update on row
colorRoutes.put("/update/:id",colorupdate)

// colorRoutes.post("/toggle-status",colorChangeStatus)



module.exports={colorRoutes}