import { useState, useEffect } from "react";
import { CategoryFilter, Header, SideNav } from "../../components";
import { MdMoreVert } from "react-icons/md";
import axios from "axios";
import "./videolist.css";
import { Link, useNavigate, useParams } from "react-router-dom";

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
                  <div className="card-media">
                    <img src={thumnailHigh.url} alt="card-img" />
                  </div>
                  <div className="card-head d-flex">
                    <div className="card-header children-stacked">
                      <div className="card-title">
                        {"title title title title title title title title"}
                      </div>
                      <div className="card-author gray-text">
                        by Aishwarya B
                      </div>
                    </div>

                    <button className="btn btn-link icon-more">
                      <MdMoreVert size={25} />
                    </button>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate(`/explore/video/${_id}`);
                    }}
                  >
                    watch now
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
