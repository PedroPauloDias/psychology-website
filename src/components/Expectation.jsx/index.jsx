import React from 'react'
import { InfoCard } from '../InfoCard'
import { LargeCardInfo } from '../LargeInfoCard'
import * as S from './style'




export const Expectation = () => {
  return (
    <section>
      <S.Container>
        <S.ContainerTitle data-aos="fade-right">
          <h2>O que você vai conseguir das reuniões</h2>
        </S.ContainerTitle>
        <LargeCardInfo data-aos="zoom-in-up" />
        <S.ContainerCards>
          <InfoCard
            number='1' title='Nós estudamos o problema' text='Vamos estudar o problema em detalhes.' />
          <InfoCard
            number='2' title='Mudamos o significado do problema' text='Vamos mudar o antigo significado atribuído.' />
          <InfoCard
            number='3' title='Como os problemas são criados' text='Vamos descobrir como seu cérebro cria um problema através do pensamento.' />
          <InfoCard
            number='4' title='Transformação do problema' text='Traremos os recursos necessários para transformar o problema.' />
          <InfoCard
            number='5' title='Nós estudamos o problema' text='Vamos mudar o antigo significado atribuído.' />
          <InfoCard
            number='6' title='Consertando mudanças' text='Vamos corrigir as alterações para que se tornem automáticas.' />
        </S.ContainerCards>
      </S.Container>

    </section>
  )
}
