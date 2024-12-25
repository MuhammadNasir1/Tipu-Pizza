// import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Contact from './Pages/ContactUs.jsx';
import AddMenu from './Pages/AddMenu.jsx';
import Menu from './Pages/Menu.jsx';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="contact" element={<Contact />} />
        <Route path="addMenu" element={<AddMenu />} />
        <Route path="menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
