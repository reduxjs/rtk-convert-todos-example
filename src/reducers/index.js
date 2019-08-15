import { combineReducers } from 'redux'
import todosReducer from 'features/todos/todosSlice'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter
})
