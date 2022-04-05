import { useState, useEffect } from "react";
import { CategoryFilter, Header, SideNav, Videocard } from "../../components";
import { MdMoreVert } from "react-icons/md";
import axios from "axios";
import "./videolist.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdThumbUp, MdBookmark, MdClose, MdPlaylistAdd } from "react-icons/md";
import { useVideoAction } from "../../contexts/wishlistContext/like-context";

export function Videolist() {
  const [videolist, setVideolist] = useState([]);
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const { liked } = useVideoAction();

  async function getVideosList() {
    try {
      const { data } = await axios.get("/api/videos");
      setVideolist(() => data.videos);
    } catch (e) {
      console.log("error", e);
    }
  }

  const applyCategoryFilter = () => {
    return categoryName === "all"
      ? videolist
      : videolist.filter(item => item.category === categoryName);
  };

  const filteredVideos = applyCategoryFilter();

  useEffect(() => getVideosList(), []);

  return (
    <>
      <Header />
      <SideNav />
      <div className="video-container d-grid">
        <CategoryFilter />
        <ul className="video-list list-no-bullet d-grid grid-gap">
          {filteredVideos &&
            filteredVideos?.map(video => {
              return (
                <li key={video._id}>
                  <Videocard video={video} />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
