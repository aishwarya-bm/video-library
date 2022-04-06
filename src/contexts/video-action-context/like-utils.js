import axios from "axios";
import { Toast } from "../../components/index"

const isLiked = (id,data) => {
  return data?.find(item=>item._id === id)
}

const getLikedVideos = async (dispatchAction,navigate) => {
    try {
      const response = await axios.get("/api/user/likes", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({type:"UPDATE_LIKED_VIDEOS", payload:response.data.likes})
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

const addToLiked = async (video,dispatchliked,navigate) => {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video  },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchliked({ type: "UPDATE_LIKED_VIDEOS", payload: response.data.likes });
        Toast({
        message: "Video added to liked playlist.",
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

const removeFromliked = async (id,dispatchAction,navigate) => {
    const path = `/api/user/likes/${id}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({
          type: "UPDATE_LIKED_VIDEOS",
          payload: response.data.likes,
        });
        Toast({
        message: "Video removed from liked playlist.",
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



  export {isLiked, addToLiked,getLikedVideos,removeFromliked,}