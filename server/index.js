let express=require("express")
let cors=require("cors")
const mongoose = require('mongoose');


const { adminRoutes } = require("./App/routes/admin/adminRoutes")
require("dotenv").config()

let app=express()
app.use(cors())
app.use(express.json())
app.use("/uploads/category",express.static("uploads/category"))   ////allowed fornted folder access 
app.use("/uploads/subCategory",express.static("uploads/subCategory"))
app.use("/uploads/subsubCategory",express.static("uploads/subsubCategory"))
app.use("/uploads/testimonials",express.static("uploads/testimonials"))
app.use("/uploads/whyChooseUs",express.static("uploads/whyChooseUs")) 
app.use("/uploads/slider",express.static("uploads/slider"))
app.use("/uploads/product",express.static("uploads/product"))
app.use("/admin",adminRoutes)




mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(process.env.PORT)                  //http://localhost:8000
    })
})
