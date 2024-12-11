import * as React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import SocialMediaProps from "../types/SocialMediaProps.tsx";

export const socialMedia: SocialMediaProps[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arlette-olalde-75a3a7234/",
    logo: <LinkedInIcon sx={{ color: "#121D40" }} />,
  },
  {
    name: "Github",
    url: "https://github.com/arlette-o",
    logo: <GitHubIcon sx={{ color: "#121D40" }} />,
  },
  {
    name: "Email",
    url: "mailto:aolaldeflores@gmail.com",
    logo: <EmailIcon sx={{ color: "#121D40" }} />,
  },
];
