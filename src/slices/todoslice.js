import { createSlice } from "@reduxjs/toolkit";

const todoSl = createSlice({
    name: "todoList",
    initialState: {
        input: "",
        task: [],
        isEditing: false,
        editId: null
    },
    reducers: {
        setInput: function (state, action) {
            state.input = action.payload
        },
        addTask: function (state) {
            state.isEditing ?
                (state.task = state.task.map((item) =>
                    item.id === state.editId
                        ? { ...state.task, text: state.input }
                        : item
                ))
                : (state.task = [...state.task, { id: Date.now(), text: state.input }]);
            state.isEditing = false;
            state.editId = null;
            state.input = "";
        },
        deleteTask: function (state, action) {
            state.task = state.task.filter((obj) => obj.id !== action.payload)
        },
        editTask: function (state, action) {
            const taskToEdit = state.task.find((item) => item.id === action.payload);
            state.input = taskToEdit.text
            state.isEditing = true;
            state.editId = action.payload
        }
    }
})
export const todoReducer = todoSl.reducer;
export const { setInput, addTask, deleteTask, editTask } = todoSl.actions;
