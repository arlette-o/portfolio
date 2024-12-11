import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import SocialMediaProps from "../types/SocialMediaProps";
import WebPageProps from "../types/WebPageProps";

const pages: WebPageProps[] = [
  { name: "About Me", url: "/" },
  { name: "Skills", url: "/skills" },
  { name: "Projects", url: "/projects" },
];

const socialMedia: SocialMediaProps[] = [
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

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [navAnchor, setNavAnchor] = React.useState<null | HTMLElement>(null);
  const [userAnchor, setUserAnchor] = React.useState<null | HTMLElement>(null);

  const openNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavAnchor(event.currentTarget);
  };
  const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserAnchor(event.currentTarget);
  };

  const closeNavMenu = (url: string) => {
    navigate(url);
    setNavAnchor(null);
  };

  const closeMenu = () => {
    setUserAnchor(null);
  };

  const openWebPage = (url: string) => {
    window.open(url);
    closeMenu();
  };

  return (
    <AppBar position="static" style={{ background: "#121D40" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Arlette Olalde Flores
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={navAnchor}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(navAnchor)}
              onClose={closeNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => closeNavMenu(page.url)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Arlette Olalde
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => closeNavMenu(page.url)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Connect With Me!">
              <IconButton onClick={openUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Arlette Olalde"
                  src="/images/olalde.jpg"
                  sx={{ width: 50, height: 50 }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={userAnchor}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(userAnchor)}
              onClose={closeMenu}
            >
              {socialMedia.map((web) => (
                <MenuItem key={web.name} onClick={() => openWebPage(web.url)}>
                  {web.logo}
                  <Typography sx={{ textAlign: "center", ml: 1 }}>
                    {web.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
