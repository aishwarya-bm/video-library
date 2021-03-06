import { MdMoreVert } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "./videocard.css";
import { useState } from "react";
import {
  MdThumbUp,
  MdThumbDown,
  MdBookmarkAdd,
  MdBookmarkRemove,
  MdClose,
  MdPlaylistAdd,
} from "react-icons/md";

import {
  useVideoAction,
  addToLiked,
  isLiked,
  removeFromliked,
  addToWatchLater,
  isInWatchLater,
  removeFromWatchLater,
  useLogin,
} from "../../contexts/index";
import { PlaylistModal } from "../../components";

export function Videocard({ video }) {
  const { _id, title, thumbnails, author } = video;
  const { dispatchAction } = useVideoAction();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useLogin();
  const navigate = useNavigate();
  const { liked, watchLater } = useVideoAction();
  return (
    <>
      <div className="card children-stacked card-dismiss">
        <Link to={`/explore/video/${_id}`}>
          <div className="card-media">
            <img src={thumbnails.high.url} alt="card-img" />
          </div>
        </Link>

        <div className="card-head d-flex p-rel">
          <Link to={`/explore/video/${_id}`}>
            <div className="card-header children-stacked">
              <div className="card-title">{title}</div>
              <div className="card-author gray-text">{author}</div>
            </div>
          </Link>
          <button
            className="btn btn-link icon-more"
            onClick={() => {
              setShowMenu(true);
            }}
          >
            <MdMoreVert size={25} />
          </button>

          {showMenu && (
            <div className="p-abs video-item-actions d-flex children-stacked">
              {isLiked(_id, liked) ? (
                <>
                  <button
                    className="d-flex video-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      removeFromliked(
                        isLoggedIn,
                        _id,
                        dispatchAction,
                        navigate
                      );
                    }}
                  >
                    <MdThumbDown size={20} /> &nbsp;dislike
                  </button>
                </>
              ) : (
                <button
                  className="d-flex video-menu-item"
                  onClick={() => {
                    setShowMenu(false);
                    addToLiked(isLoggedIn, video, dispatchAction, navigate);
                  }}
                >
                  <MdThumbUp size={20} />
                  &nbsp; like
                </button>
              )}

              {isInWatchLater(_id, watchLater) ? (
                <>
                  <button
                    className="d-flex video-menu-item"
                    onClick={() => {
                      setShowMenu(false);
                      removeFromWatchLater(
                        isLoggedIn,
                        _id,
                        dispatchAction,
                        navigate
                      );
                    }}
                  >
                    <MdBookmarkRemove size={20} /> &nbsp;remove from watch later
                  </button>
                </>
              ) : (
                <button
                  className="d-flex video-menu-item"
                  onClick={() => {
                    setShowMenu(false);
                    addToWatchLater(
                      isLoggedIn,
                      video,
                      dispatchAction,
                      navigate
                    );
                  }}
                >
                  <MdBookmarkAdd size={20} />
                  &nbsp; add to watch later
                </button>
              )}

              <button
                className="d-flex video-menu-item"
                onClick={() => {
                  setShowMenu(false);
                  setShowModal(true);
                }}
              >
                <MdPlaylistAdd size={20} /> &nbsp; add to playlist
              </button>
              <button
                className="d-flex video-menu-item"
                onClick={() => setShowMenu(false)}
              >
                <MdClose size={20} /> &nbsp; close
              </button>
            </div>
          )}
        </div>

        {showModal && (
          <PlaylistModal
            setShowModal={setShowModal}
            video={video}
            isAddToPlaylist={true}
          />
        )}
      </div>
    </>
  );
}
