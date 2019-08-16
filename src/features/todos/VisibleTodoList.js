import { connect } from 'react-redux'
import { createSelector } from 'redux-starter-kit'
import { toggleTodo } from './todosSlice'
import TodoList from './TodoList'
import { VisibilityFilters } from '../filters/filtersSlice'

const selectTodos = state => state.todos
const selectFilter = state => state.visibilityFilter

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
)

const mapStateToProps = state => ({
  todos: selectVisibleTodos(state)
})

const mapDispatchToProps = { toggleTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
