import React from "react";
import "./App.css";

import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Navbar from "./components/Navbar.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import WorkTimeline from "./components/WorkTimeline.tsx";
import Skills from "./pages/Skills.tsx";
import { theme } from "./theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <AboutMe />
      <Skills />
      <WorkTimeline />
    </ThemeProvider>
  );
}

export default App;
