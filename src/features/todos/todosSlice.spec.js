import todos, { addTodo, toggleTodo } from './todosSlice'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: addTodo.type,
        payload: {
          text: 'Run the tests',
          id: 0
        }
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ],
        {
          type: addTodo.type,
          payload: {
            text: 'Use Redux',
            id: 1
          }
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 1
      }
    ])

    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 1
          }
        ],
        {
          type: addTodo.type,
          payload: {
            text: 'Fix the tests',
            id: 2
          }
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 1
      },
      {
        text: 'Fix the tests',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: toggleTodo.type,
          payload: 1
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
})

describe('addTodo', () => {
  it('should generate incrementing todo IDs', () => {
    const action1 = addTodo('a')
    const action2 = addTodo('b')

    expect(action1.payload).toEqual({ id: 0, text: 'a' })
    expect(action2.payload).toEqual({ id: 1, text: 'b' })
  })
})
