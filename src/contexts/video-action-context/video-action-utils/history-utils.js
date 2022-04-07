import axios from "axios";
import { Toast } from "../../../components/index"

const isInhistory = (id,data) => {
  return data?.find(item=>item._id === id) ? true : false
}

const getHistoryVideos = async (isLoggedIn,dispatchAction,navigate) => {
  if(isLoggedIn)
   { try {
      const response = await axios.get("/api/user/history", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({type:"UPDATE_HISTORY_VIDEOS", payload:response.data.history})
      } else {
        Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }}
    else{
      navigate("/signup")
      Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  };

const addToHistory = async (isLoggedIn,video,dispatchAction,navigate) => {
   if(isLoggedIn){ try {
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
         Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
      }
    } catch (err) {
     Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }}
    else{
      navigate("/signup")
     Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  };

const removeFromHistory = async (isLoggedIn,id,dispatchAction,navigate) => {
   if(isLoggedIn) {
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
           Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }}
    else{
    navigate("/signup")
     Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  };

  const deleteHistory = async (isLoggedIn,dispatchAction,navigate) => {
    if(isLoggedIn)
    {const path = `/api/user/history/all`;
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
          Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
         
      }
    } catch (err) {
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }}
    else{
       navigate("/signup")
      Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  };

  export {isInhistory, addToHistory,getHistoryVideos,removeFromHistory,deleteHistory}