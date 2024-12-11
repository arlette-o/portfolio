import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import SkillCard from "../components/SkillCard.tsx";
import SkillCardProps from "../static/types/SkillCardProps.tsx";
import skills from "../static/json/skills.json";
import { Typography } from "@mui/material";

const skillCardsInit: SkillCardProps[] = skills.map((item) => ({
  name: item.name,
  logo: item.logo,
  type: item.type,
  description: item.description,
  proficiency: item.proficiency as "Advanced" | "Intermediate" | "Beginner",
}));

//idea for this page is to be able to order/filter skills
export default function Skills() {
  const [skillCards, setSkillCards] = React.useState(skillCardsInit);

  const sortSkillCardsAlpha = () => {
    const sorted = [...skillCards].sort((a, b) => a.name.localeCompare(b.name));
    setSkillCards(sorted);
  };

  const sortSkillCardsZeta = () => {
    const sorted = [...skillCards].sort((a, b) => b.name.localeCompare(a.name));
    setSkillCards(sorted);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid size={2} />
        <Grid size={8} textAlign={"center"}>
          <Typography variant="h3" gutterBottom>
            Here are all the tools, technologies and methodologies that I am
            experienced with
          </Typography>
          <Typography variant="h6" gutterBottom>
            I am constanly learning and working to expand this list
          </Typography>
        </Grid>
        <Grid size={2} />
      </Grid>

      <Grid container spacing={1}>
        <Grid size={2} />
        <Grid size={8} textAlign={"center"}>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button onClick={() => setSkillCards(skillCardsInit)}>
              Category
            </Button>
            <Button onClick={sortSkillCardsAlpha}>A-Z</Button>
            <Button onClick={sortSkillCardsZeta}>Z-A</Button>
          </ButtonGroup>
        </Grid>
        <Grid size={2} />
      </Grid>

      <Grid
        container
        spacing={2}
        alignItems={"center"}
        mt={2}
        ml={{ md: 8, xs: 2 }}
      >
        {skillCards.map((skill, _) => (
          <Grid size={{ md: 3, xs: 12 }} key={skill.name}>
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
