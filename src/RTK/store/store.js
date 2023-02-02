import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slice/slice.counter';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // counter2: counterReducer
    }
});

export default store;
