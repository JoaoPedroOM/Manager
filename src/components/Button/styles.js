import styled from "styled-components";

export const Container = styled.button`
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
  font-size: 1.2rem;
  background-color: #00364e;
  color: #00abe3;
  border: none;


  &:hover {
    cursor: pointer;
    background-color: #085a7e;
    color: #00f5ff;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    border-radius: 0.6rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
    border-radius: 0.6rem;
  }
`;
