import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
        {/* Main Routes */}
        <Route path="/">
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Route>

        {/* Not found */}
        <Route
          path="*"
          element={
            <h1 className="text-center text-muted">
              You have hit the end of the road!
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
