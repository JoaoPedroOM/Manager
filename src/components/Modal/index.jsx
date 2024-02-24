import React, { useRef } from "react";
import { Container } from "./styles";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "../Button"

const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    };
  });

  return createPortal(
    <Container ref={dialog}>
        {children}
        <form method="dialog">
            <Button>Fechar</Button>
        </form>
    </Container>,
    document.getElementById("modal-root")
  );
});

export default Modal;
