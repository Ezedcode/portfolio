import React from "react";

import Grid from "./grid";

import projects from "../../data/projects.json";
import { Container, Project } from "./styles";

const Projects = () => {
  return (
    <Container>
      {
        projects.map((project, index) => {
          // eslint-disable-next-line react/jsx-key
          return (<Project secund={`${index * 0.2}`}>
            <Grid src={project} />
          </Project>)
        })
      }
    </Container>
  );
};

export default Projects;
