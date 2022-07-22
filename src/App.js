import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout.jsx";
import Dashboard from "./Components/Layout/Dashboard.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
