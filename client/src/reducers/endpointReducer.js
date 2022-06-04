const endpointReducer = (state = window.location.pathname, action) => {
  switch (action.type) {
    case 'CURRENT_ENDPOINT':
      return action.endpoint
    default:
      return state;
  }
};

export default endpointReducer;
