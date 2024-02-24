import React from "react";
import {Container} from "./styles";

import { forwardRef  } from "react";

const Input = forwardRef (({label, isTextarea, ...props}, ref) => {
  return (
    <Container>
      <label>{label}</label>
      {isTextarea ? <textarea ref={ref} {...props}/> : <input ref={ref} {...props}/>}
    </Container>
  );
});

export default Input;
