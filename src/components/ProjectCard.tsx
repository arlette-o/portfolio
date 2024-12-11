import * as React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import ProjectCardProps from "../static/types/ProjectCardProps.tsx";

export default function ProjectCard(project: ProjectCardProps) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 6 }}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.description}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
