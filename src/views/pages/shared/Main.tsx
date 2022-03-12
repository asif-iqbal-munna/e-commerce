import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home/Home";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Main;
