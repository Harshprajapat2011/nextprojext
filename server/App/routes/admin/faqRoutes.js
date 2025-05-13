let express=require("express")
const { faqinsert, faqview, faqdelete, faqedit, faqupdate } = require("../../controllers/admin/faqController")


let faqRoutes=express.Router()

faqRoutes.get("/view",faqview)

faqRoutes.post("/insert",faqinsert)
                                          
faqRoutes.post("/delete",faqdelete)              /// yeh controller ke sath

// faqRoutes.delete("/delete",(req,res)=>{
//     res.send("faq delete")                       ye bina contoller ke likh sakte h

// })
///edit one row

faqRoutes.get("/edit/:id",faqedit)

///update on row
faqRoutes.put("/update/:id",faqupdate)





module.exports={faqRoutes}