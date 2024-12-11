import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import WorkTimeline from "../components/WorkTimeline.tsx";
import Resume from "../components/Resume.tsx";

import great_wave from "../static/images/great_wave.jpg";

//Also known as home page
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

      <Grid container spacing={1}>
        <Grid size={2} />
        <Grid size={8} textAlign={"center"}>
          <Typography variant="h3" gutterBottom>
            Hi. I am Arlette Olalde, a Los Angeles based Full Stack Developer
            with over 2 years of experience.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Languages: JavaScript, TypeScript, Python, Java, SQL, C#, C
          </Typography>
        </Grid>
        <Grid size={2} />
      </Grid>
      <Grid container>
        <Grid size={0.5} />
        <Grid size={3.5} alignContent={"center"} justifyContent={"right"}>
          <Resume />
        </Grid>
        <Grid size={8}>
          <WorkTimeline />
        </Grid>
      </Grid>
    </>
  );
}
