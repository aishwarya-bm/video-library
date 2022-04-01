import { useFilter } from "../../contexts/filter-context/filter-context";
import "./category-filter.css";

export function CategoryFilter() {
  const { category, setCategoryValue } = useFilter();
  const handleChange = categoryName => {
    setCategoryValue(categoryName);
  };

  return (
    <>
      <ul className="list list-no-bullet d-flex category-select-list">
        <li>
          <label htmlFor="all" className="category-name">
            <input
              type="radio"
              id="all"
              name="all"
              value="all"
              checked={category === "all"}
              className="hide"
              onChange={() => {
                handleChange("all");
              }}
            />
            All
          </label>
        </li>
        <li>
          <label htmlFor="music" className="category-name">
            <input
              type="radio"
              id="music"
              name="music"
              value="music"
              className="hide"
              checked={category === "music"}
              onChange={() => {
                handleChange("music");
              }}
            />
            Music
          </label>
        </li>
        <li>
          <label htmlFor="comedy" className="category-name">
            <input
              type="radio"
              id="comedy"
              name="comedy"
              className="hide"
              checked={category === "comedy"}
              value="comedy"
              onChange={() => {
                handleChange("comedy");
              }}
            />
            Comedy
          </label>
        </li>
        <li>
          <label htmlFor="ted" className="category-name">
            <input
              type="radio"
              id="ted"
              name="ted"
              className="hide"
              checked={category === "ted"}
              value="ted"
              onChange={() => {
                handleChange("ted");
              }}
            />
            Ted
          </label>
        </li>
        <li>
          <label htmlFor="sports" className="category-name">
            <input
              type="radio"
              id="sports"
              name="sports"
              className="hide"
              checked={category === "sports"}
              value="sports"
              onChange={() => {
                handleChange("sports");
              }}
            />
            Sports
          </label>
        </li>
        <li>
          <label htmlFor="learning" className="category-name">
            <input
              type="radio"
              id="learning"
              name="learning"
              className="hide"
              value="learning"
              checked={category === "learning"}
              onChange={() => {
                handleChange("learning");
              }}
            />
            Learning
          </label>
        </li>
        <li>
          <label htmlFor="movies" className="category-name">
            <input
              type="radio"
              id="movies"
              name="movies"
              className="hide"
              checked={category === "movies"}
              value="movies"
              onChange={() => {
                handleChange("movies");
              }}
            />
            Movies
          </label>
        </li>
      </ul>
    </>
  );
}
