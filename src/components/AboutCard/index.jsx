import React from 'react'
import {CaretRight} from 'phosphor-react'
import * as S from './style'

const AboutCardCard = ({title, description}) => {
  
  return (
    <S.Container >
      <S.Title data-aos="zoom-in-up">{title}</S.Title>
      <S.Description data-aos="zoom-in-up">{description}</S.Description>
    <S.Button data-aos="zoom-in-up" href="#">Saiba mais <CaretRight/></S.Button>
  </S.Container>
  )
}
export default AboutCardCard