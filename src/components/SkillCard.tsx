import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import SkillCardProps from "../types/SkillCardProps.tsx";

export default function SkillCard(props: SkillCardProps) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 360, borderRadius: 8 }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={props.logo}
            alt={props.name + " Logo"}
          />
          {/* <Typography gutterBottom variant="h6" component="div">
            {props.logo}
          </Typography> */}
        </Stack>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.description}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Proficiency {props.proficiency}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Advanced" size="small" />
          <Chip label="Intermediate" size="small" />
          <Chip label="Beginner" size="small" />
        </Stack>
      </Box>
    </Card>
  );
}
