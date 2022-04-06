import { MdMoreVert } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CgPlayListRemove } from "react-icons/cg";
import { useVideoAction } from "../../contexts/index";
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
  addToLiked,
  isLiked,
  removeFromliked,
  addToWatchLater,
  isInWatchLater,
  removeFromWatchLater,
} from "../../contexts/index";
import { PlaylistModal } from "../../components";

export function Videocard({ video }) {
  const { _id, title, thumnailHigh } = video;
  const { dispatchAction } = useVideoAction();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { liked, watchLater } = useVideoAction();
  return (
    <>
      <div className="card children-stacked card-dismiss">
        <Link to={`/explore/video/${_id}`}>
          <div className="card-media">
            <img src={thumnailHigh.url} alt="card-img" />
          </div>
        </Link>

        <div className="card-head d-flex p-rel">
          <Link to={`/explore/video/${_id}`}>
            <div className="card-header children-stacked">
              <div className="card-title">
                {"title title title title title title title title"}
              </div>
              <div className="card-author gray-text">by Aishwarya B</div>
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
                      removeFromliked(_id, dispatchAction, navigate);
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
                    addToLiked(video, dispatchAction, navigate);
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
                      removeFromWatchLater(_id, dispatchAction, navigate);
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
                    addToWatchLater(video, dispatchAction, navigate);
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
