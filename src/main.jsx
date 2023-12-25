import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./pages/LandingPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ProjectGalleryPage from "./pages/ProjectGalleryPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projectgallery" element={<ProjectGalleryPage />} />
          <Route path="/project/:title" element={<ProjectPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
