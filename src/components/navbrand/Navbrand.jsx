import { Link } from "react-router-dom";
import { MdVideoLibrary } from "react-icons/md";
import "./navbrand.css";

export function Navbrand() {
  return (
    <>
      <div className="nav-brand">
        <Link to="/">
          <div className="nav-title d-flex children-center">
            <MdVideoLibrary className="nav-btn app-icon" size={40} />
            Videoverse
          </div>
        </Link>
      </div>
    </>
  );
}
