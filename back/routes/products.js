const express = require("express");
const router = express.Router();
const ProductModel = require("../models/Products")



// verifyTokenAndisAdmin error should  be fixed and used before the async function.....


router.post("/",   async ( req, res ) => {
    const newProducts = new ProductModel(req.body)
    try{
        const UserProducts = await newProducts.save()
        res.status(200).json(UserProducts)
    } catch (err) {
        res.status(403).json(err)
    }
})



router.put("/:id", async ( req, res) => {
    try {
        const updateProduct = await ProductModel.findByIdAndUpdate(req.params.id, 
            {
                $set: req.body
            },
            {
                new: true
            })
         res.status(200).json(updateProduct)   
    } catch(err) {
        res.status(404).json(err)
    }
})



router.delete("/:id", async ( req, res ) => {
    try {
        await ProductModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted Successfully")
    } catch(err) {
        res.status(403).json(err)
    }
})


router.get("/:id", async ( req, res ) => {
    try {
        const Product = await ProductModel.findById(req.params.id)
        res.status(200).json(Product)
    } catch(err) {
        res.status(403).json(err)
    }
} )  

 
router.get("/", async ( req, res ) => {
    const newQuery = req.query.new
    const queryCategory = req.query.category
    try { 
        let products;   
        if(newQuery) {
            products = await ProductModel.find().sort({createdAt: -1}).limit(2)
        } else if(queryCategory) {
            products = await ProductModel.find({categories: {
                $in: [queryCategory] 
            }}).sort({createdAt: -1}) 
        } else {
            products = await ProductModel.find()
        }
        res.status(200).json(products) 
    } catch(err) {
        res.status(403).json(err)
    } 
} )
 


module.exports = router;