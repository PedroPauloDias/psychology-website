import React from 'react'
import AboutCardCard from '../AboutCard'
import * as S from './style'

export const AboutSection = () => {
  return (
    <section>
      <S.AboutContainer>
        <AboutCardCard
          title='Sobre mim'
          category=""
          description='Sou psicóloga e psicoterapeuta particular. Pratico há 6 anos, pratico psicologia há 9 anos. Tenho um diploma de educação psicológica especial superior, um especialista certificado em PNL. Utilizo os métodos mais fortes desta escola, voltados a terapia para provocar mudanças'
        />
        <AboutCardCard
          title='Sobre o método'
          category="method"
          description='Eu uso a escola psicológica da PNL em meu trabalho. Programação neurolinguística. O nome é muito assustador e assustador, mas não julgue pela capa. "Neuro" significa trabalhar com o sistema nervoso e as emoções. "Linguística" - trabalhar com palavras, linguagem '
        />
      </S.AboutContainer>

    </section>
  )
}
