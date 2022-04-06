import axios from "axios";
import { Toast } from "../../../components/index"

const isInhistory = (id,data) => {
  return data?.find(item=>item._id === id) ? true : false
}

const getHistoryVideos = async (dispatchAction,navigate) => {
    try {
      const response = await axios.get("/api/user/history", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({type:"UPDATE_HISTORY_VIDEOS", payload:response.data.history})
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

const addToHistory = async (video,dispatchAction,navigate) => {
    try {
      const response = await axios.post(
        "/api/user/history",
        { video  },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchAction({ type: "UPDATE_HISTORY_VIDEOS", payload: response.data.history });
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

const removeFromHistory = async (id,dispatchAction,navigate) => {
    const path = `/api/user/history/${id}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({
          type: "UPDATE_HISTORY_VIDEOS",
          payload: response.data.history,
        });
        Toast({
        message: "Video removed from history.",
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

  const deleteHistory = async (dispatchAction,navigate) => {
    const path = `/api/user/history/all`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({
          type: "UPDATE_HISTORY_VIDEOS",
          payload: response.data.history,
        });
        Toast({
        message: "History cleared successfully.",
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

  export {isInhistory, addToHistory,getHistoryVideos,removeFromHistory,deleteHistory}