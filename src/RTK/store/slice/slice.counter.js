import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { incrementByOne, decrementByOne } from "../../../asyncFunc";

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(asyncIncrementByOne.fulfilled, (state, action) => {
                state.value = action.payload.value;
            })
            .addCase(asyncIncrementByOne.pending, (state, action) => {
                state.value = "Loading...";
            })
            .addCase(asyncDecrementByOne.fulfilled, (state, action) => {
                state.value = action.payload.value;
            })
            .addCase(asyncDecrementByOne.pending, (state, action) => {
                state.value = "Loading...";
            })
    }
});

export const asyncIncrementByOne = createAsyncThunk(
    'counter/incrementByOne',
    async () => {
        const response = await incrementByOne();
        return { value: response };
    }
);

export const asyncDecrementByOne = createAsyncThunk(
    'counter/decrementByOne',
    async (count) => {
        const response = await decrementByOne(count);
        return { value: response };
    }
);

export const { INCREMENT, DECREMENT } = counterSlice.actions;

export default counterSlice.reducer;