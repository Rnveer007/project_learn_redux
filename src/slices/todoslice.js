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
        },
        addTask: function (state) {
            state.task.push({
                id: Date.now(),
                task: state.input,
            })
            state.input = ""

        }
    }
})
export const todoReducer = todoSl.reducer;
export const { setInput, addTask } = todoSl.actions;
