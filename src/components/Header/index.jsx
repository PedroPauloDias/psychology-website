import React from 'react'
import 'animate.css';

import { Modal } from '../Modal';


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
            category='Comunicação'
            title='Comunicação e relacionamentos'
            text='A comunicação entre o casal envolve a colaboração de duas pessoas, que compartilham e examinam todas as suas percepções, sentimentos, ideias e pensamentos para chegar a um entendimento preciso do que está acontecendo.' />
          <Card
            category='Emocionais'
            title='Dificuldades emocionais '
            text='A crise emocional é caracterizada por um desgaste psicológico que pode ser decorrente de diversos fatores na vida de uma pessoa. Também conhecida como surto emocional, ela se instala quando o sofrimento psíquico é muito grande, ultrapassando a capacidade do indivíduo de lidar com a crise.'
            />
          <Card
            category='trauma'
            title='Terapia de trauma'
            text='A terapia cognitiva comportamental é bastante recomendada, com evidencias científicas. Não é só um jogo de palavras, mas a melhor abordagem para tratar os traumas do passado é investir seriamente nesse processo, seja via TCC, Psicanálise, Existencialismo, ou outras.'
          />
          <Card 
            category='gratis'
            title='Agende para uma consulta gratuita'
            text='Entre em Contato para uma consulta gratuita, juntos podemos melhorar sua qualidade de vida e bem-estar , aproveite essa oportunidade para nos conhecermos e começar a cuidar desde já da sua saúde mental '
            BackgroundColor='#EECD62'
            color='#ffffff'
          />
        </S.Cards>
      </S.Container>
    </>
  )
}
