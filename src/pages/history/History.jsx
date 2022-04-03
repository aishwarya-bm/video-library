import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Header, SideNav } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import "./history.css";

export function History() {
  const [likedVideos, setLikedVideos] = useState([]);
  async function getVideosList() {
    try {
      const { data } = await axios.get("/api/videos");
      setLikedVideos(() => data.videos);
    } catch (e) {
      console.log("error", e);
    }
  }

  useEffect(() => getVideosList(), []);
  return (
    <>
      <Header />
      <SideNav />

      <div className="videolist-container d-grid">
        <div className="d-flex history-header">
          <h4 className="text-center">History</h4>
          <button className="btn btn-link">Clear all</button>
        </div>
        <ul className="custom-video-list list-no-bullet d-grid ">
          {likedVideos &&
            likedVideos?.map(
              ({ _id, title, videoId, author, thumnailHigh }) => {
                return (
                  <Link to={`/explore/video/${_id}`} key={_id}>
                    <div className="card card-hor">
                      <div className="card-top d-flex">
                        <img
                          className="card-image"
                          src={thumnailHigh.url}
                          alt="video-cover"
                        />
                        <div className="card-header">
                          <div className="card-title">{title}</div>
                          <div className="card-author gray-text">{author}</div>
                        </div>
                        <button
                          className="btn btn-link icon-trash p-abs"
                          aria-hidden="true"
                        >
                          <MdDelete size={20} />
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
        </ul>
      </div>
    </>
  );
}
