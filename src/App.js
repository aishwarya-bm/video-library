import { Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import LandingPage from "./pages/landingpage/LandingPage";

function App() {
  return (
    
    <div className="App">
      <Routes>
     <Route path="/" element={<Home /> }></Route> 
     <Route path="/signup" element={<LandingPage/>} ></Route>
     <Route path="/history" element={<LandingPage/>} ></Route>
     <Route path="/watchlater" element={<LandingPage/>} ></Route>
     <Route path="/videolist" element={<LandingPage/>} ></Route>
    </Routes>   
    </div>
    
  );
}

export default App;
