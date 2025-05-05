import { createRoot } from 'react-dom/client'
import TodoRedux from './TodoRedux.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <TodoRedux />
  </Provider>
)
