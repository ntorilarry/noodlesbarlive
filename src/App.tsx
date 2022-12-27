import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Mission from "./pages/mission";
import About from "./pages/about";
import Pagenotfound from "./pages/pagenotfound";
import Blog from "./pages/blog";
import Meals from "./pages/meals";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Noodlesbar</title>
        <meta
          name="description"
          content="Accra traffic jam is ready, can you stop the one that’s
          missing it stereo ? Explore our saucy or dry flavors ranging
          from mid-to-hot, in doice or savory. Browse our menu"
        />
        <link rel="canonical" href="https://www.noodlesbar.live" />
      </Helmet>
      <div className="App">
        <Routes>
          {/* Main Routes */}
          <Route path="/">
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="mission" element={<Mission />} />
            <Route path="about-us" element={<About />} />
            <Route path="meals" element={<Meals />} />
            <Route path="blog" element={<Blog />} />
          </Route>

          {/* Not found */}
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
