import styled from "styled-components";

export const ContainerContent = styled.div`

@media (min-width:720px){
img{
  width: 100%;
  height: 30rem;
object-fit: cover;
margin-bottom: 1.5rem;
};

};
`
export const Container = styled.div`

@media (min-width: 1200px){
  display: flex;

  img{
  width: 580px;
  border-radius: 15px;
  object-fit: cover;
margin-bottom: 1.5rem;

};
}

@media (min-width: 2000px){
  display: flex;
  img{
  width: 680px;
  border-radius: 15px;
  object-fit: cover;
margin-bottom: 1.5rem;
};
}

img{

  border-radius: 15px;
  object-fit: cover;
margin-bottom: 1.5rem;

};
`

export const ContainerGroup = styled.div`
@media (min-width: 1200px){
gap:1.5rem ;


  div:nth-child(even){
flex-direction: row-reverse;
  }
}

@media (min-width: 2000px){
  width:1440px;
gap:1.5rem ;

  div:nth-child(even){
flex-direction: row-reverse;
  }
}
`
export const Group = styled.div `

padding: 0 1rem ;
@media (min-width: 1200px){
  display: flex;
  gap:1rem;
}
@media (min-width: 2000px){
  display: flex;
  width:1440px;
  gap:1rem;
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


@media (min-width: 1200px){

margin-bottom: 3rem ;
}


@media (min-width: 2000px){

width: 680px;
margin-bottom: 2rem ;

}

`

export const Title = styled.h2`

font-size: 1.5rem;
margin: 2rem 1rem;
color: ${({ theme }) => theme.contrastText};

@media (min-width: 720px){
font-size:2.5rem;

}
@media (min-width: 1200px){
  height:4rem;
width: 100%;
padding:1rem ;
font-size:1.8rem;
margin: 2.5rem 0 ;
background: rgb(63,89,80);
background: linear-gradient(79deg, rgba(63,89,80,0.27494747899159666) 53%, rgba(217,193,150,1) 100%);

}
@media (min-width: 2000px){
  height:6rem;
  width: 100%;
padding:1rem ;
font-size:2.5rem;
margin: 2.5rem 0 ;
background: rgb(63,89,80);
background: linear-gradient(79deg, rgba(63,89,80,0.27494747899159666) 53%, rgba(217,193,150,1) 100%);

}
`

export const SubTitle = styled.h3`
font-size: 1.5rem;
margin: 2rem 1rem;
color: ${({theme})=> theme.contrastText};

@media (min-width: 720px){
font-size:2.3rem;

}
@media (min-width: 1200px){
  height:4rem;
  padding: 1rem;
font-size:1.8rem;
background: rgb(63,89,80);
background: linear-gradient(79deg, rgba(63,89,80,0.27494747899159666) 53%, rgba(217,193,150,1) 100%);
}

@media (min-width: 2000px){
  width: 100%;
  height:6rem;
  padding: 1rem;
font-size:2.5rem;
margin: 2rem 0 ;
background: rgb(63,89,80);
background: linear-gradient(79deg, rgba(63,89,80,0.27494747899159666) 53%, rgba(217,193,150,1) 100%);

}


`

export const Text = styled.p`
margin-top: 1rem 0;
margin-bottom: 1rem;
font-family: inter;
font-size: 1.1rem;
line-height: 1.5rem;


@media (min-width: 720px){
font-size:2rem;
line-height: 2rem;
}

@media (min-width: 1200px){
font-size:2rem;
line-height: 2rem;
padding: 1.2rem 1.5rem ;

}

@media (min-width: 2000px){

width: 750px;
padding: 1.7rem ;
font-size: 2rem;
line-height: 3rem;
}
`
export const ContainerContact = styled.div `


img{
  display: none;
}
@media (min-width:1200px){
  height: 60rem;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 5rem;
  background: rgb(63,89,80);
background: linear-gradient(79deg, rgba(63,89,80,0.27494747899159666) 53%, rgba(217,193,150,1) 100%);
padding: .5rem;
  
  img{
    display: inline;
    height:500px;
    width: 60%;
    object-fit: cover;
    padding-top : 1rem;
  };

}

@media (min-width:2000px){
  width:1440px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;
  padding: 1rem 2rem ;

  img{
    display: inline;
    height:600px;
    width: 50%;
    object-fit: cover;
    padding-top : 1rem;
  };
};
`
export const ContainerImage = styled.div`
margin-bottom: 1.5rem;
margin-top: -2rem;
`
export const ContainerForm = styled.div`
width: 100%;
padding: 0 3rem;
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
grid-template-columns: repeat(4, 1fr);
margin: 7rem 0;
gap: 3.5rem;
padding: 0 1.8rem ;
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
export const HighLightText2 = styled.p`
font-size: 1.2rem;
margin-bottom: 1.5rem;
margin-left:1rem;

@media (min-width: 720px){
font-size:2rem;
line-height: 2rem;
}

@media (min-width: 1200px){
font-size:2rem;
line-height: 2rem;
padding: 1.2rem 1.5rem ;

}

@media (min-width: 2000px){

width: 750px;
padding: 1.7rem ;
font-size: 2rem;
line-height: 3rem;
}
`
