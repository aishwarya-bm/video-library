import { useState, useEffect } from "react";
import { CategoryFilter, Header, Navpills, SideNav } from "../../components";
import { MdMoreVert } from "react-icons/md";
import axios from "axios";
import "./videolist.css";
import "./videopage.css";
import { useFilter } from "../../contexts/filter-context/filter-context";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export function VideoPage() {
  const [video, setVideo] = useState({});
  const { id } = useParams();

  async function getVideoDetails() {
    try {
      const { data } = await axios.get(`/api/video/${id}`);
      setVideo(() => data.video);
    } catch (e) {
      console.log("error", e);
    }
  }
  useEffect(() => getVideoDetails(), []);
  return (
    <>
      <Header />
      <SideNav />

      <div className="video-container">
        <div className="video-player d-grid ">
          <div className="d-flex children-stacked">
            <ReactPlayer
              controls
              width={"100%"}
              url="
            https:controls //www.youtube.com/embed/E7wJTI-1dvQ"
            />
            <h5>{video.title}</h5>
          </div>

          <div className="video-details d-flex children-stacked grid-gap">
            <div>
              <span className="video-summary">Author:</span>{" "}
              <span>{video.author}</span>
            </div>
            <div>
              <span className="video-summary">Likes:</span>
              <span>{video.likes}</span>
            </div>
            <div>
              <span className="video-summary">Views:</span>
              <span>{video.views}</span>
            </div>
            <div>
              <span className="video-summary">Description:</span>
              <span>{video.description}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="notes-section d-flex children-stacked grid-gap">
            <h4 className="notes-title">Notes</h4>
            <input
              type="text"
              placeholder="enter title"
              className="notes-input-width"
            />
            <textarea
              placeholder="enter description"
              className="notes-input-width"
            />
            <div className="d-flex">
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}