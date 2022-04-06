import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Header, SideNav } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletePlaylist, useVideoAction } from "../../contexts";

export function PlaylistPage() {
  const [playlist, setPlaylist] = useState({});
  const { _id, title, videos } = playlist;

  const { dispatchAction } = useVideoAction();
  const { playlistId } = useParams();
  const navigate = useNavigate();
  async function getPlaylistVideos() {
    try {
      const { data } = await axios.get(`/api/user/playlists/${playlistId}`, {
        headers: {
          authorization: localStorage.getItem("userToken"),
        },
      });
      setPlaylist(() => data.playlist);
    } catch (e) {
      console.log("error", e);
    }
  }

  useEffect(() => getPlaylistVideos(), []);
  return (
    <>
      <Header />
      <SideNav />

      <div className="videolist-container d-grid">
        <div className="d-flex playlist-header">
          <h4 className="text-center">{title}</h4>
          <button
            className="btn btn-error"
            onClick={() => {
              deletePlaylist(playlist._id, dispatchAction, navigate);
            }}
          >
            Delete
          </button>
        </div>

        <ul className="custom-video-list list-no-bullet d-grid ">
          {videos &&
            videos?.map(({ _id, title, videoId, author, thumnailHigh }) => {
              return (
                <div key={_id} className="card card-hor">
                  <div className="card-top d-flex">
                    <Link to={`/explore/video/${_id}`}>
                      <img
                        className="card-image"
                        src={thumnailHigh.url}
                        alt="video-cover"
                      />
                    </Link>
                    <Link to={`/explore/video/${_id}`}>
                      <div className="card-header">
                        <div className="card-title">{title}</div>
                        <div className="card-author gray-text">{author}</div>
                      </div>
                    </Link>
                    <button
                      className="btn btn-link icon-trash p-abs"
                      aria-hidden="true"
                    >
                      <MdDelete size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
    </>
  );
}
