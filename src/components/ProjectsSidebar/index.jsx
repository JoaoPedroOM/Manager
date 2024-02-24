import React from "react";

import { Container } from "./styles";
import Button from "../Button";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <Container>
      <h2>Seus projetos</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Projeto</Button>
      </div>
      <ul>
        {projects.map((project) => (
            <li key={project.id}>
              <button onClick={() => onSelectProject(project.id)} className={project.id === selectedProjectId ? "buttonProject selected" : "buttonProject"}>
                {project.title}
              </button>
            </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProjectsSidebar;
