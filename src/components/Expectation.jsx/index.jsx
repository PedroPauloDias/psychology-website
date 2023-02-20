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
          <InfoCard  />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </S.ContainerCards>
      </S.Container>

    </section>
  )
}
