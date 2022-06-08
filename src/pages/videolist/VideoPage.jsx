import { useState, useEffect } from "react";
import { Header, PlaylistModal, SideNav, Toast } from "../../components";
import axios from "axios";
import "./videolist.css";
import "./videopage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import {
  MdThumbUp,
  MdPlaylistAdd,
  MdBookmark,
  MdBookmarkAdd,
} from "react-icons/md";
import {
  useVideoAction,
  addToLiked,
  isLiked,
  removeFromliked,
  addToWatchLater,
  isInWatchLater,
  removeFromWatchLater,
  addToHistory,
  isInhistory,
  useLogin,
} from "../../contexts/index";

export function VideoPage() {
  const [video, setVideo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const { liked, watchLater, history, playlist, dispatchAction } =
    useVideoAction();
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();

  async function getVideoDetails() {
    try {
      const { data, status } = await axios.get(`/api/video/${id}`);

      if (status === 200) {
        setVideo(() => data.video);
      }
    } catch (e) {
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }
  }
  useEffect(() => {
    getVideoDetails();
  }, []);
  useEffect(() => {
    document.title = `Video | BehindTheScenes`;
  }, []);
  useEffect(() => {
    if (Object.keys(video).length && !isInhistory(id, history))
      addToHistory(isLoggedIn, video, dispatchAction, navigate);
  }, [video]);
  return (
    <>
      <Header />
      <SideNav />

      <div className="video-container">
        <Link to="/explore/all" className="btn btn-link">
          &lt; &nbsp; All
        </Link>
        <div className="video-player d-grid">
          <div className="d-flex children-stacked">
            <ReactPlayer
              controls
              width={"100%"}
              url={`https://youtu.be/${video.videoId}`}
            />
            <h5>{video.title}</h5>
          </div>

          <div className="video-details d-flex children-stacked grid-gap">
            <div>
              <span className="video-summary">Author:</span>{" "}
              <span>{video.author}</span>
            </div>

            <div>
              <span className="video-summary">Description:</span>
              <span>{video.description}</span>
            </div>
          </div>
        </div>

        <div className="d-flex">
          {isLiked(id, liked) ? (
            <>
              <button
                className="btn btn-link video-action-btn highlight-action"
                onClick={() => {
                  removeFromliked(isLoggedIn, id, dispatchAction, navigate);
                }}
              >
                <MdThumbUp size={20} />
              </button>
            </>
          ) : (
            <button
              className="btn btn-link video-action-btn"
              onClick={() => {
                addToLiked(isLoggedIn, video, dispatchAction, navigate);
              }}
            >
              <MdThumbUp size={20} />
            </button>
          )}
          {isInWatchLater(id, watchLater) ? (
            <>
              <button
                className="btn btn-link video-action-btn highlight-action"
                onClick={() => {
                  removeFromWatchLater(
                    isLoggedIn,
                    id,
                    dispatchAction,
                    navigate
                  );
                }}
              >
                <MdBookmark size={20} />
              </button>
            </>
          ) : (
            <button
              className="btn btn-link video-action-btn"
              onClick={() => {
                addToWatchLater(isLoggedIn, video, dispatchAction, navigate);
              }}
            >
              <MdBookmarkAdd size={20} />
            </button>
          )}
          <button
            className="btn btn-link video-action-btn"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <MdPlaylistAdd size={25} />
          </button>
        </div>
        {/* TODO: To implement notes section in future */}
        {/* <div>
          <div className="notes-section d-flex children-stacked grid-gap">
            <h4 className="notes-title">Notes</h4>
            <input
              type="text"
              placeholder="enter title"
              className="notes-input-width"
            />
            <textarea
              placeholder="enter description"
              className="notes-input-width"
            />
            <div className="d-flex">
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-light">Cancel</button>
            </div>
          </div>
        </div> */}
        {showModal && (
          <PlaylistModal
            isAddToPlaylist={true}
            setShowModal={setShowModal}
            video={video}
          />
        )}
      </div>
    </>
  );
}
