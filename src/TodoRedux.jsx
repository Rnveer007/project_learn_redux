import { useDispatch, useSelector } from 'react-redux'
import { setInput } from './slices/todoslice'
function TodoRedux() {
    const dispacth = useDispatch()
    const initState = useSelector(state => state.todoReducer)
    return (
        <>
            <input
                type="text"
                placeholder='Type Here ...'
                value={ initState.input}
                onChange={(e) => dispacth(setInput(e.target.value))}
            />
            <button>Add Task</button>
        </>
    )
}

export default TodoRedux