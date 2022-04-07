export { useLogin, LoginProvider } from "./login-context/login-context";
export {
  useVideoAction,
  VideoActionProvider,
} from "./video-action-context/video-action-context";

export {
  isLiked,
  addToLiked,
  getLikedVideos,
  removeFromliked,
} from "./video-action-context/video-action-utils/like-utils";

export {
  isInWatchLater,
  addToWatchLater,
  getWatchLaterVideos,
  removeFromWatchLater,
} from "./video-action-context/video-action-utils/watchlater-utils";

export {
  isInhistory,
  addToHistory,
  getHistoryVideos,
  removeFromHistory,
  deleteHistory,
} from "./video-action-context/video-action-utils/history-utils";

export {
  getAllPlaylists,
  addNewPlaylist,
  addVideoToPlaylist,
  deletePlaylist,
  isVideoInPlaylist,
  removeVideoFromPlaylist,
} from "./video-action-context/video-action-utils/playlist-utils";
