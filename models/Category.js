const mongoose = require("mongoose")
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: { required: true, type: String }
    , image: { required: true, type: String }
    , description: { required: true, type: String }
    
}, { timestamps: true })

const Category = mongoose.model("Category",categorySchema)
module.exports = Category