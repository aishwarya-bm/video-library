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
          to="/explore/motifs"
          style={getActiveStyle}
          className="category-name"
        >
          Motifs & motives
        </NavLink>
        <NavLink
          to="/explore/characters"
          style={getActiveStyle}
          className="category-name"
        >
          Character archetypes
        </NavLink>
        <NavLink
          to="/explore/screenwriting"
          style={getActiveStyle}
          className="category-name"
        >
          Screen writing
        </NavLink>
        <NavLink
          to="/explore/directors"
          style={getActiveStyle}
          className="category-name"
        >
          Directors
        </NavLink>
        <NavLink
          to="/explore/scripts"
          style={getActiveStyle}
          className="category-name"
        >
          Scripts
        </NavLink>
        <NavLink
          to="/explore/storytelling"
          style={getActiveStyle}
          className="category-name"
        >
          Story telling
        </NavLink>
      </ul>
    </>
  );
}
