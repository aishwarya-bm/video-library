import { createContext, useContext, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { videoActionReducer } from "./video-action-reducer";

const VideoActionContext = createContext();

const VideoActionProvider = ({ children }) => {
  const [stateAction, dispatchAction] = useReducer(videoActionReducer, {
    liked: [],
    watchLater: [],
    history: [],
    playlist: [],
  });
  const navigate = useNavigate();

  return (
    <>
      <VideoActionContext.Provider
        value={{
          liked: stateAction.liked,
          watchLater: stateAction.watchLater,
          history: stateAction.history,
          playlist: stateAction.playlist,
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
