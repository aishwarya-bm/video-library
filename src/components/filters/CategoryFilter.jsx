import "./category-filter.css";
export default function CategoryFilter() {
  return (
    <>
      <ul className="list list-no-bullet">
        <li>
          <input
            type="checkbox"
            id="ted"
            name="ted"
            onChange={() => {}}
            checked={{}}
          />
          <label htmlFor="ted">TED</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="movies"
            name="movies"
            onChange={() => {}}
            checked={{}}
          />
          <label htmlFor="movies">Movies</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="music"
            name="music"
            onChange={() => {}}
            checked={{}}
          />
          <label htmlFor="music">Music</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="comedy"
            name="comedy"
            onChange={() => {}}
            checked={{}}
          />
          <label htmlFor="comedy">Comedy</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="sports"
            name="sports"
            onChange={() => {}}
            checked={{}}
          />
          <label htmlFor="sports">Sports</label>
        </li>
        <li>
          <input
            type="checkbox"
            id="learning"
            name="learning"
            onChange={() => {}}
            checked={{}}
          />
          <label htmlFor="learning">Learning</label>
        </li>
      </ul>
    </>
  );
}
