const initialState = {
  error: false,
  isFetching: false,
};

const notificationsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "POST_NOTIFICATIONS_REQUEST":
      return {
        ...state,
        isFetching: true,
      };
    case "POST_NOTIFICATIONS_SUCCESS":
      return {
        ...state,
        isFetching: false,
      };
    case "POST_NOTIFICATIONS_ERROR":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default notificationsReducer;