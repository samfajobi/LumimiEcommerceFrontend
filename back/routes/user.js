const express = require('express');
const UserModel = require('../models/User');
const { verifyTokenAndAuthorization, verifyTokenAndisAdmin } = require('./verifyJwtToken');
const router = express.Router();

// Update to Database

router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    if(req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.Sec_Pass).toString()  
    }
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            {
                new: true,
                runValidators: true
            }
            )
        res.status(200).json(updatedUser)
    } catch(err) {
        res.status(403).json(err)
    };
});


 // Delete from Database

 router.delete('/:id', verifyTokenAndAuthorization, async ( req, res ) => {
    if(req.user.password) {
        req.user.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.Sec_Pass).toString() 
    }
    try{

        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")

    } catch(err) {
        res.status(403).json(err) 
    }
});



       // To Recheck Get user Routes

  // Get One User/Document on Databse

  // Error: verifyTokenAndisAdmin is not working yet.....

router.get("/:id",  async ( req, res) => {
    try { 
        const findUser = await UserModel.findById(req.params.id);
        res.status(200).json(findUser);
    } catch(err) {
        res.status(404).json(err)
    } 
})

 
// Get All Users/Documents on Database


router.get('/',  async ( req, res) => {
    const query = req.query.new
    try{
        const findAllUser = query ? await UserModel.find().sort({_id: -1}).limit(2) : await UserModel.find()
        res.status(200).json(findAllUser)
    } catch(err) {
        res.status(403).json(query) 
    } 
})




//   Get All Stats  i.e Total Number of registered Users per month...

router.get("/stats",  async ( req, res) => {
    const date = new Date()
    const YearBefore = new Date( date.setFullYear(date.getFullYear() - 1))
    try {
        

    } catch (err) {
        res.status(403).json(err)
    }

})

module.exports = router;   