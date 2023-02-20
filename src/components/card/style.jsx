import styled from "styled-components";

export const Container = styled.div`
height: 7rem;
width: 9rem;
border-radius: 1rem;
background:${({theme})=> theme.backgroundCard};

display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
padding: .85rem .5rem;

@media  (min-width:720px){
  height: 9rem;
width: 12rem;

}


@media  (min-width:1200px){
  height:12rem;
width: 15rem;
margin-top:2rem

}

`
export const Title = styled.p`
font-size: 1.1rem;
font-family: 'Nunito';
color:${({ theme }) => theme.textCard};


@media  (min-width:720px){
font-size:1.5rem

}

@media  (min-width:1200px){
  font-size:1.8rem;
  margin-left:.5rem;

}

`
export const Button = styled.button`
height: 2rem;
width: 2rem;
border-radius:50%;
border: 1px solid #d9dadb ;
transition:.5s;
cursor: pointer;

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