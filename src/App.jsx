import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Home from "../pages/Home.jsx";
import MusicPlayList from "../components/MusicPlayList.jsx";


function App() {

return (

<BrowserRouter>
    <div className="bg-zinc-950 min-h-screen">
    <Navbar />
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
    <MusicPlayList />
    </div>
</BrowserRouter>

);

}

export default App;