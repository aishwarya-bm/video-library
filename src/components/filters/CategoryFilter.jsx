import { NavLink } from "react-router-dom";
import "./category-filter.css";

export function CategoryFilter() {
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          border: "2px solid var(--doc-bg)",
          borderRadius: "1rem",
          backgroundColor: "var(--shadow-color)",
          color: "black",
          fontWeight: "bold",
        }
      : {};

  return (
    <>
      <ul className="list list-no-bullet d-flex category-select-list">
        <NavLink
          to="/explore/all"
          style={getActiveStyle}
          className="category-name"
        >
          All
        </NavLink>
        <NavLink
          to="/explore/music"
          style={getActiveStyle}
          className="category-name"
        >
          Music
        </NavLink>
        <NavLink
          to="/explore/comedy"
          style={getActiveStyle}
          className="category-name"
        >
          Comedy
        </NavLink>
        <NavLink
          to="/explore/ted"
          style={getActiveStyle}
          className="category-name"
        >
          ted
        </NavLink>
        <NavLink
          to="/explore/sports"
          style={getActiveStyle}
          className="category-name"
        >
          Sports
        </NavLink>
        <NavLink
          to="/explore/learning"
          style={getActiveStyle}
          className="category-name"
        >
          Learning
        </NavLink>
        <NavLink
          to="/explore/movies"
          style={getActiveStyle}
          className="category-name"
        >
          Movies
        </NavLink>
      </ul>
    </>
  );
}
