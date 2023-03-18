import React from 'react'
import Image from 'next/image'
import * as S from './style'

export const AnsiedadeContent = () => {
  return (
    <S.Container>
            <Image
          src="/images/ansiedade.png"
          alt="Minha imagem"
          width={400}
          height={400}
        />
          <Image
          src="/images/2.png"
          alt="Minha imagem"
          width={400}
          height={400}
        />
          <Image
          src="/images/3.png"
          alt="Minha imagem"
          width={400}
          height={400}
        />
          <Image
          src="/images/4.png"
          alt="Minha imagem"
          width={400}
          height={400}
        />
    </S.Container>
  )
}
