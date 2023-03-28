import React from 'react'
import * as S from './style'
import { Form } from '@/src/components/Form'




export const TraumaContent = () => {
  return (
    <>
      <S.ContainerContent>
        <div>
          <img src='/images/trauma.webp' alt=''
            height="300" width="410" />
        </div>
        <S.Container>
          <S.ContainerText>
            <S.ContainerGroup>
            <S.Title>Terapia de traumas </S.Title>
            <div></div>
          <S.Group>
          <div>
              <img src='/images/men.jpg' alt=''
                height="300" width="375" />
            </div>
            <S.Text>
              Traumas emocionais estão no fundo das emoções de quem os sofreu e, muitas vezes, os impedem a caminhar por paralisar e deixar preso a um momento passado. Esses traumas podem ter diversas origens, como a perda de alguém, término de relacionamento, violência, abuso e muitos outros. É preciso, nesse caso, compreender que há um problema e buscar meios de alcançar resoluções para superá-lo .
             
            
            </S.Text>
            </S.Group>
            </S.ContainerGroup>

            <S.ContainerGroup>
            <S.Title>A terapia perfeita</S.Title>
            <S.Group>
            <div>
              <img src='/images/men.jpg' alt=''
                height="300" width="375" />
            </div>
            <S.Text>

              Muitas pessoas não se sentem preparadas para procurar ajuda terapêutica, pois têm medo de mexer nas feridas do passado. Nesse sentido, um hipnoterapeuta ericksoniano pode ajudar na comunicação direta com o inconsciente, fazendo com que no estado de transe, ele consiga quebrar padrões limitadores e encontrar resoluções que realmente o façam superar os traumas.


            </S.Text>
            </S.Group>
            </S.ContainerGroup>

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
          </S.ContainerText>
          </S.Container>
      </S.ContainerContent>
    </>
  )
}

