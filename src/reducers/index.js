import { combineReducers } from 'redux'
import todosReducer from 'features/todos/todosSlice'
import visibilityFilterReducer from 'features/filters/filtersSlice'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})
