import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Header, SideNav } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import "./history.css";
import {
  deleteHistory,
  getHistoryVideos,
  removeFromHistory,
  useLogin,
} from "../../contexts/index";
import { useVideoAction } from "../../contexts/index";

export function History() {
  const { isLoggedIn } = useLogin();
  const { history, dispatchAction } = useVideoAction();
  const navigate = useNavigate();
  useEffect(() => getHistoryVideos(isLoggedIn, dispatchAction, navigate), []);
  return (
    <>
      <Header />
      <SideNav />
      <div className="videolist-container d-grid">
        {!history[0] ? (
          <div className=" not-found">
            <h5 className="text-center">
              Your history is empty, lets watch some videos!
            </h5>
            <div className="d-flex children-center img-not-found">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-128-thumb/history-2843409-2363708.png"
                alt="history-img"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="d-flex history-header">
              <h4 className="text-center">History - {history.length}</h4>
              <button
                className="btn btn-link"
                onClick={() =>
                  deleteHistory(isLoggedIn, dispatchAction, navigate)
                }
              >
                Clear all
              </button>
            </div>
            <ul className="custom-video-list list-no-bullet d-grid ">
              {history &&
                history?.map(({ _id, title, author, thumbnails }, idx) => {
                  return (
                    <div className="card card-hor" key={_id}>
                      <div className="card-top d-flex">
                        <Link to={`/explore/video/${_id}`}>
                          <img
                            className="card-image"
                            src={thumbnails.high.url}
                            alt={`video-cover-${idx}`}
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
                            removeFromHistory(
                              isLoggedIn,
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
