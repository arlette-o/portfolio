import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import SkillCard from "../components/SkillCard.tsx";
import SkillCardProps from "../types/SkillCardProps.tsx";
import skills from "../static/json/skills.json";

export default function Skills() {
  const skillcards: SkillCardProps[] = skills.map((item) => ({
    name: item.name,
    logo: item.logo,
    type: item.type,
    description: item.description,
    proficiency: item.proficiency as "Advanced" | "Intermediate" | "Beginner",
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {skillcards.map((skill, _) => (
          <Grid size={3} key={skill.name}>
            <SkillCard
              name={skill.name}
              type={skill.type}
              logo={skill.logo}
              description={skill.description}
              proficiency={skill.proficiency}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
