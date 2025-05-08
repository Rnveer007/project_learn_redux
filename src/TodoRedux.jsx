import { useDispatch, useSelector } from 'react-redux'
import { setInput, addTask, deleteTask, editTask } from './slices/todoslice'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


function TodoRedux() {
    const dispatch = useDispatch()
    const initState = useSelector(state => state.todoReducer)
    // console.log(initState)
    return (
        <>
            <input
                type="text"
                placeholder='Type Here ...'
                value={initState.input}
                onChange={(e) => dispatch(setInput(e.target.value))}
            />
            <button
                onClick={() => dispatch(addTask())}>
                Add Task
            </button>
            <ul>
                {initState.task.map((obj) => (
                    <li key={obj.id}>
                        {obj.text}
                        <span onClick={() => dispatch(deleteTask(obj.id))}><MdDelete /></span>
                        <span onClick={() => dispatch(editTask(obj.id))}><MdEdit /></span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoRedux