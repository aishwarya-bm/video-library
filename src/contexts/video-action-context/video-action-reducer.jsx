const videoActionReducer = (state, action) => {
  switch (action.type) {
    case "GET_LIKED_VIDEOS":
      return {
        ...state,
        liked: action.payload,
        likedSize: action.payload.length,
      };
    case "ADD_TO_LIKED":
      return {
        ...state,
        liked: action.payload,
        likedSize: action.payload.length,
      };
    case "REMOVE_FROM_LIKED":
      return {
        ...state,
        liked: action.payload,
        likedSize: action.payload.length,
      };
    case "GET_WATCHLATER_VIDEOS":
      return {
        ...state,
        watchLater: action.payload,
        watchLaterSize: action.payload.length,
      };
    case "ADD_TO_WATCHLATER":
      return {
        ...state,
        watchLater: action.payload,
        watchLaterSize: action.payload.length,
      };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state,
        watchLater: action.payload,
        watchLaterSize: action.payload.length,
      };

    case "GET_HISTORY_VIDEOS":
      return {
        ...state,
        history: action.payload,
        historySize: action.payload.length,
      };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: action.payload,
        historySize: action.payload.length,
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        history: action.payload,
        historySize: action.payload.length,
      };
    case "CLEAR_HISTORY":
      return {
        ...state,
        history: action.payload,
        historySize: 0,
      };
    default:
      return state;
  }
};

export { videoActionReducer };
