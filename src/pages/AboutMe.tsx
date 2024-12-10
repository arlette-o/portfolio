import * as React from "react";
import Box from "@mui/material/Box";

import great_wave from "../static/great_wave.jpg";
import Typography from "@mui/material/Typography";

export default function AboutMe() {
  return (
    <>
      <Box component="section" textAlign={"right"}>
        <img
          className="image"
          src={great_wave}
          alt="great_wave_tech"
          style={{ width: "100%", height: "auto" }}
        />
        <Typography variant="caption" gutterBottom>
          Original Artwork by Alain Bousquet conversion into PCB Layout by
          Micheal Derrenbacher
        </Typography>
      </Box>
      <Typography variant="h3" gutterBottom>
        Hi. I am Arlette Olalde, a Los Angeles based Full Stack Developer with
        over 2 years of experience.
      </Typography>
    </>
  );
}
