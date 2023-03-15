import React from 'react'
import * as S from './style'

export const AboutMeContent = () => {
  return (
    <>
      <div>
        <img src='/images/perfil.jpg' alt=''
          height="400" width="410" />
      </div>
      <S.Container>
        <S.ContainerText>
          <S.Title>Psicóloga Thayná Cunha</S.Title>
          <S.HighLightText>CRP 06/187770</S.HighLightText>
          <S.Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione totam quis dignissimos vitae, vero veniam maxime accusantium quod aperiam minima ab quo nam, repellat, vel provident perferendis porro neque nobis!
          </S.Text>
          <S.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea beatae esse deleniti expedita quaerat, numquam exercitationem, eaque repudiandae ipsum consectetur laborum. Fugit velit delectus, deleniti ratione iusto distinctio ex excepturi?</S.Text>
          <S.Text>especialista em tratamento infantil </S.Text>
          <div>
            <img src='/images/puzzle.webp' alt=''
              height="300" width="375" />
          </div>
          <S.SubTitle>Especialidades </S.SubTitle>
          <S.Text>
            Relacionamento interpessoal, crises no relacionamento, psicopatologias transtornos psicológicos, como ansiedade, depressão, fobias, transtornos do impulso, entre outros.
            Atuando com adultos, adolescentes e casais.</S.Text>

          <S.SubTitle>Tipos de Consultas</S.SubTitle>

          <S.Text>Realizo atendimentos psicológicos em
            <strong>Itapetininga/SP </strong>e também
            <strong>  terapia online </strong>
            através de videochamada no Google meet.</S.Text>

          <S.Title>Meu Consultório</S.Title>
          <div>
            <img src='/images/consultorio.jpg' alt=''
              height="300" width="375" />
          </div>

          <S.Text>Localizado na Rua João Evangelista nº 303  no centro da cidade de Itapetininga-Sp  </S.Text>
          <S.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus et repellat aliquid blanditiis reiciendis. Animi corrupti quis odit magnam numquam autem ullam corporis in vero quia, neque molestiae debitis expedita?</S.Text>
        </S.ContainerText>
      </S.Container>
    </>
  )
}
