import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { socialMedia } from "../static/constants/socialMedia.tsx";

export default function Footer() {
  const openWebPage = (url: string) => {
    window.open(url);
  };
  return (
    <Box sx={{ background: "#121D40" }}>
      {/* BIO here */}
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent={{ xs: "center" }}
      >
        <Stack
          direction="row"
          spacing={3}
          ml={"10vw"}
          width={{ md: "45%" }}
          m={{ md: 6 }}
        >
          <img
            className="image"
            src="/images/olalde_square.jpg"
            alt="Picture of Arlette"
            style={{ width: "10vw", height: "20vh" }}
          />
          <Box alignContent={"center"} width={{ md: "45%" }}>
            <Typography color="white" sx={{ fontSize: "1 rem" }}>
              In terms of soft skills, I bring decisiveness, intuition, and
              problem solving to the team as well as a friendly demeanor. I
              enjoy the challenge of learning new technologies and applying
              them. I don't shy from asking questions and letting the team know
              when I need help.
            </Typography>
          </Box>
        </Stack>
        {/* Socials here */}

        <Stack
          direction={"column"}
          spacing={2}
          alignItems="center" // Centers items horizontally
          m={6}
        >
          {socialMedia.map((web, _) => (
            <Box width={{ md: "100%", xs: "30%" }}>
              <Button
                fullWidth
                variant="contained"
                startIcon={web.logo}
                sx={{ background: "#809BB3" }}
                onClick={() => openWebPage(web.url)}
              >
                {web.name}
              </Button>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Typography color="white" textAlign="center">
        Designed and created by Arlette Olalde
      </Typography>
    </Box>
  );
}
