import styled from "styled-components";

export const Container = styled.div`
widht: 40rem;
padding:0  2rem;
margin: 0 auto;


.slick-prev::before,
.slick-next:before 
{
display: none !important;
cursor: auto !important;
}

`

export const Title = styled.h2 `
height: 8rem;
text-align: start;
font-weight: 700;
font-size: 1.5rem;
line-height: 2.5rem;
margin-top:2.5rem;
padding: 1rem 1.5rem;
`