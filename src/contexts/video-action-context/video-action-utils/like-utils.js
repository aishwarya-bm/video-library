import axios from "axios";
import { Toast } from "../../../components/index";

const isLiked = (id, data) => {
  return data?.find(item => item._id === id);
};

const getLikedVideos = async (isLoggedIn, dispatchAction, navigate) => {
  if (isLoggedIn) {
    try {
      const response = await axios.get("/api/user/likes", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({
          type: "UPDATE_LIKED_VIDEOS",
          payload: response.data.likes,
        });
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
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const addToLiked = async (isLoggedIn, video, dispatchliked, navigate) => {
  if (isLoggedIn) {
    try {
      const response = await axios.post(
        "/api/user/likes",
        { video },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchliked({
          type: "UPDATE_LIKED_VIDEOS",
          payload: response.data.likes,
        });
        Toast({
          message: "Video added to your liked videos.",
          type: "success",
        });
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
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

const removeFromliked = async (isLoggedIn, id, dispatchAction, navigate) => {
  if (isLoggedIn) {
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
          message: "Video removed from your liked videos.",
          type: "success",
        });
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
    }
  } else {
    navigate("/signup");
    Toast({
      message: "Please login to continue.",
      type: "warning",
    });
  }
};

export { isLiked, addToLiked, getLikedVideos, removeFromliked };
