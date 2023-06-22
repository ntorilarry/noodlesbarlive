import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Mission from "./components/mission";
import About from "./pages/about";
import Pagenotfound from "./pages/pagenotfound";
import Blog from "./pages/blog";
import Meals from "./pages/meals";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GoogleTagManager from "./components/GoogleTag";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Noodlesbar</title>
        <meta
          name="description"
          content="Noodles bar is a franchise of virtual cafeteria delivering 24 hours sustainable meal,personal chef experience. Live food."
        />
        <link rel="canonical" href="https://www.noodlesbar.live" />
      </Helmet>
      <div className="App">
        <GoogleTagManager />
        <Routes>
          {/* Main Routes */}
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/blog" element={<Blog />} />
          </Route>

          {/* Not found */}
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
