import styled from 'styled-components';

export const FloatButton = styled.a`
  position: fixed;
  width: 40px;
  height: 40px;
  bottom: 5px;
  right: 5px;
  background-color: #47625d;
  opacity: .8;
  color: #FFF;
  border-radius: 50px;
  display: flex;
align-items: center;
justify-content: center;
  font-size: 30px;
  z-index: 100;
  border: unset;
  outline: none;
  transition: all 0.5s;

  svg {
font-size:1.2rem;
transition: all 0.5s;


}

  &:hover {
height: 45px;  
width: 45px;

svg  {
  font-size: 1.7rem;
}

}
`;

