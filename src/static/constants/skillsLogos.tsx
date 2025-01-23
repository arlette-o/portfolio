import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faFigma,
  faNodeJs,
  faGitAlt,
  faDocker,
  faAws,
  faAtlassian,
  faJs,
  faPython,
  faJava,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faDatabase,
  faClipboardQuestion,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

export const skillsLogos: JSX.Element[] = [
  <FontAwesomeIcon icon={faReact} size="xl" />, // React 0
  <FontAwesomeIcon icon={faReact} size="xl" />, // React Redux 1
  <div />, //  MUI (Material-UI) 2
  <div />, // Next.js 3
  <FontAwesomeIcon icon={faFigma} size="xl" />, // Figma 4
  <FontAwesomeIcon icon={faNodeJs} size="xl" />, // Node.js 5
  <FontAwesomeIcon icon={faServer} size="xl" />, //  Express 6
  <div />, // Flask
  <div />, // Django
  <div />, // GraphQL
  <FontAwesomeIcon icon={faServer} size="xl" />, //Apollo
  <FontAwesomeIcon icon={faServer} size="xl" />, //REST APIs
  <FontAwesomeIcon icon={faDatabase} size="xl" />, //MongoDB
  <FontAwesomeIcon icon={faDatabase} size="xl" />, //PostgreSQL
  <FontAwesomeIcon icon={faDatabase} size="xl" />, //Studio 3T
  <FontAwesomeIcon icon={faClipboardQuestion} size="xl" />, //Postman
  <FontAwesomeIcon icon={faClipboardQuestion} size="xl" />, //Jest
  <FontAwesomeIcon icon={faClipboardQuestion} size="xl" />, //PlayWright
  <FontAwesomeIcon icon={faClipboardQuestion} size="xl" />, //TDD (Test Driven Development)
  <FontAwesomeIcon icon={faGitAlt} size="xl" />, //Git
  <div />, //CI/CD
  <FontAwesomeIcon icon={faDocker} size="xl" />, //Docker
  <FontAwesomeIcon icon={faAws} size="xl" />, //AWS (Amazon Web Services)
  <div />, //Azure
  <div />, //DataDog
  <div />, //Agile / SCRUM methodologies
  <FontAwesomeIcon icon={faAtlassian} size="xl" />, //Jira
  <FontAwesomeIcon icon={faCode} size="xl" />, //TypeScript
  <FontAwesomeIcon icon={faJs} size="xl" />, //JavaScript
  <FontAwesomeIcon icon={faPython} size="xl" />, //Python
  <FontAwesomeIcon icon={faJava} size="xl" />, // Java
  <FontAwesomeIcon icon={faCode} size="xl" />, //SQL
  <FontAwesomeIcon icon={faCode} size="xl" />, //C#
  <FontAwesomeIcon icon={faCode} size="xl" />, //C
  <FontAwesomeIcon icon={faAngular} size="xl" />, //34
];
