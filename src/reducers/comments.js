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
  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.comment]
        default:
            return state
        }
  }

  export default commentsReducer