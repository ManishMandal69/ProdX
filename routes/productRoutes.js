const router = require("express").Router()
const Product = require("../models/Product")

router.get("/getproduct",async(req,res)=>{
    try{
        const product = await Product.find();
        res.status(200).send(product)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/createproduct', async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).send(savedProduct)
    } catch (err) {
        res.status(500).send(err);
    }

})

router.delete("/deleteproduct/:id", async (req, res) => {
    try {
        const deleteproduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).send("Product deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.patch("/updateproduct/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedProduct);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router