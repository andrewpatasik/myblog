const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_POSTS':
      return [...state, action.payload]
    default:
      return state;
  }
};

export default postsReducer;
