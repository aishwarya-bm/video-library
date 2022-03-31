import { Link } from "react-router-dom";
import {
  MdExplore,
  MdHome,
  MdThumbUp,
  MdPlaylistAdd,
  MdHistory,
  MdOutlineBookmarkAdd,
} from "react-icons/md";
import "./sidenav.css";

export function SideNav() {
  return (
    <div className="sidenav-pills d-flex children-stacked grid-gap p-fixed ">
      <Link to="/" className="btn btn-link nav-btn ">
        <MdHome size={25} />
      </Link>
      <Link to="/explore" className="btn btn-link nav-btn ">
        <MdExplore size={25} />
      </Link>

      <Link to="/liked" className="btn btn-link nav-btn ">
        <MdThumbUp size={25} />
      </Link>

      <Link to="/playlists" className="btn btn-link nav-btn ">
        <MdPlaylistAdd size={25} />
      </Link>

      <Link to="/watchlater" className="btn btn-link nav-btn ">
        <MdOutlineBookmarkAdd size={25} />
      </Link>

      <Link to="/history" className="btn btn-link nav-btn ">
        <MdHistory size={25} />
      </Link>
    </div>
  );
}
