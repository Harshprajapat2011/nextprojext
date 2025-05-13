let express=require("express")
const { whyChooseUsview, whyChooseUsinsert, whyChooseUsdelete, whyChooseUsedit, whyChooseUsupdate } = require("../../controllers/admin/whyChooseUsController")
const multer = require("multer")

let whyChooseUsRoutes=express.Router()

whyChooseUsRoutes.get("/view",whyChooseUsview)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/whyChooseUs')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  });
  
  const upload = multer({ storage: storage })

whyChooseUsRoutes.post("/insert",upload.single('whyChooseUsImage'),whyChooseUsinsert)
                                          
whyChooseUsRoutes.post("/delete",whyChooseUsdelete)  

///edit one row

whyChooseUsRoutes.get("/edit/:id",whyChooseUsedit)

///update on row
whyChooseUsRoutes.put("/update/:id",upload.single('whyChooseUsImage'),whyChooseUsupdate)



module.exports={whyChooseUsRoutes}