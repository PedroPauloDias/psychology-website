import styled from "styled-components";

export const SocialMediaList = styled.ul`

display: flex;
align-items: center;
justify-content: center;
gap:1.5rem;
margin-top:1.5rem;
margin-bottom: 1.5rem;
margin-right: 1rem;

`
export const SocialMedia = styled.li`
text-decoration: none;
list-style: none;
color: ${({title})=> title == 'facebook' ? 'pink' : 'white'};

svg {
color:  #fff 
}
 &:hover {
  scale: 1.1;
transition: .2s;
 }
`