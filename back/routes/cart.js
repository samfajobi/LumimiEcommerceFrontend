const express = require('express');
const router = express.Router();
const UserCart = require("../models/Cart")


router.put("/:id", async ( req, res) => {
    try{
        const UpdateUserCart = await  UserCart.findByIdAndUpdate(req,params.id)
        res.status(200).json(UpdateUserCart)
    } catch(err) {
        res.status(403).json(err)
    }
}); 
   
router.delete("/:id", async ( res, req ) => {
    try{ 
        await UserCart.findByIdAndDelete(req.params.id)
        res.status(200).json("Your Cart has been deleted Successfully")
    } catch(err) {
        res.status(404).json(err)
    }
});
  
router.get("/:id", async (res, req ) => {
    try {
        const UserCartOrder = await UserCart.findById(req.params.id)
        res.status(200).json(UserCartOrder)
    } catch(err) {  
        res.status(403).json(err)
    }   
})
    
router.get("/",   async ( res, req ) => {
    try {
        const UserCartOrders  = await UserCart.find()
        res.status(200).json(UserCartOrders )
    } catch(err) {
        res.status(403).json(err)
    }
})

 
module.exports = router;