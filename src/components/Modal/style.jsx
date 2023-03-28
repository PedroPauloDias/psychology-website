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
  height: 65vh;
  width: 85vw;
  max-width: 450px;
  max-height: 650px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundModal};

  @media  (min-width: 720px){
  max-width: 450px;
  height: 70vh;

}


  @media  (min-width:1200px){
    max-width: 450px;
    height: 80vh;
  max-height: 700px;

}

@media  (min-width:2000px){
    max-width: 500px;
  max-height: 800px;

}
  
`
export const ContainerCard = styled.div`

`



export const Imagem = styled.img`
width: 100%;
object-fit: cover;
filter: grayscale(1);
margin-top: -2rem;

@media  (min-width:1200px){
margin-top: -3rem;

}

@media  (min-width:2000px){
margin-top: -3rem;

}




`
export const Title = styled(Dialog.Title)`
height: 4rem;
width: 15rem;
font-size: 1.3rem;
line-height: 2rem;
text-align: center;
background-color: transparent;
opacity:.9;
margin: 0 .5rem ;
left: 3rem;
top:1rem;
color: ${({ theme }) => theme.TextCardModal};


@media  (min-width: 720px){
width: 20rem;
font-size: 1.5rem;
line-height: 2rem;
margin: .5rem 0;
margin-left: -2rem;

}

  @media  (min-width:1200px){
height: 6rem;
width: 20rem;
font-size: 1.6rem;
line-height: 2rem;
margin: .5rem 0;
margin-left: -1rem;


}

@media  (min-width:2000px){
height: 6rem;
width: 20rem;
font-size: 1.8rem;
line-height: 2rem;
margin: 1rem 0;

}
`

export const Text = styled(Dialog.Description)`
width: 20rem;
margin-top: 1rem;
font-size: .9rem;
color: ${({ theme }) => theme.TextCardModal};

@media  (min-width: 720px){
width: 25rem;
font-size: 1.2rem;


}

@media (min-width: 1200px){
  width: 24rem;
font-size: 1.5rem;
};
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


export const OpenButton = styled.div`
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

export const Button = styled.div`
border: none;
background-color: transparent;



`
export const ContactMe = styled.a`
height: 3rem;
width: 20rem;
margin-top: 2.5rem;
border-radius:10px;
background-color:  ${({ theme }) => theme.backgroundButtonModal};;
color: #000;
display: flex;
align-items: center;
justify-content: center;
font-weight: 200;
font-size: 1rem;
gap:1rem;
border: none;
cursor: pointer;

@media (min-width: 1200px){
  font-size:1.2rem;
}

@media  (min-width:2000px){
  height: 4rem;
width: 22rem;
font-size:1.5rem;
}




`