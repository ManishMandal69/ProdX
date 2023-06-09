const router = require("express").Router()
const Category = require("../models/Category")

router.get("/getcategory",async(req,res)=>{
    try{
        const category = await Category.find();
        res.status(200).send(category)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/createCategory', async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).send(savedCategory)
    } catch (err) {
        res.status(500).send(err);
    }

})

router.delete("/deletecategory/:id", async (req, res) => {
    try {
        const deleteCategory = await Category.findByIdAndDelete(req.params.id)
        res.status(200).send("Category deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.patch("/updateCategory/:id", async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedCategory);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router