import React from 'react'
import { NavBar } from '../Navbar'
import { MenuMobile } from '../MenuMobile'
import Card from '../card'
import * as S from './style'


export const Header = () => {
  return (
    <header>

      <S.LogoContainer>
        <S.Image src='/images/Banner.png' alt="" />
        <S.logoCards>
          <S.Cards>
            <Card />
            <Card />
          </S.Cards>
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
          <Card />
          <Card />
        </S.Cards>
      </S.Container>

    </header>
  )
}
