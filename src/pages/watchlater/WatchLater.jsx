import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { Header, SideNav } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import {
  useVideoAction,
  getWatchLaterVideos,
  removeFromWatchLater,
} from "../../contexts/index";

export function WatchLater() {
  const navigate = useNavigate();
  const { watchLater, watchLaterSize, dispatchAction } = useVideoAction();

  useEffect(() => getWatchLaterVideos(dispatchAction, navigate), []);
  return (
    <>
      <Header />
      <SideNav />

      <div className="videolist-container d-grid">
        <h4 className="text-center">Watch later - {watchLaterSize}</h4>
        <ul className="custom-video-list list-no-bullet d-grid ">
          {watchLater &&
            watchLater?.map(({ _id, title, author, thumnailHigh }) => {
              return (
                <div className="card card-hor" key={_id}>
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
                      onClick={() =>
                        removeFromWatchLater(_id, dispatchAction, navigate)
                      }
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
