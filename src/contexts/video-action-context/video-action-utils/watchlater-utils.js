import axios from "axios";
import { Toast } from "../../../components/index"

const isInWatchLater = (id,data) => {
  return data?.find(item=>item._id === id)
}

const getWatchLaterVideos = async (dispatchAction,navigate) => {
    try {
      const response = await axios.get("/api/user/watchlater", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({type:"UPDATE_WATCHLATER_VIDEOS", payload:response.data.watchlater})
      } else {
        navigate("/signup");
      }
    } catch (err) {
      navigate("/signup")
      Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  };

const addToWatchLater = async (video,dispatchAction,navigate) => {
    try {
      const response = await axios.post(
        "/api/user/watchlater",
        { video  },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchAction({ type: "UPDATE_WATCHLATER_VIDEOS", payload: response.data.watchlater });
        Toast({
        message: "Video added to watch later.",
        type: "success",
      });
      }
      else{
          navigate("/signup")
          Toast({
        message: "Please login to continue.",
        type: "warning",
      });
      }
    } catch (err) {
     navigate("/signup")
     Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  };

const removeFromWatchLater = async (id,dispatchAction,navigate) => {
    const path = `/api/user/watchlater/${id}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({
          type: "UPDATE_WATCHLATER_VIDEOS",
          payload: response.data.watchlater,
        });
        Toast({
        message: "Video removed from watch later.",
        type: "success",
      });
      }
      else{
       
          navigate("/signup");
           Toast({
        message: "Please login to continue.",
        type: "warning",
      });
         
      }
    } catch (err) {
      navigate("/signup");
      Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  };

  export {isInWatchLater, addToWatchLater,getWatchLaterVideos,removeFromWatchLater,}