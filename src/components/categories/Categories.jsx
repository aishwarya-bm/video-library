import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./categories.css";
import { useFilter } from "../../contexts/filter-context/filter-context";

export function Categories() {
  const [categories, setCategories] = useState([]);

  const { setCategoryValue } = useFilter();
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/categories");
      setCategories(() => data.categories);
    } catch (e) {
      console.log("error occured", e);
    }
  };
  useEffect(() => getCategories(), []);
  return (
    <>
      <div>
        <div className="d-flex categories-home">
          <h4 className="categories-home-heading">Browse categories</h4>
          <Link to="/explore">
            <button
              className="categories-home-all"
              onClick={() => setCategoryValue("all")}
            >
              See all
            </button>
          </Link>
        </div>

        <div className="d-grid">
          <ul className="category-container d-grid list-no-bullet">
            {categories &&
              categories?.map(({ _id, categoryName, categoryImg }) => {
                return (
                  <li key={_id}>
                    <div className="card children-stacked" onClick={() => {}}>
                      <Link to={`/explore/${categoryName}`}>
                        <img
                          className="card-media"
                          src={categoryImg}
                          alt="card-img"
                        />
                      </Link>

                      <Link
                        to={`/explore/${categoryName}`}
                        className="btn btn-link card-btn text-center"
                      >
                        {categoryName}
                      </Link>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
// export { Categories };
