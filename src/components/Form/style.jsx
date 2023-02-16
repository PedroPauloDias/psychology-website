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
margin-left: 1.5rem;
border-radius: 20px;
border: unset;
outline: none;
font-family: 'Nunito';
font-style: italic;
font-weight: 200;
font-size: .8rem;
line-height: 160%;
display: flex;
align-items: center;
color: #17191E;
`

export const ContainerTextArea = styled.div`
height:7rem ;
width:19rem ;
background-color: #fff;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: flex-start;
`
export const TextArea = styled.textarea`
border: unset;
outline: none;
font-style: italic;
font-weight: 200;
font-size: .8rem;
margin-left: 1.5rem;
`

export const ContainerSelect = styled.div`
height: 3.2rem;
width: 19rem;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

background-color: #fff;
`
export const TextLabel = styled.label`
width: 100%;
font-family: 'Nunito';
font-style: italic;
font-weight: 200;
font-size: .8rem;
color:#17191E;
margin-left: 1.5rem;

`

export const Select = styled.select`
 width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  appearance: none;
  margin-left : 1rem;
  cursor: pointer;





`
export const Option = styled.option`
width: 60%;
margin-left: 1.5rem;
border-radius: 20px;
font-family: 'Nunito';
font-style: italic;
font-weight: 200;
font-size: .8rem;
line-height: 160%;
display: flex;
align-items: center;
color: #17191E;


;
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

`

export const Button = styled.button`
background-color: #3F5950;
color:#fff;
display: flex;
align-items: center;
justify-content: space-around;
font-family: 'Nunito';
font-style: normal;
font-weight: 500;
font-size: .8rem;
gap:.5rem;

border: none;
`





