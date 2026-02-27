import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import ProjectCard from "../components/ProjectCard.tsx";
import projects from "../static/json/projects.json";
import ProjectCardProps from "../static/types/ProjectCardProps.tsx";

const projectCards: ProjectCardProps[] = projects.map((item) => ({
  title: item.title,
  image: item.image,
  description: item.description,
}));

// Shared styles
const sectionStyles = {
  position: "relative" as const,
  borderRadius: "16px",
  overflow: "hidden",
  background: "#809BB3",
  border: "1px solid rgba(255,255,255,0.06)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 32px 100px rgba(0,0,0,0.65)",
  },
};

const tagChip = (label: string) => (
  <Chip
    key={label}
    label={label}
    size="small"
    sx={{
      border: "1px solid rgba(128,155,179,0.25)",
      fontFamily: "'DM Mono', monospace",
      fontSize: "0.7rem",
      letterSpacing: "0.05em",
      fontWeight: 500,
    }}
  />
);

interface ProjectSectionProps {
  title: string;
  description: string;
  responsibilities: string;
  technologies: string[];
  imageSrc: string;
  imageSrcMobile?: string;
  imageAlt: string;
  siteUrl?: string;
  reverse?: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  description,
  responsibilities,
  technologies,
  imageSrc,
  imageSrcMobile,
  imageAlt,
  siteUrl,
  reverse = false,
}) => {
  const infoBlock = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: { xs: 4, md: 7 },
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: "#f0f4f8",
            lineHeight: 1.1,
            fontSize: { xs: "2.2rem", md: "3rem" },
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          width: 40,
          height: 2,
        }}
      />

      <Box>
        <Typography
          sx={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "#809BB3",
            textTransform: "uppercase",
            mb: 0.8,
          }}
        >
          Description
        </Typography>
        <Typography
          sx={{
            color: "rgba(240,244,248,0.75)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            fontFamily: "'Lora', serif",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "#809BB3",
            textTransform: "uppercase",
            mb: 0.8,
          }}
        >
          Role
        </Typography>
        <Typography
          sx={{
            color: "rgba(240,244,248,0.75)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            fontFamily: "'Lora', serif",
          }}
        >
          {responsibilities}
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "#809BB3",
            textTransform: "uppercase",
            mb: 1,
          }}
        >
          Stack
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
          {technologies.map((t) => tagChip(t))}
        </Box>
      </Box>

      {siteUrl && (
        <Box sx={{ pt: 1 }}>
          <Button
            variant="outlined"
            href={siteUrl}
            target="_blank"
            rel="noopener"
            sx={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#809BB3",
              borderColor: "rgba(128,155,179,0.4)",
              borderRadius: "2px",
              px: 3,
              py: 1,
            }}
          >
            Visit Site →
          </Button>
        </Box>
      )}
    </Box>
  );

  const imageBlock = (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: { xs: 3, md: 6 },
        borderLeft: reverse ? "none" : "1px solid rgba(255,255,255,0.05)",
        borderRight: reverse ? "1px solid rgba(255,255,255,0.05)" : "none",
        minHeight: 620,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "60%",
          height: "60%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(128,155,179,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Box
        component="img"
        src={imageSrc}
        alt={imageAlt}
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "transform 0.4s ease",
          "&:hover": { transform: "scale(1.02)" },
        }}
      />

      {imageSrcMobile && (
        <Box
          component="img"
          src={imageSrcMobile}
          alt={`${imageAlt} mobile`}
          sx={{
            width: "22%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.08)",
            display: { xs: "none", md: "block" },
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        />
      )}
    </Box>
  );

  return (
    <Box sx={sectionStyles}>
      <Grid container sx={{ minHeight: 700 }}>
        {reverse ? (
          <>
            <Grid size={{ xs: 12, md: 1 }}></Grid>
            <Grid size={{ xs: 12, md: 6 }}>{imageBlock}</Grid>
            <Grid size={{ xs: 12, md: 1 }}></Grid>
            <Grid size={{ xs: 12, md: 4 }}>{infoBlock}</Grid>
          </>
        ) : (
          <>
            <Grid size={{ xs: 12, md: 4 }}>{infoBlock}</Grid>
            <Grid size={{ xs: 12, md: 7 }}>{imageBlock}</Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default function Projects() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, md: 2 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          mb: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: { xs: "2.8rem", md: "4rem" },
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Projects I've Worked On
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #809BB3, transparent)",
            mx: "auto",
            mt: 3,
          }}
        />
      </Box>

      <Stack spacing={4} sx={{ maxWidth: "100%" }}>
        <ProjectSection
          title="Kixie Inventory"
          description="A portal where the Kixie IT team can view and manage proprietary inventory for the company."
          responsibilities="Solo full stack project — designed, architected, and deployed as a team of one."
          technologies={[
            "TypeScript",
            "Ant Design",
            "React",
            "Vite",
            "Express",
            "PostgreSQL",
            "AWS RDS",
          ]}
          imageSrc="/images/kixieInventory.png"
          imageAlt="Kixie Inventory"
        />

        <ProjectSection
          title="VBG Client Portal"
          description="A portal where clients can log in and view their claim status, update personal information, and manage documents."
          responsibilities="One of two engineers on this ground-up build. Key features: 2FA, password recovery, admin panel, document management, and CRM integration."
          technologies={[
            "JavaScript",
            "React",
            "Redux",
            "AWS S3",
            "AWS ECS",
            "Docker",
            "Responsive CSS",
          ]}
          imageSrc="/images/VBG.png"
          imageSrcMobile="/images/VBG_Mobile.png"
          imageAlt="VBG Client Portal"
          siteUrl="https://vetportal.joshcogroup.com/signin"
          reverse
        />

        <ProjectSection
          title="LaundroMapp"
          description="A webpage where clients can view machine availability, submit for coupons, and schedule laundry pickups."
          responsibilities="Conceptualized, designed, and coded solo — a full stack web app built from the ground up."
          technologies={[
            "TypeScript",
            "Next.js",
            "APIs",
            "Semantic HTML",
            "Responsive CSS",
          ]}
          imageSrc="/images/Laundromapp.png"
          imageSrcMobile="/images/LaundroMapp_Mobile.png"
          imageAlt="LaundroMapp"
          siteUrl="https://main.d189tg24c2jbd.amplifyapp.com/"
        />
      </Stack>

      {projectCards.length > 0 && (
        <Box sx={{ maxWidth: 1100, mx: "auto", mt: 10 }}>
          <Typography
            sx={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "#809BB3",
              textTransform: "uppercase",
              mb: 4,
              textAlign: "center",
            }}
          >
            More Work
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {projectCards.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                description={project.description}
              />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
