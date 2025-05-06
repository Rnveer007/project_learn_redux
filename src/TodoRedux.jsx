import { useDispatch, useSelector } from 'react-redux'
import { setInput, addTask } from './slices/todoslice'
function TodoRedux() {
    const dispatch = useDispatch()
    const initState = useSelector(state => state.todoReducer)
    console.log(initState)
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
                {initState.task.map((obj) =>
                (
                    <li key={obj.id}>
                        {obj.text}
                    </li>
                )
                )}
            </ul>
        </>
    )
}

export default TodoRedux