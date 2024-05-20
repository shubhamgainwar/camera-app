import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header.jsx";
import FooterComponent from "./components/Footer/FooterComponent.jsx";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default App;
