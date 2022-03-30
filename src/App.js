import { Route,Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/errorpage/ErrorPage";
import History from "./pages/history/History";
import Home from "./pages/home/Home";
import LandingPage from "./pages/landingpage/LandingPage";
import Liked from "./pages/liked/Liked";
import Videolist from "./pages/videolist/Videolist";
import WatchLater from "./pages/watchlater/WatchLater";

function App() {
  return (
    
    <div className="App">
      <Routes>
     <Route path="/" element={<Home /> }></Route> 
     <Route path="/signup" element={<LandingPage/>} ></Route>
     <Route path="/history" element={ <History />} ></Route>
     <Route path="/watchlater" element={<WatchLater />} ></Route>
     <Route path="/videolist" element={<Videolist />} ></Route>
     <Route path="/videolist" element={<Liked />} ></Route>
     <Route path="*" element={<ErrorPage />} ></Route>
    </Routes>   
    </div>
    
  );
}

export default App;
