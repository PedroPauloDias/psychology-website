import styled from "styled-components";

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:.8rem;
padding: 2rem 1rem;
background: #E9EFF1;
border-radius: 20px;
margin-top: 1rem;
padding-top:3rem;


@media (min-width: 720px){
padding-top:3.5rem
}

@media (min-width: 1200px){
width: 95%;
height: 45rem;
gap:1.5rem;
padding: 3rem .8rem;
margin-top: 2rem;
};

@media (min-width: 1500px){
width: 95%;
height: 45rem;
gap:1.5rem;
padding: 3rem .8rem;
margin-top: 2rem;
};

@media (min-width: 2000px){
height: 48rem;

};
`
export const containerInput = styled.div`
height: 3.2rem;
width: 19rem;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: flex-start;
background-color: #fff;


@media (min-width: 1200px){
  height: 4.5rem;
width: 22rem;

@media (min-width: 1500px){
  height: 5rem;
width: 23rem;

}

  
}


`
export const Input = styled.input`

width:100%;
height:100%;
border-radius: 20px;
border: unset;
outline: none;
font-size: 1rem;
display: flex;
align-items: center;
padding: 1rem 1.5rem;


::placeholder{
  color :#363537;
  font-weight: 200;
}

@media (min-width: 1200px){
  font-size: 1.4rem;
}


`

export const ContainerTextArea = styled.div`
height:7rem ;
width:19rem ;
background-color: #fff;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: flex-start;
border: none;
outline: none;

@media (min-width: 1200px){
  height:9rem;
width: 22rem;
}
@media (min-width: 1500px){
  height: 10rem;
width: 23rem;

}


`
export const TextArea = styled.textarea`
height: 100%;
width: 100%;
border: unset;
outline: none;
font-size: 1.1rem;
padding: 1rem 1.5rem;
border-radius: 10px;

::placeholder{
  color :#363537;
  font-weight: 200;
  font-family: Cinzel;

}


@media (min-width: 1200px){
  font-size: 1.4rem;

}
`

export const ContainerSelect = styled.div`
width: 19rem;
height: 3rem;
border-radius: 10px;
margin-bottom: .5rem;


&::focus{
  border: none;
}
@media (min-width: 1200px){
  height: 4.5rem;
width: 22rem;
};

@media (min-width: 1500px){
  height: 5rem;
width: 23rem;

};
`
export const TextLabel = styled.label`
width: 100%;
font-weight: 200;
font-size: 1rem;
color:#17191E;
padding-left: 2rem;

@media (min-width:720px) {
  font-size: 1rem;
  text-align: center;
  padding-right: 5rem;
}

@media (min-width:1200px) {
  padding-right: 4rem;
  text-align: center;
  font-size: 1.3rem;
}

`


export const CaretDownContainer = styled.div`
height:2.5rem;
width: 2.5rem;
background-color: #3F5950;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-right: .5rem;

`
export const ContainerButton = styled.div`
height: 3.2rem;
width: 19rem;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
background-color: #3F5950;
margin-top: 1rem;
margin-bottom: 1.5em;
cursor: pointer;


@media (min-width: 1200px){
  height: 4.5rem;
width: 22rem;
margin-top: .5rem;
margin-bottom: .5em;  
};
@media (min-width: 1500px){
  height: 10rem;
width: 23rem;
margin: 0
};

@media (min-width: 2000px){
height: 6rem;

};

`

export const Button = styled.button`
background-color: #3F5950;
color:#fff;
display: flex;
align-items: center;
justify-content: space-around;
font-style: normal;
font-weight: 500;
font-size: .8rem;
gap:.5rem;

border: none;
@media (min-width: 1200px){
  font-size: 1.4rem;

};
`





