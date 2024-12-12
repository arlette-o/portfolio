import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import WorkTimeline from "../components/WorkTimeline.tsx";
import Resume from "../components/Resume.tsx";

//Also known as home page
export default function AboutMe() {
  return (
    <>
      <Box component="section" textAlign={"right"}>
        <img
          className="image"
          src="/images/great_wave.jpg"
          alt="great_wave_tech"
          style={{ width: "100%", height: "auto" }}
        />
        <Typography variant="caption" gutterBottom>
          Original Artwork by Alain Bousquet <br /> Conversion into PCB Layout
          by Micheal Derrenbacher
        </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid size={2} />
        <Grid size={{ md: 8, xs: 12 }} textAlign={"center"}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "1.8rem", sm: "3rem", md: "3rem" } }}
          >
            Hi. I am Arlette Olalde, a Los Angeles based Full Stack Developer
            with over 2 years of experience.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Languages: JavaScript, TypeScript, Python, Java, SQL, C#, C
          </Typography>
          I believe that I would be able to fit perfectly in any position as I
          am a very flexible worker; I can excel in any environment that I am
          in. The team at my last position was relatively small, therefore I had
          a hand in a little bit of everything when it came to designing and
          deploying our webapps. I worked with Product Mangers to determine what
          critical and nice-to-have features looked like based on requirements
          given by stakeholders. I gave feedback and suggestions to our designer
          for what our webapps would look like. I assisted our lead engineer in
          provisioning deployment tools and AWS services as well as frameworks
          for our webapps. I also had a hand in helping our DevOps engineer when
          it came to the containerization of our app using Docker.
        </Grid>
        <Grid size={2} />
      </Grid>
      <Grid container>
        <Grid size={{ md: 0.5 }} />
        <Grid
          size={{ md: 3.5, xs: 12 }}
          alignContent={"center"}
          justifyContent={"right"}
        >
          <Resume />
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <WorkTimeline />
        </Grid>
      </Grid>
    </>
  );
}
