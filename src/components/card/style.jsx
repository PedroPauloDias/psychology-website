import styled from "styled-components";



export const Container = styled.div`
height: 15.8rem;
width: 18.5rem;
border-radius: 1.85rem;
background-color: #F0F1F3;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
padding: 2.85rem 2.5rem;
`
export const Title = styled.p`
font-size: 1.6rem;
`
export const Button = styled.button`
height: 3rem;
width: 3rem;
border-radius:50%;
border: 1px solid #d9dadb ;
transition:.5s;
cursor: pointer;

&:hover{
  border: 1px solid #17191E ; 

}

`