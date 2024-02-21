import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"; // Import the reducer from CartSlice file
// import cartReducer from './CartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default store;
