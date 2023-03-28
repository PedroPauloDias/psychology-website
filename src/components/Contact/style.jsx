import styled from "styled-components";

export const Container = styled.div`
position : relative;


@media (min-width: 1200px){
height: 55rem;
display: grid;
grid-template-columns: repeat(2 ,1fr);
grid-template-areas: 
 "title form"
 "cards form"
 "footer form"

;
margin-left: 1rem;
padding: 1.5rem 0rem;
}
@media (min-width: 1200px){
gap:2rem;
padding:5rem 1rem
}

@media (min-width: 1500px){
gap:2rem;
padding:5rem 1rem
}
`

export const containerTitle = styled.div`

text-align: start;
font-size: 1.6rem;
line-height: 2.6rem;
color: ${({theme})=> theme.text};
margin: 1rem;
margin-top: 3rem;
padding: .8rem;

@media (min-width: 720px){
  height:12rem ;
  font-size: 2rem;

}
@media (min-width: 1200px){
  grid-area: title;
  font-size: 1.8rem;
  margin: 3rem 0rem 2rem 1rem;
  line-height: 2.5rem;

};
@media (min-width: 2000px){
  grid-area: title;
  font-size: 1.8rem;
  margin: 3rem 0rem 0rem 1rem;
  line-height: 2.5rem;

};

`
export const HighlightText = styled.h2`
color:#Ebc65e;
font-size: 2.4rem;
line-height: 2.5rem;



@media (min-width: 720px){

  font-size:2.7rem;
line-height: 3.5rem;

};

@media (min-width: 1400px){
  line-height: 4rem;

gap: 1rem;

};

`

export const ContainerCards = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:.3rem;



@media (min-width: 720px){
padding: 1rem 2rem 1rem 1rem;
 
}

@media (min-width: 1200px){
  height: 13rem;
  grid-area: cards;
  gap: .1rem;
  padding-right: 1.5rem ;

 
}
@media (min-width: 1400px){
padding-right: 1rem;
  gap: .2rem;
  margin-bottom: 0rem;
}

@media (min-width: 2000px){
  height: 17rem;
padding-right: 2rem;
gap: .2rem;
margin-bottom: 0rem;

}


`

export const ContainerForm = styled.div`
@media (min-width: 1200px){
  grid-area: form;


}
`
export const ContainerFooter = styled.div`
@media (min-width: 1200px){
  grid-area: footer;
  margin-top: 2.5rem;

}

`


export const ContactInfoCard = styled.div`
height: 7rem;
width: 22rem;
text-align: start;
justify-content: center;
padding:1.5rem ;
background: #F0F1F3;
color:#363537;
border-radius: 20px;
font-weight: 500;
margin-bottom:1rem;




@media (min-width: 720px){
height: 9rem;
width: 100%;
margin-left:1rem;
padding: 2rem;
margin-bottom: 0.5rem;

}

@media (min-width: 1200px){
height: 7rem;
width: 100%;
padding: .5rem  1rem;
}

@media (min-width: 2000px){
height: 7rem;
width: 100%;

}




`
export const Text = styled.p`
font-size: 1.1rem;
line-height: 1.7rem;
margin-bottom: .7rem;

@media (min-width: 720px){
  font-size:1.8rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;

}

@media (min-width: 1200px){
  margin: .5rem 0rem;
  font-size:1.3rem;

}
`
  export const ContrastText = styled.span`
font-weight: 900;
color:#47625d;
  `



