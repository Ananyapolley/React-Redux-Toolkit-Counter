


import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: "counter",
    initialState: {counterVal:0},
    reducers: {
        increment: (state) => {
            state.counterVal += 1;
        },
        decrement: (state) => {
            if (state.counterVal > 0) {
                state.counterVal -= 1;
            }
        },
        add: (state, action) => {
            state.counterVal += Number(action.payload);
        },
        subtract: (state, action) => {
            state.counterVal -= Number(action.payload);
        },
        reset: (state) => {
            state.counterVal = 0;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice;