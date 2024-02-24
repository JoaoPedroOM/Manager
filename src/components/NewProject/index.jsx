import React, { useRef } from "react";
import { Container, CancelButton, SaveButton } from "./styles";
import Index from "../Input";
import Modal from "../Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open()
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2>Input inválido</h2>
        <p>Oops...parece que você esqueceu de inserir um valor!</p>
        <p>Certifique-se de fornecer um valor válido para cada campo de entrada.</p>
      </Modal>
      <Container>
        <menu>
          <li>
            <CancelButton onClick={onCancel}>Cancelar</CancelButton>
          </li>
          <li>
            <SaveButton onClick={handleSave}>Salvar</SaveButton>
          </li>
        </menu>
        <div>
          <Index type="text" ref={title} label="Título" />
          <Index ref={description} label="Descrição" isTextarea />
          <Index type="date" ref={dueDate} label="Data de vencimento" />
        </div>
      </Container>
    </>
  );
};

export default NewProject;
