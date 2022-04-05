const videoActionReducer = (state, action) => {
  switch (action.type) {
    case "GET_LIKED_VIDEOS":
      return {
        liked: action.payload,
        likedSize: action.payload.length,
      };
    case "ADD_TO_LIKED":
      return {
        liked: action.payload,
        likedSize: action.payload.length,
      };
    case "REMOVE_FROM_LIKED":
      return {
        liked: action.payload,
        likedSize: action.payload.length,
      };
    default:
      return state;
  }
};

export { videoActionReducer };
