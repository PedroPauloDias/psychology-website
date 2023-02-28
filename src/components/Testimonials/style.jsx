import styled from "styled-components";

export const Container = styled.div`
margin:  1rem 1.5rem;

`

export const ContainerTitle = styled.div`
height: 8rem;
text-align: start;
font-weight: 700;
font-size: 1.6rem;
line-height: 2.5rem;
margin-top:2.5rem;



@media (min-width: 720px){
  height: 6rem;
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
height: 13rem;
background-color: #F0F1F3;
border-radius: 30px;
  user-select: none;
  padding: 1rem;

.slick-prev::before,
.slick-next:before 
{
display: none !important;
cursor: auto !important;
}


@media (min-width: 720px){
width: 45rem;
height: 14rem;
margin: 0 auto;

}

`
export const ContainerText = styled.div`

padding: 1rem 2rem;
`

export const Text = styled.p`

font-size: 1rem;
color : #000;


@media (min-width: 720px){
margin: 1.5rem auto;
font-size: 1.3rem;
}


`


export const Image = styled.img`
width: 100%;
max-height: 50rem;
object-fit: contain;
`