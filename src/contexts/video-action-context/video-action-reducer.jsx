const videoActionReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LIKED_VIDEOS":
      return {
        ...state,
        liked: action.payload,
        likedSize: action.payload.length,
      };

    case "UPDATE_WATCHLATER_VIDEOS":
      return {
        ...state,
        watchLater: action.payload,
        watchLaterSize: action.payload.length,
      };

    case "UPDATE_HISTORY_VIDEOS":
      return {
        ...state,
        history: action.payload,
        historySize: action.payload.length,
      };

    default:
      return state;
  }
};

export { videoActionReducer };
