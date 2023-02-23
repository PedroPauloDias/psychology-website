import styled from "styled-components";

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:.8rem;
margin: 1.2rem ;
padding: 2rem .8rem;
background: #E9EFF1;
border-radius: 15px;
margin-top: 1.5rem;
`
export const containerInput = styled.div`
height: 3.2rem;
width: 19rem;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: flex-start;



background-color: #fff;
`
export const Input = styled.input`

width:100%;
height:100%;
border-radius: 20px;
border: unset;
outline: none;
font-weight: 200;
font-size: 1rem;
display: flex;
align-items: center;
color: #17191E;
padding: 1rem 1.5rem;
`

export const ContainerTextArea = styled.div`
height:7rem ;
width:19rem ;
background-color: #fff;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: flex-start;
border: none;
outline: none;


`
export const TextArea = styled.textarea`
height: 100%;
width: 100%;
border: unset;
outline: none;
font-size: 1rem;
padding: 1rem 1.5rem;
border-radius: 10px;




`

export const ContainerSelect = styled.div`
width: 19rem;
border-radius: 10px;
margin-bottom: .5rem;
font-weight: 200;

&::focus{
  border: none;
}




background-color: #fff;
`
export const TextLabel = styled.label`
width: 100%;
font-weight: 200;
font-size: 1rem;
color:#17191E;
margin-left: 1.5rem;

@media (min-width:720px) {
  font-size: 1rem;
  text-align: center;
  margin-right: 9rem;
}

@media (min-width:1200px) {
  margin-right: 7rem;
  text-align: center;
  font-size: 1.2rem;
}

`


export const CaretDownContainer = styled.div`
height:2.5rem;
width: 2.5rem;
background-color: #3F5950;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-right: .5rem;

`
export const ContainerButton = styled.div`
height: 3.2rem;
width: 19rem;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
background-color: #3F5950;
margin-top: 1rem;
margin-bottom: 1.5em;

`

export const Button = styled.button`
background-color: #3F5950;
color:#fff;
display: flex;
align-items: center;
justify-content: space-around;
font-style: normal;
font-weight: 500;
font-size: .8rem;
gap:.5rem;

border: none;
`





