import { useState, useEffect } from "react";
import { CategoryFilter, Header, SideNav } from "../../components";
import { MdMoreVert } from "react-icons/md";
import axios from "axios";
import "./videolist.css";
import { useFilter } from "../../contexts/filter-context/filter-context";
import { Link, useNavigate } from "react-router-dom";

export function Videolist() {
  const [videolist, setVideolist] = useState([]);
  const { category } = useFilter();
  const navigate = useNavigate();

  async function getVideosList() {
    try {
      const { data } = await axios.get("/api/videos");
      setVideolist(() => data.videos);
    } catch (e) {
      console.log("error", e);
    }
  }

  const applyCategoryFilter = () => {
    return category === "all"
      ? videolist
      : videolist.filter(item => item.category === category);
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
                      navigate(`/explore/${_id}`);
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
