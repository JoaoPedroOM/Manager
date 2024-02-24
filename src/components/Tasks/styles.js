import styled from "styled-components";

export const Container = styled.section`
margin-left: 1rem;
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }

  p {
    margin: 1.6rem 0;
  }

  ul {
    padding: 1.6rem;
    margin-top: 3.2rem;
    border-radius: 0.6rem;
    background-color: #f5f5f5;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding: 1rem;
        font-weight: 700;
        color: #DC2E0E;

        &:hover {
          border-radius: 0.5rem;
          background-color: #c2c2c2;
        }
      }
    }
  }
`;
