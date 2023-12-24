import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ProjectGalleryPage from "./pages/ProjectGalleryPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Flowbite } from "flowbite-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flowbite mode="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projectgallery" element={<ProjectGalleryPage />} />
          <Route path="/project/:title" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </Flowbite>
  </React.StrictMode>
);
