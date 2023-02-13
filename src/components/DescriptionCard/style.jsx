import styled from "styled-components";


export const Container = styled.div`
height: 19rem;
width: 32.2rem;
background-color:#070A11;
color: #fff;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
padding: .5rem;
`
export const Title = styled.p`
font-weight: 700;
font-size: 3rem;
`

export const Description = styled.p`
font-family: 'Nunito';
font-style: italic;
font-weight: 200;
font-size: 18px;
line-height: 140%;
color: #FFFFFF;
opacity: 0.7;
`
export const Button = styled.button`
font-family: 'Nunito';
height: 3rem;
width: 9.5rem;
border-radius:1.5rem;
display: flex;
align-items: center;
justify-content: space-around ;
padding: 0.5rem 1.2rem;
font-weight: 200;
font-style: italic;
color: #070A11;


transition:.5s;
cursor: pointer;


`