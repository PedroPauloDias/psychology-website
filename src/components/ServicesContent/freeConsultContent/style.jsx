import styled from "styled-components";


export const ContainerContent = styled.div`

@media (min-width:720px){
img{
  width: 100%;
  height: 30rem;
object-fit: cover;
margin-bottom: 1.5rem;
}
}
`

export const Container = styled.div`
padding: 1rem 1.2rem;


img{
  border-radius: 15px;
  object-fit: cover;
margin-bottom: 1.5rem;

}
@media (min-width:720px){

img{
width: 100%;
border-radius: 15px;
object-fit: cover;
margin-bottom: 1.5rem;

}

}



`
export const Cards = styled.div`
width: 22rem;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap:.7rem;
margin: 0 auto;


@media  (min-width:720px) {
  width: 100%;
  padding: 0 9rem;

}
@media  (min-width:1200px) {
display: grid;
grid-template-columns: repeat(2, 1fr);
margin-top: 7rem;
gap: 2rem;
}
@media  (min-width:1500px){
  margin-top: 5rem;


}`
export const ContainerCards = styled.div`
height: 35rem ;
margin-top: 5rem;

@media (min-width:320px) and (max-width:720px) {
}
@media (min-width: 1200px){
  width: 80%;
  height: 43.5rem;

}

@media (min-width:720px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

`


export const HighLightText = styled.span`
font-size: 1.2rem;
margin-top: -2rem;
margin-bottom: 1.5rem;
`

export const ContainerText = styled.div`
display: flex;
flex-direction: column;

@media (min-width:720px){
padding: 0 1.5rem;
}
`

export const Title = styled.h2`
font-size: 2rem;
margin: 2rem 0;
color: ${({ theme }) => theme.contrastText};

@media (min-width:720px){
font-size: 2.2rem;
margin: 4.2rem 0;

}
`
export const SubTitle = styled.h3`
font-size: 1.8rem;
margin: 1rem 0;
color: ${({ theme }) => theme.contrastText};


@media (min-width:720px){
  font-size: 2rem;

}
`

export const Text = styled.p`
margin-top: 1rem 0;
margin-bottom: 1rem;
font-family: inter;
font-size: 1.1rem;
line-height: 1.5rem;


@media (min-width:720px){
  font-size: 1.3rem;

}
`
























 




