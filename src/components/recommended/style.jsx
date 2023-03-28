import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 5rem;

@media (min-width: 720px){

  padding: 1rem ;

}
@media (min-width: 1200px){
  display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
  height:45rem;
  padding: 1rem 2rem;
}
@media (min-width: 2000px){
  height:45rem;
  padding: 1rem 2rem;
  margin-bottom: -2rem;
}

`


export const ContainerSlider = styled.div`

height:35rem;
width:90%;
border-radius: 30px;
  user-select: none;
  margin-left: 1.5rem;
cursor: pointer;


.slick-prev::before,
.slick-next:before 
{
display: none !important;
cursor: auto !important;
}


@media (min-width: 720px){
width: 90%;
height: 40rem;
img{
height: 28rem;
width: 32rem;
padding: 1rem;
}

}
@media (min-width: 1200px){
width: 30rem;
height: 15rem;
padding-right: 2rem;
margin-top: -17rem;

img{
height: 25rem;
width: 28rem;
}
;}


@media (min-width: 1500px){
width: 42rem;
height: 20rem;
margin: 0 auto;
margin-top: -24rem;
padding-left: 3rem ;

img{
height: 32rem;
width: 37rem;
}

}

@media (min-width: 2000px){
  width: 38rem;
  margin-left: 1.5rem;

img{
height: 32rem;
width: 33rem;
}

}

`

export const Title = styled.h2 `
height: 8rem;
text-align: start;
font-weight: 700;
font-size: 1.8rem;
line-height: 2.5rem;
padding: 1rem 0rem;
margin-top : 1rem;

@media (min-width: 720px){
  width: 21rem;
}
@media (min-width: 1200px){
  font-size: 2.5rem;
line-height: 2.5rem;
margin-left: -2rem;

}
@media (min-width: 1500px){
  font-size: 2.5rem;
line-height: 2.5rem;
margin-top: 2rem;
margin-left: 0rem;

}

@media (min-width: 2000px){
  font-size: 2.5rem;
line-height: 2.5rem;
margin-top: 2rem;

}
`

export const Imagem = styled.img`
width:90%;
max-height: 35rem;
object-fit: cover;
border-radius: 30px;
background-color: orange;
margin-left: 1.5rem ;

@media (min-width: 760px){
  max-height: 30rem;

  width: 90%;

}

@media (min-width: 1200px){
  max-height: 34rem;
  width: 90%;
}
@media (min-width: 1500px){
 max-height: 40rem;
 border-radius: 30px;
   margin-left: .5rem;

 
}



`

export const ContainerImage = styled.div`


@media (min-width: 720px){
  width:100%;
}
@media (min-width: 1200px){
}
@media (min-width: 1500px){
width:100%;
border-radius: 30px;


}
`
