const router = require('express').Router();
const UserModel = require('../models/User');
const CryptoJS = require('crypto-js');
const Jwt = require("jsonwebtoken");


// Register

router.post('/signup', async ( req, res) => {
      
    const newUser = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
         req.body.password,
         process.env.Sec_Pass).toString()  
    })
   
    try {
        const userData = await newUser.save()
        res.status(200).json({
            status: 'success',
            userData
        });   

    } catch(err) {  
        res.status(404).json(err) 
    }
})



// Login

router.post('/signin', async ( req, res) => {
      
   try {
    const user = await UserModel.findOne({ email: req.body.email});
    !user && res.status(401).json("Wrong Infos")

    const decryptHassedPassword = CryptoJS.AES.decrypt(user.password, process.env.Sec_Pass)

    const MainPassword = decryptHassedPassword.toString(CryptoJS.enc.utf8);
    //  Recheck (Very Important)  Unable to send more res for a req
    //  MainPassword !== req.body.password &&  
    //   res.status(500).json("Wrong Information!!");    
   
    const accessToken = Jwt.sign({
        id: user._id,
        isAdmin: user._isAdmin
        }, 
        process.env.JWT_KEY,
        { expiresIn: process.env.JWT_EXPIRES_IN} 
        )

    const { password, ...others}  = user._doc;
    res.status(200).json({...others, accessToken});

   } catch(err) {
       res.status(500).json(err)

   }
})


module.exports = router; 