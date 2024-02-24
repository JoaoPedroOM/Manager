import React from "react";
import { Container } from "./styles";
import NewTask from "../NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <Container>
      <h2>Tarefas</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p>Esse projeto não tem nenhuma tarefa.</p>}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => onDelete(task.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Tasks;
