import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

const App = () => (
  <>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/">Login</Link>
    </nav>

    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  </>
);

export default App;
