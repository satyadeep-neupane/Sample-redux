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
                state.value = "waiting!!!";
            })
            .addCase(asyncDecrementByOne.fulfilled, (state, action) => {
                state.value = action.payload.value;
            })
    }
});

export const asyncIncrementByOne = createAsyncThunk(
    'theme/incrementByOne',
    async () => {
        const response = await incrementByOne();
        return { value: response };
    }
);

export const asyncDecrementByOne = createAsyncThunk(
    'theme/decrementByOne',
    async (count) => {
        const response = await decrementByOne(count);
        return { value: response };
    }
);

export const { INCREMENT, DECREMENT } = counterSlice.actions;

export default counterSlice.reducer;