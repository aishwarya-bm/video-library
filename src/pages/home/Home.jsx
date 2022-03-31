import "../../App.css";
import homepage5 from "../../assets/homepage5.jpg";
import "./home.css";
import { Categories, Header, SideNav } from "../../components";

export function Home() {
  return (
    <div>
      <Header />
      <SideNav />
      <main className="home-main">
        <div className="home-banner p-rel">
          {/* testing how this works, will remove later */}
          {/* <video
            className="img-rsp home-video"
            src="https://www.youtube.com/embed/dx4Teh-nv3A"
            controls="controls"
            autoPlay={true}
          /> */}
          <iframe
            className="img-rsp home-video"
            src="https://www.youtube.com/embed/dx4Teh-nv3A"
            frameborder="0"
            allow="encrypted-media"
            allowfullscreen
            title="video"
          />
          {/* might uncomment later */}
          {/* <div className="home-welcome p-abs">
            <h3 className="text-right"> Welcome to Videoverse!</h3>
          </div> */}
        </div>
        <Categories />
      </main>
    </div>
  );
}
