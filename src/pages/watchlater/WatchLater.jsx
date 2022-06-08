import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { Header, SideNav } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useVideoAction, getWatchLaterVideos, removeFromWatchLater, useLogin } from "../../contexts/index";

export function WatchLater() {
  const navigate = useNavigate();
  const { watchLater, dispatchAction } = useVideoAction();
  const { isLoggedIn } = useLogin();

  useEffect(() => getWatchLaterVideos(isLoggedIn, dispatchAction, navigate), []);
  useEffect(() => {
    document.title = `Watch later | BehindTheScenes`;
  }, []);
  return (
    <>
      <Header />
      <SideNav />

      <div className="videolist-container d-grid">
        {!watchLater[0] ? (
          <div className="not-found">
            <h5 className="text-center">Your have not saved videos to watch later!</h5>
            <div className="d-flex children-center img-not-found">
              <img src="https://cdn.iconscout.com/icon/free/png-256/watch-later-1891061-1597975.png" alt="like-img" />
            </div>
          </div>
        ) : (
          <>
            <h4 className="text-center">Watch later - {watchLater.length}</h4>
            <ul className="custom-video-list list-no-bullet d-grid ">
              {watchLater &&
                watchLater?.map(({ _id, title, author, thumbnails }, idx) => {
                  return (
                    <div className="card card-hor" key={_id}>
                      <div className="card-top d-flex">
                        <Link to={`/explore/video/${_id}`}>
                          <img className="card-image" src={thumbnails.high.url} alt={`video-cover-${idx}`} />
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
                          onClick={() => removeFromWatchLater(isLoggedIn, _id, dispatchAction, navigate)}>
                          <MdDelete size={20} />
                        </button>
                      </div>
                    </div>
                  );
                })}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
