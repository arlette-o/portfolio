import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Projects from "./pages/Projects.tsx";

import { theme } from "./theme.ts";
import Skills from "./pages/Skills.tsx";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
