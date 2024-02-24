import React, { useState } from "react";
import { Container } from "./styles";

const NewTask = ({onAdd}) => {
  const [enteredTask, setEnteredTask] = useState("");
  
  function handleChange(event){
    setEnteredTask(event.target.value)
  }

  function handleClick() {
    if(enteredTask.trim() === ""){
      return;
    }
    onAdd(enteredTask)
    setEnteredTask("")
  }

  return (
    <Container>
      <input type="text" onChange={handleChange} value={enteredTask}/>
      <button onClick={handleClick}>Add tarefa</button>
    </Container>
  );
};

export default NewTask;
