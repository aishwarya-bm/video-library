import Navbrand from "../navbrand/Navbrand";
import Navpills from "../navpills/Navpills";
import Search from "../search/Search";
import "./header.css";

export default function Header({ showSearchBox }) {
  return (
    <div>
      <nav className="nav-container d-flex">
        <Navbrand />
        {showSearchBox && <Search />}
        <Navpills />
      </nav>
    </div>
  );
}
