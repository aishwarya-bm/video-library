import { useEffect } from "react";
import { Header, PlaylistModal, SideNav } from "../../components/index";
import "./playlist.css";
import { Link, useNavigate } from "react-router-dom";
import { getAllPlaylists, useVideoAction } from "../../contexts/index";
import { useState } from "react";

export function Playlist() {
  const { playlist, dispatchAction } = useVideoAction();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  useEffect(() => getAllPlaylists(dispatchAction, navigate), []);
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

        {showModal && (
          <PlaylistModal isAddToPlaylist={false} setShowModal={setShowModal} />
        )}
      </div>
    </>
  );
}
