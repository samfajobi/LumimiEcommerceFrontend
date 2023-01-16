import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProducts: (state, action) => {
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
            state.products.push(action.payload.product)
        }
        // deleteProducts: (state, action) => {
        //     state.products.filter(
        //         (item) => item?._id !== action.payload.Id
        //     );
        // }             
                  
    }
});

export const { addProducts } = cartSlice.actions
export default cartSlice.reducer;