import React from "react";
import "./App.css";
import Home from "./pages/_Home";
import { Route, Routes } from "react-router-dom";
import Mission from "./components/_Mission";
import About from "./pages/_About";
import Pagenotfound from "./pages/_Pagenotfound";
import Blog from "./pages/_Blog";
import Meals from "./pages/_Meals";
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
