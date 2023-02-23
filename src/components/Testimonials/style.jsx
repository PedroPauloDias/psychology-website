import styled from "styled-components";

export const Container = styled.div`
padding:.5rem 1.2rem;
margin:  1rem 0;

`

export const ContainerTitle = styled.div`
height: 7.5rem;
text-align: center;
font-family: 'Nunito';
font-weight: 700;
font-size: 1.6rem;
line-height: 2.5rem;
margin-top:2.5rem;

@media (min-width: 720px){
  height: 10rem;
  font-size: 2rem;
  margin-top: 5rem;
}

@media (min-width: 1200px){
  height: 13rem;
  font-size: 2.5rem;
  margin-top: 6rem;
}
`
export const ContainerSlider = styled.div`
height: 12rem;
position: relative;
padding: 0.5rem;
background-color: #F0F1F3;
border-radius: 30px;
  user-select: none;


.slick-prev::before,
.slick-next:before 
{
cursor: auto !important;
}


@media (min-width: 720px){
max-width: 40rem;
height: 14rem;
margin: 0 auto;

}

`
export const ContainerText = styled.div`

`

export const Text = styled.p`
font-size: 1rem;
font-family: 'Nunito';
font-style: italic;
font-weight: 200;
margin-left: 1.5rem;
color : #000;


@media (min-width: 720px){
margin: 1.5rem auto;
font-size: 1.3rem;
}


`
export const Quote2 = styled.div`
text-align: end;
margin-top: .5rem;

`

export const Image = styled.img`
width: 100%;
max-height: 50rem;
object-fit: contain;
`