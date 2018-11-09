const initialState = [{
  id: 1,
  title: '看戏',
  date: '2018-11-11',
  completed: false
}];

  const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          date: action.date,
          completed: false
        }
        ];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state
  }
};

export default todoReducer
