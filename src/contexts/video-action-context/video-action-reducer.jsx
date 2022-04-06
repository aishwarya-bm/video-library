const videoActionReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LIKED_VIDEOS":
      return {
        ...state,
        liked: action.payload,
      };

    case "UPDATE_WATCHLATER_VIDEOS":
      return {
        ...state,
        watchLater: action.payload,
      };

    case "UPDATE_HISTORY_VIDEOS":
      return {
        ...state,
        history: action.payload,
      };

    case "UPDATE_PLAYLISTS":
      return {
        ...state,
        playlist: action.payload,
      };

    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map(item =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case "REMOVE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map(item =>
          item._id === action.payload._id ? action.payload : item
        ),
      };

    default:
      return state;
  }
};

export { videoActionReducer };
