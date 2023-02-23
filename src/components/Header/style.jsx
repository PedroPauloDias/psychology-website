import styled from "styled-components";

export const LogoContainer = styled.div`
width:100%;
position: relative;

`

export const logoCards = styled.div`
min-height: 9.9rem;
bottom:.1rem;
position: absolute;
`
export const Cards = styled.div`
max-width: 22rem;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap:.7rem;
margin: 0 auto;

@media  (min-width:720px) {
max-width: 100%;
margin: 1.5rem;

}
@media  (min-width:1200px) {
max-width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
margin-top: 1.5rem;

}
`

export const Image = styled.img`
width: 100%;
object-fit: cover;

`
export const Container = styled.div`
height: 27.5rem ;

@media (min-width:320px) and (max-width:720px) {
}



@media (min-width:720px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}

`

export const ContainerTitle = styled.div`
height: 8rem;
line-height: 1rem;
font-size: 1.7rem;
padding: .5rem;
margin: 1rem 0;
margin-left: 2.7rem;
font-weight: 700;




@media (min-width:720px) {
  font-size: 2rem;
  margin-right: 2.5rem;
}
@media (min-width:1200px) {
  font-size: 2rem;
  margin-top: 4.5rem;
}
`

export const Title = styled.h2`
color: ${({theme})=> theme.text};
margin: 1.5rem 0;



@media (min-width:720px) {
  margin: 2rem 0;
  font-size: 2.5rem;
}

@media (min-width:1200px) {
  margin: 2rem 0;
  font-size: 3.5rem;
}
`


export const SubTitle = styled.p`
color:#EECD62;

@media (min-width:720px) {
  margin: 2rem 0;
  font-size: 2rem;
}

@media (min-width:1200px) {
  margin: 2rem 0;
  font-size: 3rem;
}

`