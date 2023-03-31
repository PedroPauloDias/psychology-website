import React from 'react'
import * as S from './style'
import Card from "../../card"
import { Form } from '@/src/components/Form'



export const FreeConsult = () => {
  return (
    <>
      <S.ContainerContent>
        <div>
          <img src='/images/gratis.webp' alt='psicologa conversando com a paciente'
            height="300" width="408" />
        </div>
        <S.Container>
          <S.ContainerText>
            <S.ContainerGroup>
              <S.Title>Agende já sua Consulta</S.Title>
              <div></div>
              <S.Group>
                <div>
                  <img src='/images/abba.jpg' alt='psicologa conversando com a paciente'
                    height="300" width="375" />
                </div>
                <S.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ea eaque dolor, nostrum voluptas cumque? Debitis saepe ducimus eius deserunt iure. Illo ipsum impedit magni amet doloremque harum ad ipsa.
                </S.Text>
              </S.Group>
            </S.ContainerGroup>


            <S.ContainerGroup>
              <S.Title> Causas e Tratamentos</S.Title>
              <S.Group>
                <div>
                  <img src='/images/psicologa.webp' alt=''
                    height="300" width="375" />
                </div>
                <S.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam non adipisci voluptatibus cumque obcaecati numquam eaque necessitatibus tempora, harum rerum magni commodi consectetur! Nulla ipsa veniam rem, aspernatur suscipit tempore.
                </S.Text>
              </S.Group>
            </S.ContainerGroup>

          </S.ContainerText>
        </S.Container>
        <S.Cards data-aos="zoom-in-down">
          <Card
            category='comportamental'
            title='Terapia comportamental'
            text='O TDAH geralmente costuma se apresentar na infância e seus sintomas mais explícitos começam a aparecer na fase escolar, pois é o momento em que são mais estimulados, à interação e à utilização do raciocínio para resolução de problemas.' />
          <Card
            category='emocional'
            title='Dificuldades emocionais '
            text='A crise emocional é caracterizada por um desgaste psicológico que pode ser decorrente de diversos fatores na vida de uma pessoa. Também conhecida como surto emocional, ela se instala quando o sofrimento psíquico é muito grande, ultrapassando a capacidade do indivíduo de lidar com a crise.'
          />
          <Card
            category='trauma'
            title='Terapia de traumas'
            text='A terapia cognitiva comportamental é bastante recomendada, com evidencias científicas. Não é só um jogo de palavras, mas a melhor abordagem para tratar os traumas do passado é investir seriamente nesse processo, seja via TCC, Psicanálise, Existencialismo, ou outras.'
          />
          <Card
            category='/'
            title='Outros Tratamentos'
            text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nihil dolor suscipit quis corrupti asperiores eum, fugit, atque eaque nemo praesentium. Voluptatem quasi dignissimos rerum eveniet harum cupiditate minus commodi?'
          />


        </S.Cards>

        <S.ContainerGroup>
          <S.SubTitle>Entre em contato Comigo</S.SubTitle>
          <S.Group>
            <S.ContainerContact>
              <img src='/images/contato4.png' alt=''
                height="300" width="300" />
<S.ContainerForm>
              <Form />
  </S.ContainerForm>
            </S.ContainerContact>
          </S.Group>
        </S.ContainerGroup>

      </S.ContainerContent>
    </>
  )
}

