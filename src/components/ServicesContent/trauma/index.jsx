import React from 'react'
import * as S from './style'
import { Form } from '@/src/components/Form'




export const TraumaContent = () => {
  return (
    <>
      <div>
        <div>
          <img src='/images/trauma.webp' alt=''
            height="300" width="410" />
        </div>
        <S.Container>
          <S.ContainerText>
            <S.Title>Terapia de traumas </S.Title>
            <S.Text>
            Traumas emocionais estão no fundo das emoções de quem os sofreu e, muitas vezes, os impedem a caminhar por paralisar e deixar preso a um momento passado. Esses traumas podem ter diversas origens, como a perda de alguém, término de relacionamento, violência, abuso e muitos outros. É preciso, nesse caso, compreender que há um problema e buscar meios de alcançar resoluções para superá-lo e não respostas prontas. A terapia perfeita, nesse caso, é aquela que oferece meios para isso.
            </S.Text>
            <S.Text>
            O trauma limita a vida da pessoa e empobrece a qualidade dos relacionamentos por interferir diretamente no cotidiano, saúde e bem-estar. Dependendo de como o trauma atinge e se instala, a pessoa não tem a capacidade de, sozinha, lidar com aquela situação assustadora, ameaçadora e até catastrófica. Sem contar a interferência na autoconfiança, ansiedade, capacidade de resolução de problemas, se relacionar de forma saudável e ter sucesso profissional.
            </S.Text>
            <S.Text>
            Encontrar a terapia perfeita para ajudar a superar os traumas pode ser um desafio, mas é possível. Claro que exigirá um compromisso com o próprio crescimento e desenvolvimento pessoal na hora de olhar para o que vivenciou de outra forma.
            </S.Text>
           

            <S.Title>A terapia perfeita</S.Title>
            <div>
              <img src='/images/men.jpg' alt=''
                height="300" width="375" />
            </div>
            <S.Text>

            Muitas pessoas não se sentem preparadas para procurar ajuda terapêutica, pois têm medo de mexer nas feridas do passado. Nesse sentido, um hipnoterapeuta ericksoniano pode ajudar na comunicação direta com o inconsciente, fazendo com que no estado de transe, ele consiga quebrar padrões limitadores e encontrar resoluções que realmente o façam superar os traumas.


            </S.Text>
            <S.Text>
            Quando falamos em terapia perfeita, não estamos falando sobre respostas prontas ou receitas de como superar o trauma, mas sobre identificar as possíveis causas que levam ao desenvolvimento da dificuldade. Para isso, é preciso estabelecer uma relação de confiança e segurança entre o terapeuta e o paciente para que a comunicação seja realmente positiva.

 
            </S.Text>
     
            <S.SubTitle>Entre em contato Comigo</S.SubTitle>
          </S.ContainerText>
        </S.Container>
        <Form />

      </div>
    </>
  )
}

