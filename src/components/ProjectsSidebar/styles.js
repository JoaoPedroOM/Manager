import styled from "styled-components";

export const Container = styled.aside`
  width: 33.33%;
  padding: 6.4rem 3.2rem 6.4rem 3.2rem;
  background-color: #000817;
  color: #e2e2e2;

  h2 {
    margin-bottom: 3.2rem;
    text-transform: uppercase;
    color: #00f5ff;   
  }

  ul{
    margin-top: 3.2rem;
    list-style: none;
  }

  .buttonProject{
    width: 100%;
    text-align: left;
    padding: .4rem .8rem .4rem .8rem;
    border-radius: .2rem;
    margin: .5rem 0 .5rem 0;
    border: none;
    background: transparent;
    color: #02AAB1; 
    font-size: 1.6rem;

    &:hover{
      cursor: pointer;
      background-color: #00364e;
      
    }
  }

  .selected{
    background-color: #00364e;
    color: #00f5ff;
  }

  @media (min-width: 768px) {
    width: 28rem;

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width:500px) {
  padding: 3.4rem 2.2rem 3.4rem 2.2rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;
