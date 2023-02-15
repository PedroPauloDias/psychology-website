import React from 'react'
import AboutCardCard from '../AboutCard'
import * as S from './style'

export const AboutSection = () => {
  return (
    <section>
      <S.AboutContainer>
        <AboutCardCard />
        <AboutCardCard />
      </S.AboutContainer>

    </section>
  )
}
