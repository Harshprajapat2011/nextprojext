let express=require("express")
const { subsubCategoryview, subsubCategoryinsert, subsubCategorydelete } = require("../../controllers/admin/subsubCategoryController")
const multer = require("multer")

let subsubCategoryRoutes=express.Router()

subsubCategoryRoutes.get("/view",subsubCategoryview)

///insert
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/subsubCategory')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname )
    }
  });
  
  const upload = multer({ storage: storage })

subsubCategoryRoutes.post("/insert",upload.single('subsubCategoryImage'),subsubCategoryinsert)
  
///delete                                        
subsubCategoryRoutes.post("/delete",subsubCategorydelete)             



module.exports={subsubCategoryRoutes}