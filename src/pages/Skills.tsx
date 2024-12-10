import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

import SkillCard from "../components/SkillCard.tsx";

export default function Skills() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={3}>
          <SkillCard
            name="React"
            logo="../logo.svg"
            description="React is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). Developed by Facebook, it allows developers to create reusable UI components that efficiently update and render in response to data changes. React uses a virtual DOM to optimize performance, ensuring that only necessary changes are applied to the real DOM. This makes React fast and responsive. It is component-based, meaning the UI is broken down into smaller, manageable pieces, which makes development more modular and easier to maintain. React also supports a declarative syntax, where developers describe how the UI should look based on the app's state, simplifying the process of building dynamic applications."
            proficiency="Advanced"
          />
        </Grid>
        <Grid size={3}>
          <SkillCard
            name="React"
            logo="../logo.svg"
            description="React is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). Developed by Facebook, it allows developers to create reusable UI components that efficiently update and render in response to data changes. React uses a virtual DOM to optimize performance, ensuring that only necessary changes are applied to the real DOM. This makes React fast and responsive. It is component-based, meaning the UI is broken down into smaller, manageable pieces, which makes development more modular and easier to maintain. React also supports a declarative syntax, where developers describe how the UI should look based on the app's state, simplifying the process of building dynamic applications."
            proficiency="Advanced"
          />
        </Grid>
        <Grid size={3}>
          <SkillCard
            name="React"
            logo="../logo.svg"
            description="React is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). Developed by Facebook, it allows developers to create reusable UI components that efficiently update and render in response to data changes. React uses a virtual DOM to optimize performance, ensuring that only necessary changes are applied to the real DOM. This makes React fast and responsive. It is component-based, meaning the UI is broken down into smaller, manageable pieces, which makes development more modular and easier to maintain. React also supports a declarative syntax, where developers describe how the UI should look based on the app's state, simplifying the process of building dynamic applications."
            proficiency="Advanced"
          />
        </Grid>
        <Grid size={3}>
          <SkillCard
            name="React"
            logo="../logo.svg"
            description="React is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). Developed by Facebook, it allows developers to create reusable UI components that efficiently update and render in response to data changes. React uses a virtual DOM to optimize performance, ensuring that only necessary changes are applied to the real DOM. This makes React fast and responsive. It is component-based, meaning the UI is broken down into smaller, manageable pieces, which makes development more modular and easier to maintain. React also supports a declarative syntax, where developers describe how the UI should look based on the app's state, simplifying the process of building dynamic applications."
            proficiency="Advanced"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
