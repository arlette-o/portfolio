import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";

import ProjectCard from "../components/ProjectCard.tsx";

import projects from "../static/json/projects.json";
import ProjectCardProps from "../static/types/ProjectCardProps.tsx";

//ToDo: Add card action area where user can visit site

const projectCards: ProjectCardProps[] = projects.map((item) => ({
  title: item.title,
  image: item.image,
  description: item.description,
}));

export default function Projects() {
  return (
    <Box>
      <br />
      <Grid container spacing={1}>
        <Grid size={2} />
        <Grid size={8} textAlign={"center"}>
          <Typography variant="h3" gutterBottom>
            Explore projects that I have worked on
          </Typography>
        </Grid>
        <Grid size={2} />
      </Grid>
      <br />
      <br />
      <Grid container>
        <Grid size={1} />
        <Grid size={{ md: 2, xs: 10 }}>
          <Card sx={{ minWidth: 275, background: "#809BB3" }}>
            <CardContent>
              <Typography gutterBottom sx={{ fontSize: 26 }}>
                VBG Client Portal
              </Typography>
              <Divider />
              <Typography variant="body2">
                A portal where clients could log in and view the status of their
                claim as well as update their information and upload/view
                documents
              </Typography>
              <Divider />
              <Typography variant="body2">
                <li>JavaScript </li>
                <li>React/Redux</li> <li>API connections</li>{" "}
                <li>Semantic HTML </li>
                <li>Responsive CSS</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }} textAlign={"center"}>
          <Box sx={{ background: "#809BB3" }}>
            <img
              className="image"
              src="/images/VBG.png"
              alt="VBG_Desktop"
              style={{ width: "90%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid size={{ md: 2, xs: 12 }}>
          <Box sx={{ background: "#809BB3" }}>
            <img
              className="image"
              src="/images/VBG_Mobile.png"
              alt="VBG_Mobile"
              style={{ width: "78%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container>
        <Grid size={1} />
        <Grid size={{ md: 2, xs: 10 }}>
          <Card sx={{ minWidth: 275, background: "#809BB3" }}>
            <CardContent>
              <Typography gutterBottom sx={{ fontSize: 26 }}>
                LaundroMapp
              </Typography>
              <Divider />
              <Typography gutterBottom variant="body2">
                A webpage where clients can view machine availability, submit
                for coupons, and schedule laundry pickups
              </Typography>
              <Divider />
              <Typography variant="body2">
                <li>TypeScript </li>
                <li>Next.js</li> <li>APIs</li> <li>Semantic HTML </li>
                <li>Responsive CSS</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ md: 6, xs: 12 }} textAlign={"center"}>
          <Box sx={{ background: "#809BB3" }}>
            <img
              className="image"
              src="/images/Laundromapp.png"
              alt="LaundroMapp_Desktop"
              style={{ width: "90%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid size={{ md: 2, xs: 12 }}>
          <Box sx={{ background: "#809BB3" }}>
            <img
              className="image"
              src="/images/LaundroMapp_Mobile.png"
              alt="LaundroMapp_Mobile"
              style={{ width: "78.4%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
        mt={6}
      >
        {projectCards.map((project, _) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </Stack>
    </Box>
  );
}
