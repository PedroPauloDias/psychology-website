import React from 'react'
import * as S from './style'
import { Form } from '@/src/components/Form'

export const EmotionalContent = () => {
  return (
    <>
      <div>
      <div>
          <img src='/images/gratis.webp' alt=''
            height="300" width="410" />
        </div>
   
        <S.Container>
          <S.ContainerText>
            <S.Title>O que é ajuda emocional?</S.Title>
            <S.Text>
              Pode-se dizer que ajuda emocional é o nome que dá significado a todo apoio moral e psicológico que alguém possa receber, além da ajuda para entender, enfrentar e superar o sofrimento do outro.
            </S.Text>

            <S.Title>Onde buscar esse auxílio?</S.Title>
            <div>
              <img src='/images/engrenagens.jpg' alt=''
                height="300" width="375" />
            </div>
            <S.Text>
              É importante deixar claro que esse tipo de auxílio pode vir tanto de um profissional da área da Psicologia quanto de pessoas leigas.
            </S.Text>
            <S.Text>
              O fato de o indivíduo parar para escutar o desabafo de um amigo que enfrenta um drama de ordem emocional já pode ser considerado como uma forma de apoio, mas, em algumas ocasiões, apenas isso não basta.
            </S.Text>
            <S.Text>
              Mesmo com toda boa vontade do indivíduo em oferecer seu ombro amigo e mostrar disposição em ouvir, em algumas situações será preciso contar com a ajuda de um psicólogo.
            </S.Text>
            <S.Text>
              O psicólogo, através de técnicas apropriadas e comprovadas cientificamente, irá elaborar estratégias de superação de casos como ansiedade, problemas no relacionamento, depressão, síndrome do pânico, fobias, entre outros.
            </S.Text>
            <S.Text>
              O principal papel do psicólogo é dar assistência ao paciente de forma que este possa perceber que é possível superar seus traumas pessoais, e que ele não está sozinho para enfrentar e solucionar seus problemas.
            </S.Text>
            <S.SubTitle>Entre em contato Comigo</S.SubTitle>
          </S.ContainerText>
        </S.Container>
        <Form />

      </div>
    </>
  )
}

