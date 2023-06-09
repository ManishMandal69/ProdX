const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { required: true, type: String }
    , description: { required: true, type: String }
    , longdescription: { required: true, type: String }
    , attributes: {type:String, required: true }
    , price : {type:Number, required: true }
    , saleprice : {type:Number}
    , stock : {type:Number}
    , images : {type:String}
    , tax : {type:Number, default:5}
    , category : {type:Array}
    

}, { timestamps: true })

const Product = mongoose.model("Product",productSchema)
module.exports = Product

