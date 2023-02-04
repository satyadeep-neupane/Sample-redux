import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/slice.counter';
import cartReducer from './slice/slice.counter';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer
    }
});

export default store;
