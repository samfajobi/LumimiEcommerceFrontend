const express = require("express");
const router = express.Router();
const UserOrder = require('../models/Order')


router.post("/",   async ( req, res ) => {
    const newOrder = new UserOrder(req.body)
    try{
        const UserOrder = await newOrder.save()
        res.status(200).json(UserOrder)
    } catch (err) {
        res.status(403).json(err)
    }
});   

router.put("/:id", async (res, req ) => {
    try{
        const UserOrders = await UserOrder.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },   
            { 
                new: true, 
                runValidators: true
            }
            )
        res.status(200).json(UserOrders)    
    } catch(err)  {
        res.status(200).json(err)
    }
});
  


router.delete("/:id", async (res, req) => {
    try {
          await UserOrder.findByIdAndDelete(req.params.id)
          res.status(200).json("Your Order has been Deleted Successfully")

    } catch (err) {
        res.status(403).json(err)
    }
} );



router.get("/:id", async ( res, req ) => {
    try {
        const OneUserOrder = await UserOrder.findById(req.params.id)
        res.status(200).json(OneUserOrder)
    } catch(err) {
        res.status(403).json(err)
    }    

})
    

router.get("/", async ( res, req) => {
    try{
        const UserOrders = await UserOrder.find()
        res.status(200).json(UserOrders)
    } catch(err) {
        res.status(403).json(err)
    }
})



module.exports = router;