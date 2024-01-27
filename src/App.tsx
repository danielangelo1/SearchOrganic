import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Router from "./router/Router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
