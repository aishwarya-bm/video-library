import "../../App.css";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import "./home.css";

export function Home() {
  return (
    <div>
      <Header />

      <main>
        <div className="p-rel">
          <img src={{}} className="img-rsp home-img" alt="home-img" />
          <div className="home-welcome text-center p-abs">
            <h3></h3>
            <button
              className="fa fa-solid btn btn-secondary"
              onClick={() => {}}
            >
              SHOP NOW
            </button>
          </div>
        </div>
        <Categories />
      </main>
    </div>
  );
}
