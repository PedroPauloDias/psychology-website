import styled from "styled-components";

export const Container = styled.div`
margin:  1rem 1.5rem;



@media (min-width: 1200px){
  display: flex;
  gap: 1.5rem;
  
}
`

export const ContainerTitle = styled.div`
height: 8rem;
text-align: start;
font-weight: 700;
font-size: 1.7rem;
line-height: 3rem;
margin-top:2.5rem;





@media (min-width: 720px){
  width: 30rem;
  height: 6rem;
  font-size: 2rem;
  margin: 3rem 1rem;
}

@media (min-width: 1200px){
  height: 13rem;
  font-size: 2rem;
  margin-top: 2rem;
}
@media (min-width: 1400px){
  font-size: 2.2rem;
  margin-left: 2.5rem;  line-height: 
  4rem;
  

}


`
export const ContainerSlider = styled.div`
height: 11.5rem;
background-color: #F0F1F3;
border-radius: 20px;
  user-select: none;


.slick-prev::before,
.slick-next:before 
{
display: none !important;
cursor: auto !important;
}


@media (min-width: 720px){
width: 100%;
margin: 0 auto;
padding: 1.3rem;

}
@media (min-width: 1200px){
width: 32rem;
height: 15rem;
padding-right: 2rem;
margin-top: -2rem;
;}


@media (min-width: 1500px){
width: 42rem;
height: 20rem;
margin: 0 auto;
margin-top: 3rem;
margin-left:3rem;

}
@media (min-width: 1600px){
width: 52rem;
height: 20rem;
margin: 0 auto;
margin-top: 3rem;

}


`
export const ContainerText = styled.div`
padding: 1rem 1.5rem;
`

export const Text = styled.p`

font-size: 1.1rem;
color : #000;


@media (min-width: 720px){
padding: 1.5rem auto;
font-size: 1.3rem;
}
@media (min-width: 1200px){
font-size: 1.4em;
line-height: 1.5rem;
}

@media (min-width: 1500px){
padding: 1.5rem ;
font-size: 1.6rem;
font-size: 1.5rem;
line-height: 2rem;
}


`


export const Image = styled.img`
max-height: 23rem;
object-fit: cover;
border-radius: 30px;
margin-right: 1.5rem;

@media (min-width: 760px){
  max-height: 28rem;
  width: 98%;
  margin-left: .5rem;
}

@media (min-width: 1200px){
  max-height: 31rem;
  width: 100%;
  margin-left: -2rem;
}
@media (min-width: 1500px){
  max-height: 38rem;
}



`

export const ContainerImage = styled.div`


@media (min-width: 1200px){
margin-left: 2rem;
width: 50%;
}
@media (min-width: 1500px){
width:45%

}

@media (min-width: 2000px){
width:100%

}
`

export const InstagramContainer = styled.div`
background-color : red;
height: 1rem;
margin-top: -2rem;
z-index: 100000;

`