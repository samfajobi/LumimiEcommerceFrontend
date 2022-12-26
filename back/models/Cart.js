const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        product: [
            { productId: { type: String, required: true },
              prodQuanty: { type: Number, default: 1 }
            }
        ]
    },
    { timestamps: true }  

);

const CartModel = mongoose.model('CartModel', CartSchema);
module.exports = CartModel;

