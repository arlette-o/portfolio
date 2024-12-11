import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

export default function Projects() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid size={1} />
        <Grid size={2}>
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
                <li>React/Redux</li> <li>APIs</li> <li>Semantic HTML </li>
                <li>Responsive CSS</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={6} textAlign={"center"}>
          <Box sx={{ background: "#809BB3" }}>
            <img
              className="image"
              src="/images/VBG.png"
              alt="VBG_Desktop"
              style={{ width: "90%", height: "auto" }}
            />
          </Box>
        </Grid>

        <Grid size={2}>
          <Box sx={{ background: "#809BB3" }}>
            <img
              className="image"
              src="/images/VBG_Mobile.png"
              alt="VBG_Mobile"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid size={1} />
        <Grid size={2}>
          <Card sx={{ minWidth: 275, background: "#809BB3" }}>
            <CardContent>
              <Typography gutterBottom sx={{ fontSize: 26 }}>
                LaundroMapp
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
                <li>React/Redux</li> <li>APIs</li> <li>Semantic HTML </li>
                <li>Responsive CSS</li>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={6} textAlign={"center"}>
          <img
            className="image"
            src="/images/LaundroMapp.png"
            alt="LaundroMapp_Desktop"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid size={2}>
          <img
            className="image"
            src="/images/LaundroMapp_Mobile.png"
            alt="LaundroMapp_Mobile"
          />
        </Grid>
      </Grid>
    </Box>
  );
}