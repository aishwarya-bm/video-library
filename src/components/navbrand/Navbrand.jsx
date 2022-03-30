import { Link } from "react-router-dom";
import "./navbrand.css";

export default function Navbrand() {
  return (
    <>
      <div className="nav-brand d-flex">
        <Link to="/">
          <div className="nav-title">VideoApp</div>
        </Link>
      </div>
    </>
  );
}
