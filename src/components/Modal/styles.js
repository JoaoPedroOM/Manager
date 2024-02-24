import styled from "styled-components";

export const Container = styled.dialog`
  margin: auto;
  backdrop-filter: brightness(0.25) saturate(150%) blur(20px);
  border-radius: 0.6rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 1.6rem 0 1.6rem 0;
    color: #575757;
  }
  p {
    color: #717070;
    margin-bottom: .5rem;
  }

  form{
    margin-top: 1.6rem;
    text-align: right;
  }
`;
