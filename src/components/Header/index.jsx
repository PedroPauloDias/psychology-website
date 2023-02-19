import React from 'react'


import Card from '../card'
import * as S from './style'


export const Header = () => {



  return (
    <>
  
      <S.LogoContainer>

        <S.Image src='/images/logo.jpg' alt="" />
        <S.logoCards>
        </S.logoCards>

      </S.LogoContainer>

      <S.Container>
        <S.ContainerTitle>
          <S.Title>Psicologia</S.Title>
          <S.SubTitle>conheça nossos serviços</S.SubTitle>
        </S.ContainerTitle>
        <S.Cards>
          <Card />
          <Card />
        </S.Cards>
        <S.Cards>
          <Card />
          <Card />
        </S.Cards>
      </S.Container>
  </>
  )
}
