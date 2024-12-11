import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import SkillCardProps from "../static/types/SkillCardProps.tsx";

export default function SkillCard(props: SkillCardProps) {
  const adv = props.proficiency === "Advanced";
  const inter = props.proficiency === "Intermediate";
  const beg = props.proficiency === "Beginner";

  return (
    <Card raised={true} sx={{ maxWidth: 360, borderRadius: 8 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Box display="flex" flexDirection="column">
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {props.type}
            </Typography>
          </Box>

          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={props.logo}
            alt={props.name + " Logo"}
          />
        </Stack>
        <Typography
          variant="body2"
          gutterBottom
          sx={{ color: "text.secondary" }}
        >
          {props.description}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          My Experience
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          [To be filed]
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Proficiency
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip
            color={adv ? "blue" : "default"}
            label="Advanced"
            size="small"
          />
          <Chip
            color={inter ? "blue" : "default"}
            label="Intermediate"
            size="small"
          />
          <Chip
            color={beg ? "blue" : "default"}
            label="Beginner"
            size="small"
          />
        </Stack>
      </Box>
    </Card>
  );
}
