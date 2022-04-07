import axios from "axios";
import { Toast } from "../../../components/index";

const isVideoInPlaylist = (videoId, videos) => {
  return videos?.find(item => item._id === videoId);
};

const getAllPlaylists = async (isLoggedIn, dispatchAction, navigate) => {
  if (isLoggedIn) {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({
          type: "UPDATE_PLAYLISTS",
          payload: response.data.playlists,
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

const addNewPlaylist = async (
  isLoggedIn,
  playlist,
  dispatchAction,
  navigate
) => {
  if (isLoggedIn) {
    try {
      const response = await axios.post(
        "/api/user/playlists",
        { playlist },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchAction({
          type: "UPDATE_PLAYLISTS",
          payload: response.data.playlists,
        });
        Toast({
          message: "New playlist created.",
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

const addVideoToPlaylist = async (
  isLoggedIn,
  video,
  playlistId,
  dispatchAction,
  navigate
) => {
  if (isLoggedIn) {
    try {
      const response = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video },
        {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        }
      );
      if (response.status === 200 || response.status == 201) {
        dispatchAction({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: response.data.playlist,
        });
        Toast({
          message: "Video added to playlist.",
          type: "success",
        });
      } else {
        Toast({
          message: "Some error occured, please try again later",
          type: "error",
        });
      }
    } catch (err) {
      if (err.response.status === 409) {
        Toast({
          message: "Video already in playlist.",
          type: "warning",
        });
      } else {
        Toast({
          message: "Some error occured, please try again later",
          type: "error",
        });
      }
    }
  } else {
    {
      navigate("/signup");
      Toast({
        message: "Please login to continue.",
        type: "warning",
      });
    }
  }
};

const deletePlaylist = async (
  isLoggedIn,
  playlistId,
  dispatchAction,
  navigate
) => {
  if (isLoggedIn) {
    const path = `/api/user/playlists/${playlistId}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({
          type: "UPDATE_PLAYLISTS",
          payload: response.data.playlists,
        });
        Toast({
          message: "Playlist deleted successfully.",
          type: "success",
        });
        navigate("/playlists");
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

const removeVideoFromPlaylist = async (
  isLoggedIn,
  playlistId,
  videoId,
  dispatchAction,
  navigate
) => {
  if (isLoggedIn) {
    const path = `/api/user/playlists/${playlistId}/${videoId}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      if (response.status === 200) {
        dispatchAction({
          type: "REMOVE_VIDEO_FROM_PLAYLIST",
          payload: response.data.playlist,
        });
        Toast({
          message: "Video removed from playlist.",
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

export {
  getAllPlaylists,
  addNewPlaylist,
  addVideoToPlaylist,
  deletePlaylist,
  isVideoInPlaylist,
  removeVideoFromPlaylist,
};
