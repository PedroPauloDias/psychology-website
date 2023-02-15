import styled from "styled-components";

export const Container = styled.div`
padding:.5rem 1.2rem;
margin:  1rem 0;
`
export const ContainerSlider = styled.div`
height: 10rem;
position: relative;
padding: 0.5rem;
background-color: #F0F1F3;
border-radius: 30px;

.slick-prev::before{
  color: #EECD62 !important;
  font-size: .9rem;
  margin-right: .5rem;
}

.slick-next:before {
  color: #EECD62 !important;
  font-size: .9rem;
  margin-left: .3rem;

}
`
export const ContainerText = styled.div`

`

export const Text = styled.p`
font-size: .8rem;
font-family: 'Nunito';
font-style: italic;
font-weight: 200;
margin-left: 1.5rem;

`
export const Quote2 = styled.div`
text-align: end;
margin-top: .5rem;

`

export const Image = styled.img`
width: 100%;
object-fit: cover;
`