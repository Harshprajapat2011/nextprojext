let express=require("express")
const { categoryview, categoryinsert, categorydelete, categoryedit, categoryupdate, categorystatus } = require("../../controllers/admin/categoryController")
const multer = require("multer")

let categoryRoutes=express.Router()

categoryRoutes.get("/view",categoryview)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/category')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  });
  
  const upload = multer({ storage: storage })

categoryRoutes.post("/insert",upload.single('categoryImage'),categoryinsert)


////delete
categoryRoutes.post("/delete",categorydelete)   

////status
categoryRoutes.put("/status/:id",categorystatus)

///edit one row

categoryRoutes.get("/edit/:id",categoryedit)

///update on row
categoryRoutes.put("/update/:id",upload.single('categoryImage'),categoryupdate)


module.exports={categoryRoutes}