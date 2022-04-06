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
} from "../../contexts/index";
import { useVideoAction } from "../../contexts/index";

export function History() {
  const { history, dispatchAction } = useVideoAction();
  const navigate = useNavigate();
  useEffect(() => getHistoryVideos(dispatchAction, navigate), []);
  return (
    <>
      <Header />
      <SideNav />

      <div className="videolist-container d-grid">
        <div className="d-flex history-header">
          <h4 className="text-center">History - {history.length}</h4>
          <button
            className="btn btn-link"
            onClick={() => deleteHistory(dispatchAction, navigate)}
          >
            Clear all
          </button>
        </div>
        <ul className="custom-video-list list-no-bullet d-grid ">
          {history &&
            history?.map(({ _id, title, author, thumnailHigh }) => {
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
                        removeFromHistory(_id, dispatchAction, navigate)
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
