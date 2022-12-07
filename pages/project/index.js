import React from "react";
import Link from "next/Link";

import Grid from "./grid";

import projects from "../../data/projects.json";
import { Container, Project } from "./styles";

const Projects = () => {
  return (
    <Container>
      {
        projects.map((project, index) => {
          // eslint-disable-next-line react/jsx-key
          return (<Project secund={`${index * 0.5}`}>
            <Link href={project.toString()} target="_blank" >
              <Grid src={`img/projects/${index + 1}.gif`} />
            </Link>
          </Project>)
        })
      }
    </Container>
  );
};

export default Projects;
