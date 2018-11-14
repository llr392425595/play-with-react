const initialState = todo => (todo);

const filterMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_INACTIVE':
      return (todo) => (todo.completed);
    case 'SHOW_ACTIVE':
      return (todo) => (!todo.completed);
    default:
      return initialState
  }
};

export default filterMethodReducer
