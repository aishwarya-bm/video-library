import { useState, useEffect } from "react";
import { CategoryFilter, Header, SideNav } from "../../components";
import { MdMoreVert } from "react-icons/md";
import axios from "axios";
import "./videolist.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdThumbUp, MdBookmark, MdClose, MdPlaylistAdd } from "react-icons/md";

export function Videolist() {
  const [videolist, setVideolist] = useState([]);
  const navigate = useNavigate();
  const { categoryName } = useParams();

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
  const [showMenu, setShowMenu] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  return (
    <>
      <Header />
      <SideNav />

      <div className="video-container d-grid">
        <CategoryFilter />
        <ul className="video-list list-no-bullet d-grid grid-gap">
          {filteredVideos &&
            filteredVideos?.map(({ _id, title, videoId, thumnailHigh }) => {
              return (
                <li key={_id} className="card children-stacked card-dismiss">
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
                        <div className="card-author gray-text">
                          by Aishwarya B
                        </div>
                      </div>
                    </Link>
                    <button
                      className="btn btn-link icon-more"
                      onClick={() => {
                        setShowMenu(true);
                        setIsSelected(_id);
                      }}
                    >
                      <MdMoreVert size={25} />
                    </button>

                    {isSelected === _id && showMenu && (
                      <div className="p-abs video-item-actions d-flex children-stacked">
                        <button className="d-flex video-menu-item">
                          <MdThumbUp size={20} />
                          &nbsp; like
                        </button>
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
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
