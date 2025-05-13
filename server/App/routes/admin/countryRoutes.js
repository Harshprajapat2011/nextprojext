let express=require("express")
const { countryview, countryinsert, countrydelete, countryedit, countryupdate } = require("../../controllers/admin/countryController")

let countryRoutes=express.Router()

countryRoutes.get("/view",countryview)


countryRoutes.post("/insert",countryinsert)
                                          
countryRoutes.post("/delete",countrydelete)             /// yeh controller ke sath   ///delete url per 
                                                                                 //  array nahi ataa is 
                                                                             // isliye post aayaega 
// countryRoutes.delete("/delete",(req,res)=>{
//     res.send("country delete")                       ye bina contoller ke likh sakte h

// })

countryRoutes.get("/edit/:id",countryedit)

///update on row
countryRoutes.put("/update/:id",countryupdate)

module.exports={countryRoutes}