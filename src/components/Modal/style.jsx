import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const DialogTrigger = styled(Dialog.Trigger)`
border: none;
cursor: pointer;
background-color: transparent;
`

export const Overlay = styled(Dialog.Overlay)`
position: fixed;
inset: 0;
background-color: rgb(0 0 0 / 0.8);
backdrop-filter: blur(3px);

`

export const DialogContent = styled(Dialog.Content)`

  border-radius: 20px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 90vw;
  max-width: 450px;
  max-height: 650px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({theme})=> theme.backgroundModal};
  `
export const Imagem = styled.img`
height: 15rem;
width: 20rem;
object-fit: center;
filter: grayscale(1);
margin-top: .8rem;
`
export const Title = styled(Dialog.Title)`
height: 4rem;
width: 17rem;
font-size: 1.4rem;
line-height: 2rem;
text-align: center;
background-color: transparent;
opacity:.9;
margin: .5 auto;
color: ${({ theme }) => theme.TextCardModal }
`
export const Text = styled(Dialog.Description)`
width: 20rem;
font-weight: bold;
margin-top: 1rem;
font-size: 1rem;
color: ${({ theme }) => theme.TextCardModal };
`

export const DialogClose = styled(Dialog.Close)`
width: 2rem;
height: 2rem;
position: absolute;
top:.5rem;
right: .5rem;
background-color: transparent;
border: none;
cursor: pointer;
`


export const OpenButton = styled.button`
height: 1.5rem;
width: 1.5rem;
border-radius:50%;
border: .5px solid #d9dadb ;
transition:.5s;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;


@media  (min-width:720px){
  font-size:1rem;

}
@media  (min-width:1200px){
  font-size:1.3rem;
 

}

&:hover{
  border: 1px solid #3F5950 ; 

}
`

export const Button = styled.button`
border: none;
background-color: transparent;
`
export const ContactMe = styled.a`
height: 3.5rem;
width: 20rem;
margin-top: 2rem;
border-radius:10px;
background-color:  ${({theme})=> theme.backgroundButtonModal};;
color: #000;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Nunito';
font-weight: 200;
font-size: 1.2rem;
gap:1rem;
border: none;
`