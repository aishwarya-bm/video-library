import CategoryFilter from "./FilterBy/CategoryFilter";
import "./filter-products.css";

export default function FilterProducts() {
  return (
    <>
      <aside className="filter-container">
        <div className="filter-head d-flex">
          <div className="filter-heading-icon">
            <span className="fa fa-solid fa-filter btn btn-link">FILTERS</span>
          </div>
          <button className="btn btn-link" onClick={() => {}}>
            CLEAR
          </button>
        </div>
        <div className="filter-options">
          <CategoryFilter />
          <hr></hr>
        </div>
      </aside>
    </>
  );
}
