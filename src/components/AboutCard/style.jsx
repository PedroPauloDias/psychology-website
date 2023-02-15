import styled from "styled-components";


export const Container = styled.div`

width: 20.2rem;
background-color: #3F5950;
color: #fff;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
padding: .5rem;

`
export const Title = styled.p`
font-weight: 700;
font-size: 2rem;
font-family: 'Nunito';
font-style: italic;
`

export const Description = styled.p`
font-family: 'Nunito';
font-style: italic;
font-weight: 200;
font-size: 1.2rem;

color: #fff;
opacity: 0.7;
`
export const Button = styled.button`
height: 3rem;
width: 9.5rem;
border-radius:1.5rem;
display: flex;
align-items: center;
justify-content: space-around ;
padding: 0.5rem 1.2rem;
font-weight: 200;
font-family: 'Nunito';
font-style: italic;
font-size: 1rem;
color: #070A11;
margin: 1rem .5rem ;
border: none;


transition:.5s;
cursor: pointer;


`