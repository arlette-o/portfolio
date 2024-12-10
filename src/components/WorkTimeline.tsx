import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export default function WorkTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2022 - 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "#121D40" }}>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Veteran Benefits Guide </Typography> In my
          role, I contributed to the overall development and custom
          implementation of VBG webApps, ensuring that both new and existing
          systems met our evolving needs. This included maintaining legacy
          applications and developing innovative internal tools that enhanced
          efficiency. I applied my knowledge of the Software Development
          Lifecycle and adhered to best practices to drive projects forward.
          Additionally, I utilized Root Cause Analysis and standard Software
          Engineering problem-solving techniques to address issues effectively.
          A key part of my responsibilities was to create and maintain
          comprehensive technical documentation, which aided in knowledge
          sharing and project continuity. My ability to effectively communicate
          complex concepts allowed me to collaborate seamlessly with team
          members and stakeholders alike.In my role, I contributed to the
          overall development and custom implementation of VBG webApps, ensuring
          that both new and existing systems met our evolving needs. This
          included maintaining legacy applications and developing innovative
          internal tools that enhanced efficiency. I applied my knowledge of the
          Software Development Lifecycle and adhered to best practices to drive
          projects forward. Additionally, I utilized Root Cause Analysis and
          standard Software Engineering problem-solving techniques to address
          issues effectively. A key part of my responsibilities was to create
          and maintain comprehensive technical documentation, which aided in
          knowledge sharing and project continuity. My ability to effectively
          communicate complex concepts allowed me to collaborate seamlessly with
          team members and stakeholders alike.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "#121D40" }}>
            <SchoolIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Graduated from Cal Poly SLO</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
