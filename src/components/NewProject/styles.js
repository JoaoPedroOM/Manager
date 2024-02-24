import styled from "styled-components";

export const Container = styled.div`
    width: 56rem;
    margin-top: 6.4rem;
    margin: 6.4rem 1rem 0rem 1rem;
    

    menu{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 1.6rem;
        margin: 1.6rem 0 1.6rem 0;

        li{
            list-style: none;
        }
    }

    @media(max-width:875px){
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
            width: 100%;
        }
    }
`

export const CancelButton = styled.button`
color: #000817;
border: none;
padding: .8rem 2.4rem .8rem 2.4rem;
border-radius:.6rem;
cursor: pointer;

&:hover{
    background-color: #D0D1D3;
}
`

export const SaveButton = styled.button`
background-color: #000817;
color: white;
border: none;
padding: .8rem 2.4rem .8rem 2.4rem;
border-radius:.6rem;
cursor: pointer;

&:hover{
background-color:#011130;
}
`