import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 1 }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        INCREMENT: (state) => {
            state.value += 1;
          },
        DECREMENT: (state) => {
            if(state.value > 0)
                state.value -= 1;
        },
    }
});

export const { INCREMENT, DECREMENT } = counterSlice.actions;

export default counterSlice.reducer;