import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { videoActionReducer } from "./like-reducer";
import { getLikedVideos } from "./like-utils";

const VideoActionContext = createContext();

const VideoActionProvider = ({ children }) => {
  const [stateAction, dispatchAction] = useReducer(videoActionReducer, {
    liked: [],
    likedSize: 0,
    watchLater: [],
    watchLaterSize: [],
  });
  const navigate = useNavigate();

  return (
    <>
      <VideoActionContext.Provider
        value={{
          liked: stateAction.liked,
          likedSize: stateAction.likedSize,
          watchLater: stateAction.watchLater,
          watchLaterSize: stateAction.watchLaterSize,
          dispatchAction,
        }}
      >
        {children}
      </VideoActionContext.Provider>
    </>
  );
};

const useVideoAction = () => useContext(VideoActionContext);

export { VideoActionProvider, useVideoAction };
