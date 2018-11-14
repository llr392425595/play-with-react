import shortid from 'shortid'

export const addTodo = todo => ({
  type: 'ADD_TODO',
  id: shortid(),
  title: todo,
  date: '2018-11-11'
});


export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});


export const changeFilterMethod = type => ({
  type: type
});
