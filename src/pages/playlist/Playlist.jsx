import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Header, SideNav } from "../../components";
import "./playlist.css";
import { Link, useNavigate } from "react-router-dom";

export function Playlist() {
  const [playlist, setPlaylist] = useState([]);
  async function getVideosList() {
    try {
      const { data } = await axios.get("/api/videos");
      setPlaylist(() => data.videos);
    } catch (e) {
      console.log("error", e);
    }
  }
  const playlistId = "";

  useEffect(() => getVideosList(), []);
  return (
    <>
      <Header />
      <SideNav />
      <div className="videolist-container d-grid">
        <h4 className="text-center">Playlists</h4>
        <ul className="custom-video-list list-no-bullet grid-gap playlist">
          {playlist &&
            playlist?.map(({ _id, title, videoId, author, thumnailHigh }) => {
              return (
                <Link to={`/explore/video/${_id}`} key={_id}>
                  <div className="d-flex grid-gap playlist-card">
                    <div>{"title title"}</div>
                    <button className="btn btn-icon icon-trash">
                      <MdDelete size={20} />
                    </button>
                  </div>
                </Link>
              );
            })}
        </ul>
      </div>
    </>
  );
}
