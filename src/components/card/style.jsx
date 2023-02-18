import styled from "styled-components";

export const Container = styled.div`
height: 7rem;
width: 9rem;
border-radius: 1rem;
background:#F0F1F3;

display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
padding: .85rem .5rem;
`
export const Title = styled.p`
font-size: 1.1rem;
font-family: 'Nunito';
`
export const Button = styled.button`
height: 2rem;
width: 2rem;
border-radius:50%;
border: 1px solid #d9dadb ;
transition:.5s;
cursor: pointer;

&:hover{
  border: 1px solid #3F5950 ; 

}

`