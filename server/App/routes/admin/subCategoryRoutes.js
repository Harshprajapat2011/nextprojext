let express=require("express")
const { subCategoryview, subCategoryinsert, subCategorydelete } = require("../../controllers/admin/subCategoryController")
const multer = require("multer")

let subCategoryRoutes=express.Router()

subCategoryRoutes.get("/view",subCategoryview)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/subCategory')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname )
    }
  });
  
  const upload = multer({ storage: storage })

subCategoryRoutes.post("/insert",upload.single('subCategoryImage'),subCategoryinsert)
                                          
subCategoryRoutes.post("/delete",subCategorydelete)             



module.exports={subCategoryRoutes}