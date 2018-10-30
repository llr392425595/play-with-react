const initialState = [
  {
    id: 0,
    text: '第一篇文章的评论！',
    postId: '1'

  },
  {
    id: 1,
    text: '第二篇文章的评论！',
    postId: '2'
  }
];

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment];
    default:
      return state
  }
};

export default commentsReducer
