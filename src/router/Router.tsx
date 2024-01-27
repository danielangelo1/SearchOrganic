import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import News from "../pages/news/News";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/news" element={<News />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
