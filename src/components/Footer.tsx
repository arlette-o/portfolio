import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ background: "#121D40" }}>
      {/* BIO here */}

      <Stack direction="row" spacing={3} ml={"10vw"}>
        <img
          className="image"
          src="/images/olalde_square.jpg"
          alt="Arlette Profile Pic"
          style={{ width: "10vw", height: "20vh" }}
        />
        <Box width={{ md: "30%" }} alignContent={"center"}>
          <Typography color="white" sx={{ fontSize: "1 rem" }}>
            In terms of soft skills, I bring decisiveness, intuition, and
            problem solving to the team as well as a friendly demeanor. I enjoy
            the challenge of learning new technologies and applying them. I
            don't shy from asking questions and letting the team know when I
            need help.
          </Typography>
        </Box>
      </Stack>

      {/* Socials here */}

      <Typography color="white" textAlign="center">
        Designed and created by Arlette Olalde
      </Typography>
    </Box>
  );
}
