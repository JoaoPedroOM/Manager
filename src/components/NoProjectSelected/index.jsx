import React from "react";
import { Container } from "./styles";
import noProjectImg from "../../assets/no-projects.png";
import Button from "../Button";

const NoProjectSelected = ({onStartAddProject}) => {
  return (
    <Container>
      <img
        src={noProjectImg}
        alt="Desenho de uma lista de tarefas com uma caneta ao lado"
      />
      <h2>Nenhum projeto selecionado</h2>
      <p>Selecione um projeto ou comece um novo.</p>
      <p>
        <Button onClick={onStartAddProject}>Criar novo projeto</Button>
      </p>
    </Container>
  );
};

export default NoProjectSelected;
