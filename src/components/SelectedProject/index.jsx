import React from "react";
import { Container, Header } from "./styles";
import Tasks from "../Tasks";

const SelectedProject = ({ project, onDelete, onAddTask, onDeleteTask, tasks }) => {
  const dataFormatada = new Date(project.dueDate).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Container>
      <Header>
        <div>
          <h1>{project.title}</h1>
          <button onClick={onDelete}>Deletar</button>
        </div>
        <p>{dataFormatada}</p>
        <p>{project.description}</p>
      </Header>
     <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </Container>
  );
};

export default SelectedProject;
