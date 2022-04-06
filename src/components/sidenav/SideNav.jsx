import { NavLink } from "react-router-dom";
import {
  MdExplore,
  MdHome,
  MdThumbUp,
  MdPlaylistAdd,
  MdHistory,
  MdBookmark,
} from "react-icons/md";
import "./sidenav.css";

export function SideNav() {
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          border: "1px solid var(--info-txt)",
          backgroundColor: "var(--primary-color)",
          color: "var(--black-color)",
          borderRadius: "50%",
        }
      : {};

  return (
    <div className="sidenav-pills d-flex children-stacked grid-gap p-fixed ">
      <NavLink to="/" className="btn btn-link nav-btn " style={getActiveStyle}>
        <MdHome size={25} />
      </NavLink>
      <NavLink
        to="/explore/all"
        className="btn btn-link nav-btn "
        style={getActiveStyle}
      >
        <MdExplore size={25} />
      </NavLink>

      <NavLink
        to="/liked"
        className="btn btn-link nav-btn "
        style={getActiveStyle}
      >
        <MdThumbUp size={25} />
      </NavLink>

      <NavLink
        to="/playlists"
        className="btn btn-link nav-btn "
        style={getActiveStyle}
      >
        <MdPlaylistAdd size={25} />
      </NavLink>

      <NavLink
        to="/watchlater"
        className="btn btn-link nav-btn "
        style={getActiveStyle}
      >
        <MdBookmark size={25} />
      </NavLink>

      <NavLink
        to="/history"
        className="btn btn-link nav-btn "
        style={getActiveStyle}
      >
        <MdHistory size={25} />
      </NavLink>
    </div>
  );
}
