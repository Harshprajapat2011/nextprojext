let express=require("express")
const { sliderview, sliderinsert, sliderdelete } = require("../../controllers/admin/sliderController")
const multer = require("multer")

let sliderRoutes=express.Router()

sliderRoutes.get("/view",sliderview)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/slider')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  });
  
  const upload = multer({ storage: storage })

sliderRoutes.post("/insert",upload.single('sliderImage'),sliderinsert)
                                          
sliderRoutes.post("/delete",sliderdelete)             



module.exports={sliderRoutes}