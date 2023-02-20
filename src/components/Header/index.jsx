import React from 'react'
import 'animate.css';


import Card from '../card'
import * as S from './style'


export const Header = () => {



  return (
    <>

      <S.LogoContainer>
        <S.Image src='/images/logo.jpg' alt="" data-aos="zoom-in" />
      </S.LogoContainer>
      <S.Container>
        <S.ContainerTitle data-aos="fade-right" >
          <S.Title >Psicologia</S.Title>
          <S.SubTitle >conheça nossos serviços</S.SubTitle>
        </S.ContainerTitle>
        <S.Cards data-aos="zoom-in-down">
          <Card
            title='Comunicação e relacionamentos'/>
          <Card
            title='Dificuldades emocionais e sentimentos' />
          <Card
            title='Terapia de trauma' />
          <Card
            title='Agende para uma consulta gratuita' />
        </S.Cards>
      </S.Container>
    </>
  )
}
