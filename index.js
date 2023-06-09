const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const productRoutes = require("./routes/productRoutes")
const categoryRoutes = require("./routes/categoryRoutes")
require("dotenv").config()

const app = express()

const corsConfig = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200
}
let PORT=process.env.PORT||5000

app.use(cors(corsConfig));

app.use(express.json())
mongoose.connect(process.env.MONGODB_URL).then( ()=>{
    app.listen(PORT, () => {
        console.log("connected")
    })

})

app.use("/api/category/", categoryRoutes)
app.use("/api/product/", productRoutes)


app.get("/", (req,res) =>{
    res.send("hello")
})
