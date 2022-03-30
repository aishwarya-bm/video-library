import { Route,Routes } from "react-router-dom";
import "./App.css";
import {Home,History,WatchLater,Liked,ErrorPage,Videolist, LandingPage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/" element={ <Home/> }></Route> 
     <Route path="/signup" element={<LandingPage />} ></Route>
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
