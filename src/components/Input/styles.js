import styled from "styled-components";

export const Container = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 1.6rem 0 1.6rem 0;

  label {
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #787878;
  }
  input {
    border: none;
    border-bottom: .2rem solid; 
    &:focus {
      outline: none;
      border: .1rem solid #646464;
    }
  }

  textarea,
  input {
    width: 100%;
    padding: 1rem;
    border-bottom-width: 0.2rem;
    border-radius: 0.2rem;
    border-color: #a8a8a8;
    background-color: #c7c7c7;
    color: #646464;

    &:focus {
      outline: none;
      border-color: #646464;
    }
  }
`;
