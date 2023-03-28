import React from 'react'
import * as S from './style'
export const AboutMethod = () => {
  return (
    <>
      <S.ContainerContent>
        <div>
          <img src='/images/criancas.jpg' alt=''
            height="400" width="400" />
        </div>
        <S.Container>

          <S.ContainerText>

            <S.ContainerGroup>
              <div></div>          
            <S.Title>O método ABA</S.Title>
              <S.Group>

                <div>
                  <img src='/images/abba.jpg' alt=''
                    height="300" width="375" />
                </div>
                <S.Text>
                  A sigla ABA significa Análise Aplicada do Comportamento (Applied Behavior Analysis) e é um método de terapia muito eficaz na alteração e instalação de padrões de comportamento. É utilizada por psicólogos que seguem a abordagem Comportamental (Behaviorista), sendo esta uma abordagem científica.
                </S.Text>
              </S.Group>
            </S.ContainerGroup>
            <S.ContainerGroup>
              <S.SubTitle>Terapia cognitiva </S.SubTitle>
              <S.Group>
                <div>
                  <img src='/images/inspiration.jpg' alt=''
                    height="300" width="375" />
                </div>
                <S.Text>
                  Para a realização dessa técnica, os profissionais partem da base da reestruturação cognitiva, pois muitos pacientes com transtornos psicológicos foram identificados como possuidores de pensamentos negativos e crenças pouco realistas. Essa terapia desenvolvida por Beck tem o objetivo de que os pacientes desenvolvam, graças à ajuda exercida pelo terapeuta, as habilidades necessárias para identificar e substituir esse tipo de pensamentos</S.Text>
              </S.Group>
            </S.ContainerGroup>


            <S.ContainerGroup>
               <div></div>
            <S.Title>Terapia cognitivo-comportamental</S.Title>
              <S.Group>
                <div>
                  <img src='/images/terapia.jpg' alt=''
                    height="300" width="375" />
                </div>

                <S.Text>
                  Trata-se de fazer com que o paciente entenda sua maneira de pensar em relação a si próprio, às outras pessoas e ao mundo ao seu redor. Tem o objetivo de ajudar a modificar certos pensamentos, bem como as ações ou comportamentos derivados deles. Essa terapia se concentra no aqui e agora que o paciente está vivendo nesse momento de sua vida.
                </S.Text>
              </S.Group>
            </S.ContainerGroup>


            <S.ContainerGroup>
            <S.SubTitle>Terapia de aceitação</S.SubTitle>
              <S.Group>

                <div>
                  <img src='/images/aceitacao.webp' alt=''
                    height="300" width="375" />
                </div>
                <S.Text>
                  Essa terapia, diferentemente de muitas outras, não se baseia na mudança ou redução dos pensamentos e sensações incômodas que podem interferir na vida de um sujeito, mas tenta alterar sua função e gerar nele uma flexibilidade na hora de regular seu comportamento. Busca gerar no paciente um desenvolvimento de sua consciência plena, o que lhe permite agir de maneira valiosa
                </S.Text>

              </S.Group>
            </S.ContainerGroup>

          </S.ContainerText>
        </S.Container>

      </S.ContainerContent>
    </>
  )
}
