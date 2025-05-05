import { createSlice } from "@reduxjs/toolkit";

const todoSl = createSlice({
    name: "todoSlice",
    initialState: {
        input: "",
        task: []
    },
    reducers: {
        setInput: function (state, action) {
            state.input = action.payload
        }
    }
})
export const todoReducer = todoSl.reducer;
export const {setInput} = todoSl.actions;
