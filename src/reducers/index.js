const initialState = [
    {
      id: '11',
      text: '11asas'
    },
    {
      id: '12',
      text: '12cdscds'
    }
  ]
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.comment]
        case 'DECREMENT':
            return state - 1
        default:
            return state
        }
  }
  
  export default rootReducer