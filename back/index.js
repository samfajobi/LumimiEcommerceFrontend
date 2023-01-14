const dotenv = require("dotenv")
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const productRoute = require("./routes/products")
const cors = require("cors")
const path = require("path")


const app = express();

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration  

const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../front/build/");

app.use(express.static(buildPath));

app.get("/", (req, res ) => {  

    res.sendFile(
        path.join(__dirname, "../front/build/index.html"),
        function(err) {
            if (err) { 
                res.status(500).send(err)
            }
        }
    )
});


app.use(express.json());
  

dotenv.config();

mongoose.connect(process.env.DATABASE_URL)
.then( () => console.log('DB Connection Successful'))
.catch( err => console.log(err))

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use("/api/cart", cartRoute);    
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);

// if (process.env.NODE === "production") {
//     // set Static File
//     app.use(express.static("frontend/build"))

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//     })
// }



const Port = process.env.PORT || 5000;
 
app.listen( Port, () => {
    console.log(`Server is running on Port ${Port}`)
})