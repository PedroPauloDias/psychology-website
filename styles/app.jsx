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
`