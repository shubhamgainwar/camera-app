import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import Home from "./pages/Home.jsx";
import Help from "./pages/Help.jsx";
import Contact from "./pages/Contact.jsx";
import Camera from "./components/Camera/Camera.jsx";
import Fitness from "./components/Fitness/Fitness.jsx";
import Meeting from "./components/Meeting/Meeting.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import { useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cam",
        element: <Camera />,
      },
      {
        path: "/fitness",
        element: <Fitness />,
      },
      {
        path: "/meeting",
        element: <Meeting />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
