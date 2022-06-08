import { useEffect } from "react";
import { Header, PlaylistModal, SideNav } from "../../components/index";
import "./playlist.css";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllPlaylists,
  useLogin,
  useVideoAction,
} from "../../contexts/index";
import { useState } from "react";

export function Playlist() {
  const { playlist, dispatchAction } = useVideoAction();
  const navigate = useNavigate();
  const { isLoggedIn } = useLogin();

  const [showModal, setShowModal] = useState(false);
  useEffect(() => getAllPlaylists(isLoggedIn, dispatchAction, navigate), []);
  useEffect(() => {
    document.title = `Playlists | BehindTheScenes`;
  }, []);
  return (
    <>
      <Header />
      <SideNav />
      <div className="videolist-container d-grid">
        <div className="d-flex playlist-header">
          <h4 className="text-center">Playlists</h4>
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowModal(true);
            }}
          >
            CREATE NEW
          </button>
        </div>

        {playlist?.length === 0 ? (
          <div className="not-found">
            <h5 className="text-center">Your have 0 playlists!</h5>
            <div className="d-flex children-center img-not-found">
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/playlist-3265179-2777597.png"
                alt="playlist-img"
              />
            </div>
          </div>
        ) : (
          <>
            {" "}
            <ul className="custom-video-list d-flex list-no-bullet playlist">
              {playlist &&
                playlist?.map(({ _id, title }) => {
                  return (
                    <Link to={`/playlists/${_id}`} key={_id}>
                      <li className="d-flex grid-gap children-center playlist-card">
                        {title}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </>
        )}

        {showModal && (
          <PlaylistModal isAddToPlaylist={false} setShowModal={setShowModal} />
        )}
      </div>
    </>
  );
}
