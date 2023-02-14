import styled from "styled-components";

export const Container = styled.div`
height: 8rem;
width: 12rem;
border-radius: 1rem;
background: rgb(255,255,255);
background: linear-gradient(128deg, rgba(255,255,255,1) 33%, rgba(159,159,159,1) 100%);
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
padding: .85rem .5rem;
`
export const Title = styled.p`
font-size: .8rem;
`
export const Button = styled.button`
height: 2rem;
width: 2rem;
border-radius:50%;
border: 1px solid #d9dadb ;
transition:.5s;
cursor: pointer;

&:hover{
  border: 1px solid #17191E ; 

}

`