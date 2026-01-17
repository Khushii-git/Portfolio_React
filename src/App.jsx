import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import "./App.css";
import Home from "./Pages/Home.jsx";

function App() {
    return (
    <>
     <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skillset" element={<Home scrollTo="skillset" />} />
        <Route path="/projects" element={<Home scrollTo="projects" />} />
        <Route path="/contact" element={<Home scrollTo="contact" />} />
     </Routes>
     </div>
    </>
  );
};

export default App;
