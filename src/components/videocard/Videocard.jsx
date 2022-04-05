import { MdMoreVert } from "react-icons/md";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import {
  MdThumbUp,
  MdThumbDown,
  MdBookmark,
  MdClose,
  MdPlaylistAdd,
} from "react-icons/md";
import "./videocard.css";
import { useState } from "react";
import {
  addToLiked,
  isLiked,
  removeFromliked,
} from "../../contexts/wishlistContext/like-utils";
import { useVideoAction } from "../../contexts/wishlistContext/like-context";

export function Videocard({ video }) {
  const { _id, title, thumnailHigh } = video;
  const { dispatchAction } = useVideoAction();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const { liked } = useVideoAction();
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
                    onClick={() =>
                      removeFromliked(video, dispatchAction, navigate)
                    }
                  >
                    <MdThumbDown size={20} /> &nbsp;dislike
                  </button>
                </>
              ) : (
                <button
                  className="d-flex video-menu-item"
                  onClick={() => addToLiked(video, dispatchAction, navigate)}
                >
                  <MdThumbUp size={20} />
                  &nbsp; like
                </button>
              )}

              <button className="d-flex video-menu-item">
                <MdPlaylistAdd size={20} />
                &nbsp; playlist
              </button>
              <button className="d-flex video-menu-item">
                <MdBookmark size={20} /> &nbsp; watch later
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
      </div>
    </>
  );
}
