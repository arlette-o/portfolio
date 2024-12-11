import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image="/images/resume.png"
        title="Olalde_Resume"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          My Resume
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          startIcon={<DownloadIcon />}
          href="/Olalde_A_Resume.pdf"
          download="Olalde_A_Resume.pdf"
          sx={{ color: "#121D40" }}
        >
          Download
        </Button>
      </CardActions>
    </Card>
  );
}
