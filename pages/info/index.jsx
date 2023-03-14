import { FaqSimple } from "@/src/components/frequentlyQuestions";
import Image from "next/image";
import Layout from "../Layout";
import * as S from './style'



export default function Info() {
  return (
    <>
      <Layout>
        <div>
          <Image src='/images/consultorio.jpg' alt=''
            height="250" width="415" />
        </div>
        <S.Container>
          <S.ContainerText>
            <S.Title>Primeira Consulta</S.Title>
            <S.Text>Após a primeira reunião gratuita, você expressa seu problema e o que deseja em troca. E estamos chegando a esse resultado em cinco encontros. Cada reunião tem seu próprio propósito, portanto, após cada uma você obtém seus resultados Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum temporibus labore earum, quam consequatur similique ad aut maxime rem voluptatibus eum beatae dicta sed perspiciatis ea, facere reprehenderit repellat!</S.Text>
          </S.ContainerText>
          <div>
            <Image
              src='/images/psicologa.webp'
              alt=''
              height="250" width="375"
            />
          </div>
          <S.ContainerText>
            <S.Title>Nossas consultas</S.Title>
            <S.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias minima nemo nihil molestiae consequatur esse quasi doloribus, exercitationem sint officia earum odio suscipit perspiciatis dolores corporis? Ab, atque eos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium id nostrum molestias repellendus vero nulla ratione. Esse distinctio suscipit est! Officia praesentium laborum deserunt rem nulla? Assumenda ea atque obcaecati!.</S.Text>
          </S.ContainerText>
          <FaqSimple />
        </S.Container>
      </Layout>
    </>
  )
}