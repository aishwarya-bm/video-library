import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Header, SideNav, Toast } from "../../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  removeVideoFromPlaylist,
  deletePlaylist,
  useVideoAction,
  useLogin,
} from "../../contexts";

export function PlaylistPage() {
  const [playlist, setPlaylist] = useState({});
  const { title, videos } = playlist;

  const { isLoggedIn } = useLogin();
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
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }
  }
  useEffect(() => getPlaylistVideos(), [playlist]);
  useEffect(() => {
    document.title = `${title} | BehindTheScenes`;
  }, [title]);
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
              deletePlaylist(
                isLoggedIn,
                playlist._id,
                dispatchAction,
                navigate
              );
            }}
          >
            Delete
          </button>
        </div>
        {playlist?.videos?.length === 0 ? (
          <div className="not-found">
            <h5 className="text-center">
              Your have no videos in this playlist!
            </h5>
            <div className="d-flex children-center img-not-found">
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/video-marketing-page-optimization-youtube-seo-web-webpage-10-8213.png"
                alt="video-img"
              />
            </div>
          </div>
        ) : (
          <>
            <ul className="custom-video-list list-no-bullet d-grid ">
              {videos &&
                videos?.map(({ _id, title, videoId, author, thumbnails }) => {
                  return (
                    <div key={_id} className="card card-hor">
                      <div className="card-top d-flex">
                        <Link to={`/explore/video/${_id}`}>
                          <img
                            className="card-image"
                            src={thumbnails.high.url}
                            alt="video-cover"
                          />
                        </Link>
                        <Link to={`/explore/video/${_id}`}>
                          <div className="card-header">
                            <div className="card-title">{title}</div>
                            <div className="card-author gray-text">
                              {author}
                            </div>
                          </div>
                        </Link>
                        <button
                          className="btn btn-link icon-trash p-abs"
                          aria-hidden="true"
                          onClick={() =>
                            removeVideoFromPlaylist(
                              isLoggedIn,
                              playlistId,
                              _id,
                              dispatchAction,
                              navigate
                            )
                          }
                        >
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
