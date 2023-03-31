import styled from 'styled-components'

export const StyledButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
position: absolute;
left: 1rem;
top:.8rem;

@media (min-width: 1200px){
  top:1.1rem;
  left: 2rem;
}

@media (min-width: 1400px){
  top:.95rem;
  left: 3rem; 
}
@media (min-width: 1600px){
  top:.95rem;
  left: 7rem; 
}
@media (min-width: 1700px){
  top:.95rem;
  left: 10rem; 
}
@media (min-width: 1800px){
  top:.95rem;
  left: 14rem; 
}
@media (min-width: 1900px){
  top:.95rem;
  left: 17rem; 
}


@media (min-width:2000px) {
  top:.95rem;
  left: 100rem; 
 
}
@media (min-width:2500px) {
  top:.95rem;
  right: 20rem; 
 
}
`
