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
          2025-Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ background: "#121D40" }}>
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">
            Kixie Online Inc. - Software Developer, Internal Tooling
          </Typography>{" "}
          At Kixie, I worked across a pretty wide range of projects that had
          real impact on how the company operated day-to-day. I architected an
          automated phone number rotation and replenishment system running as a
          Kubernetes CronJob, which meaningfully improved how the team handled
          spam remediation for their VoIP platform. I also built an internal
          Slack bot that brought incident management into one place — connecting
          PagerDuty, Notion, and AWS CloudWatch — and ended up cutting both
          response and notification times in half. On the IT side, I built a
          full-stack asset tracking app from scratch that replaced a messy
          manual process, saving money on software and finally putting an end to
          lost equipment. I also got to work on something pretty cool on the
          recruiting side — AI-powered resume screening tools that automatically
          scored candidates against a weighted rubric and surfaced concise
          summaries, making the hiring process a lot faster for the team. The
          environment was fast-paced and always evolving. I got comfortable
          jumping between priorities, collaborating with teams of different
          sizes, and picking up context quickly when things shifted. Whether it
          was a last-minute pivot or a new initiative that needed to move fast,
          I learned to stay productive and deliver quality work without losing
          momentum.
        </TimelineContent>
      </TimelineItem>
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
          <Typography variant="h6">
            Veteran Benefits Guide - Full Stack Developer{" "}
          </Typography>{" "}
          In my role, I contributed to the overall development and custom
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
