let express=require("express")
const { productview, productinsert, productdelete } = require("../../controllers/admin/productController")
const multer = require("multer")

let productRoutes=express.Router()

// productRoutes.get("/view",productview)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/product')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  });
  
  const upload = multer({ storage: storage })

productRoutes.post("/insert",upload.single('productImage'),productinsert)
                                          
// productRoutes.post("/delete",productdelete)             



module.exports={productRoutes}