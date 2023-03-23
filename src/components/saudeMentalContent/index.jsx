import React from 'react'
import Image from 'next/image'
import * as S from './style'

export const SaudeMentalContent = () => {
  return (
    <S.Container>
            <Image
          src="/images/saude-mental.png"
          alt="Minha imagem"
          width={380}
          height={400}
        />
          <Image
          src="/images/saude-mental-2.png"
          alt="Minha imagem"
          width={380}
          height={400}
        />
          <Image
          src="/images/saude-mental-3.png"
          alt="Minha imagem"
          width={380}
          height={400}
        />
          <Image
          src="/images/saude-mental-4.png"
          alt="Minha imagem"
          width={380}
          height={400}
        />
    </S.Container>
  )
}
