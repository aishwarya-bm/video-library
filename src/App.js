import { Route,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import {Home,History,WatchLater,Liked,ErrorPage,Videolist, LoginPage, VideoPage, Playlist, PlaylistPage } from "./pages/index";

function App() {
  return (
    <>
     <Routes>
     <Route path="/" element={ <Home/> }></Route> 
     <Route path="/signup" element={<LoginPage />} ></Route>
     <Route path="/history" element={ <History />} ></Route>
     <Route path="/watchlater" element={<WatchLater />} ></Route>
     <Route path="/playlists" element={<Playlist />} ></Route>
     <Route path="/playlists/:playlistId" element={<PlaylistPage />} ></Route>
     {/* <Route path="/explore" element={<Videolist />} ></Route> */}
     <Route path="/liked" element={<Liked />} ></Route>
     <Route path="/explore/:categoryName" element={<Videolist />} ></Route>
     <Route path="/explore/video/:id" element={<VideoPage />} ></Route>
     <Route path="*" element={<ErrorPage />} ></Route>
    </Routes> 
    <ToastContainer/>  
    </>  
  );
}

export default App;
