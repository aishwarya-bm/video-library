import { useEffect, useState } from "react";
import "./playlist-modal.css";
import { useLogin, useVideoAction } from "../../contexts";
import { useNavigate } from "react-router-dom";
import {
  addNewPlaylist,
  addVideoToPlaylist,
  getAllPlaylists,
  isVideoInPlaylist,
  removeVideoFromPlaylist,
} from "../../contexts/index";
import { MdPlaylistAddCheck, MdPlaylistAdd } from "react-icons/md";
import { Toast } from "../index";

export function PlaylistModal({ setShowModal, video, isAddToPlaylist }) {
  const [playlistName, setPlaylistName] = useState("");
  const { playlist, dispatchAction } = useVideoAction();
  const navigate = useNavigate();
  const { isLoggedIn } = useLogin();

  const playListNameChangeHandler = event => {
    setPlaylistName(event.target.value);
  };

  const addNewPlaylistHandler = () => {
    if (!playlistName) {
      Toast({
        message: "Please enter a name",
        type: "error",
      });
      return;
    }
    addNewPlaylist(
      isLoggedIn,
      { title: playlistName, description: "new playlist" },
      dispatchAction,
      navigate
    );
    setPlaylistName("");
    setShowModal(isAddToPlaylist);
  };
  useEffect(() => getAllPlaylists(isLoggedIn, dispatchAction, navigate), []);

  return (
    <>
      <div className="d-flex modal-container">
        <div className="modal children-stacked">
          {isAddToPlaylist && (
            <>
              <div className="modal-header d-flex">
                <h5>
                  {isAddToPlaylist ? "Save to playlist" : "Create playlist"}
                </h5>
              </div>
              <div className="modal-body">
                <ul className="d-flex children-stacked grid-gap">
                  {playlist &&
                    playlist?.map(({ _id, title, videos }) => {
                      return (
                        <li key={_id} className="d-flex playlist-items">
                          {playlist && isVideoInPlaylist(video._id, videos) ? (
                            <button
                              className="btn btn-link video-action-btn highlight-action"
                              onClick={() => {
                                removeVideoFromPlaylist(
                                  isLoggedIn,
                                  _id,
                                  video._id,
                                  dispatchAction,
                                  navigate
                                );
                              }}
                            >
                              <MdPlaylistAddCheck size={25} />
                            </button>
                          ) : (
                            <button
                              className="btn btn-link video-action-btn"
                              onClick={() => {
                                addVideoToPlaylist(
                                  isLoggedIn,
                                  video,
                                  _id,
                                  dispatchAction,
                                  navigate
                                );
                              }}
                            >
                              <MdPlaylistAdd size={25} />
                            </button>
                          )}
                          <span> {title}</span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </>
          )}
          <div className="d-flex children-center modal-actions">
            <input
              type="text"
              required
              value={playlistName}
              onChange={e => {
                playListNameChangeHandler(e);
              }}
            />
            <div className="d-flex">
              <button
                className="btn btn-primary playlist-btn"
                onClick={() => addNewPlaylistHandler()}
              >
                Create
              </button>
              <button
                className="btn btn-light playlist-btn"
                onClick={() => {
                  setShowModal(false);
                  setPlaylistName("");
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
