import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Videos from "./components/Videos.jsx";

const router = createBrowserRouter([
  {
    path: "videos",
    element: <Videos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
