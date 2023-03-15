import React from 'react'
import { CaretRight } from 'phosphor-react'
import { useRouter } from 'next/router'

import * as S from './style'

const AboutCardCard = ({ title, description , category}) => {
  const { push } = useRouter()

  
  return (
    <S.Container >
      <S.Title data-aos="zoom-in-up">{title}</S.Title>
      <S.Description data-aos="zoom-in-up">{description}</S.Description>
      <S.Button data-aos="zoom-in-up" href="#" onClick={() => push(`/about/${category}`)} >
        Saiba mais <CaretRight /></S.Button>
  </S.Container>
  )
}
export default AboutCardCard