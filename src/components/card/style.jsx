import styled from "styled-components";

export const Container = styled.div`
height: 8rem;
width: 12rem;
border-radius: 1rem;
background: rgb(63,89,80);
background: linear-gradient(166deg, rgba(63,89,80,0.27494747899159666) 53%, rgba(217,193,150,1) 100%);
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