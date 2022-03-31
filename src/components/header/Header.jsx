import { Navbrand, Search, Navpills } from "../../components/index";
import "./header.css";

export function Header({ showSearchBox }) {
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
