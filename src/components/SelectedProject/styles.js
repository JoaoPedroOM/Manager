import styled from "styled-components";

export const Container = styled.div`
  width: 56rem;
  margin-top: 6.4rem;

  @media(max-width:450px){
    width: 30rem;
    }
`;

export const Header = styled.header`
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  margin-left: 1rem;
  border-bottom: 2px solid #a8a8a8;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 3rem;
      line-height: 3.6rem;
      margin-bottom: 0.8rem;
      color: #006b92;
    }

    button{
      border: none;
      background-color: transparent;
      cursor: pointer;
      padding: 1rem;
      font-weight: 700;
      color: #4F4F4F;

      &:hover{
        border-radius:.5rem;
        background-color: #C2C2C2;
      }
    }
    @media(max-width:450px){
      margin-left: 0rem;
      div{
        h1{
          font-size: 1rem;
        }
      }
    }
  }

  p {
    margin-bottom: 1.6rem;
  }
  p:nth-of-type(2) {
    white-space: pre-wrap;
  }
`;
