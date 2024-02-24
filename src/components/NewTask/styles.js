import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    input{
        width: 25.6rem;
        padding: .4rem .8rem;
        border-radius:.2rem;
        border: none;
        background-color: #c7c7c7;
    }

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding:  .5rem;
        border-radius:.2rem;

        &:hover{
            background-color: #C2C2C2;
        }
    }
`