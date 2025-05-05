import { useReducer } from 'react'
const initState = {
  input: '',
  task: [],
  editId: null
}

function reducerFN(state, action) {
  switch (action.type) {
    case "Input":
      return {
        ...state,
        input: action.payload
      }
    case "addTask":
      if (state.editId !== null) {
        return {
          ...state,
          task: state.task.map((task) =>
            task.id === state.editId ? { ...task, task: state.input } : task
          ),
          input: '',
          editId: null
        };
      }
      return {
        ...state,
        task: [...state.task, { id: Date.now(), task: state.input }],
        input: '',
      };

    case "deleteTask":
      return {
        ...state,
        task: state.task.filter((obj) => obj.id !== action.payload)
      }
    case "editTask":
      const taskToEdit = state.task.find((obj) => obj.id === action.payload);
      return {
        ...state,
        input: taskToEdit.task,
        editId: action.payload
      };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducerFN, initState)
  return (
    <>
      <input
        type="text"
        placeholder='Type here...'
        value={state.input}
        onChange={(e) => dispatch({
          type: 'Input',
          payload: e.target.value
        })}
      />
      <button
        onClick={() => dispatch({
          type: 'addTask'
        })}
      >
        Add Task
      </button>

      <ul>
        {state.task.map((obj) => (
          <li key={obj.id}>
            {obj.task}
            <button
              onClick={() => dispatch({
                type: 'editTask',
                payload: obj.id
              })}
            >
              Edit Task
            </button>
            <button
              onClick={() => dispatch({
                type: 'deleteTask',
                payload: obj.id
              })}
            >
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App