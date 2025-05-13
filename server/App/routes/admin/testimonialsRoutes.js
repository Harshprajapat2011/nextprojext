let express=require("express")
const { testimonialsview, testimonialsinsert, testimonialsdelete } = require("../../controllers/admin/testimonialsController")
const multer = require("multer")

let testimonialsRoutes=express.Router()

testimonialsRoutes.get("/view",testimonialsview)


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/testimonials')
    },
    filename: function (req, file, cb) {
      
      cb(null, Date.now()+file.originalname)
    }
  });
  
  const upload = multer({ storage: storage })

testimonialsRoutes.post("/insert",upload.single('testimonialsImage'),testimonialsinsert)
                                          
testimonialsRoutes.post("/delete",testimonialsdelete)             



module.exports={testimonialsRoutes}