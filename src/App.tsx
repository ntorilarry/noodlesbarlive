import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Mission from "./pages/mission";
import About from "./pages/about";
import Pagenotfound from "./pages/pagenotfound";
import Blog from "./pages/blog";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Routes */}
        <Route path="/">
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="mission" element={<Mission />} />
          <Route path="about-us" element={<About />} />
          <Route path="blog" element={<Blog />} />
        </Route>

        {/* Not found */}
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
