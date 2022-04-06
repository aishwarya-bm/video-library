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
} from "./video-action-context/like-utils";

export {
  isInWatchLater,
  addToWatchLater,
  getWatchLaterVideos,
  removeFromWatchLater,
} from "./video-action-context/watchlater-utils";

export {
  isInhistory,
  addToHistory,
  getHistoryVideos,
  removeFromHistory,
  deleteHistory,
} from "./video-action-context/history-utils";
