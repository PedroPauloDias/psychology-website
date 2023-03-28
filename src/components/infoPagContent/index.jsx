import React from 'react'
import { FaqSimple } from "@/src/components/frequentlyQuestions";
import * as S from './style'

export const InfoPageContent = () => {
  return (
    <>
      <S.ContainerContent>
        <div>
          <img src='/images/escritorio.jpg' alt='imagem de um consultorio medico'
            height="300" width="405" />
        </div>
        <S.Container>
          <S.ContainerText>

            <S.ContainerGroup>
              <S.Title>Primeira Consulta</S.Title>
              <div></div>
              <S.Group>
                <div>
                  <img src='/images/consultorio.jpg' alt='imagem de um consultorio medico'
                    height="300" width="375" />
                </div>
                <S.Text>Após a primeira reunião gratuita, você expressa seu problema e o que deseja em troca. E estamos chegando a esse resultado em cinco encontros. Cada reunião tem seu próprio propósito, portanto, após cada uma você obtém seus resultados Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum temporibus labore earum

                </S.Text>
              </S.Group>
            </S.ContainerGroup>
            <S.ContainerGroup>
              <S.Title>Nossas consultas</S.Title>
              <S.Group>
                <S.ContainerImage>
                  <img
                    src='/images/psicologa.webp'
                    alt=''
                    height="300" width="375"
                  />
                </S.ContainerImage>
                <S.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias minima nemo nihil molestiae consequatur esse quasi doloribus, exercitationem sint officia earum odio suscipit perspiciatis dolores corporis? Ab, atque
                  Praesentium id nostrum
                  .</S.Text>
              </S.Group>
            </S.ContainerGroup>

            <S.ContainerGroup>
              <S.SubTitle>Tire suas duvidas </S.SubTitle>
              <S.Group>
                <S.ContainerContact>
                  <img src='/images/duvidas3.png' alt=''
                    height="300" width="300" />

                  <S.ContainerFaq>
                    <FaqSimple />
                  </S.ContainerFaq>

                </S.ContainerContact>
              </S.Group>
            </S.ContainerGroup>


          </S.ContainerText>
        </S.Container>
      </S.ContainerContent>

    </>
  )
}
