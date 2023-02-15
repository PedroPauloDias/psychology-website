import React from 'react'
import {CaretRight} from 'phosphor-react'
import * as S from './style'

 const AboutCardCard = () => {
  return (
    <S.Container>
      <S.Title>Sobre mim</S.Title>
      <S.Description>Sou psicóloga e psicoterapeuta particular. Pratico há 6 anos, pratico psicologia há 9 anos. Tenho um diploma de educação psicológica especial superior, um especialista certificado em PNL. Utilizo os métodos mais fortes desta escola, voltados a terapia para provocar mudanças.</S.Description>
    <S.Button>Saiba mais <CaretRight/></S.Button>
  </S.Container>
  )
}
export default AboutCardCard