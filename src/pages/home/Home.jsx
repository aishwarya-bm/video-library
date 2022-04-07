import "../../App.css";
import "./home.css";
import { Categories, Header, SideNav } from "../../components";

export function Home() {
  return (
    <>
      <Header />
      <SideNav />
      <main className="home-main">
        <div className="home-banner p-rel">
          <img
            className="home-img"
            alt="banner"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/db219e1b-a9a8-43d7-befa-723b8a6164c1/IN-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          />

          <div className="home-welcome p-abs">
            <div className="text-center">
              Welcome to <span className="banner-title">Videoverse</span>
            </div>
          </div>
        </div>
        <Categories />
      </main>
    </>
  );
}
