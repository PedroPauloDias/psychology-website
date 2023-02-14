import React from 'react'

import { Navbar } from '../Navbar'
import Card from '../card'
import * as S from './style'


export const Header = () => {
  return (
    <header>
      <div>
        <Navbar />
        <S.LogoContainer>
          <S.Image src='/images/logo.svg' alt="" />
          <S.logoCards>
            <Card />
            <Card/>
          </S.logoCards>
        </S.LogoContainer>
        <div>
          <div>
            <h2>Psicologia</h2>
            <p>conheça nossos serviços</p>
          </div>
          card
          card
          card
          card
        </div>
      </div>
    </header>
  )
}
