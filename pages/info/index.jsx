import { FaqSimple } from "@/src/components/frequentlyQuestions";
import Layout from "../Layout";



export default function Info() {
  return (
    <>
      <Layout>
        <div>
          <img src='/images/consultorio.jpg' alt=''
            height="250" width="415" />
        </div>
        <div>
          <div>
            <h2>Primeira Consulta</h2>
            <p>Após a primeira reunião gratuita, você expressa seu problema e o que deseja em troca. E estamos chegando a esse resultado em cinco encontros. Cada reunião tem seu próprio propósito, portanto, após cada uma você obtém seus resultados Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum temporibus labore earum, quam consequatur similique ad aut maxime rem voluptatibus eum beatae dicta sed perspiciatis ea, facere reprehenderit repellat!</p>
          </div>
          <div>
            <img
              src='/images/psicologa.webp'
              alt=''
              height="250" width="375"
            />
          </div>
          <div>
            <h2>Nossas consultas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias minima nemo nihil molestiae consequatur esse quasi doloribus, exercitationem sint officia earum odio suscipit perspiciatis dolores corporis? Ab, atque eos Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium id nostrum molestias repellendus vero nulla ratione. Esse distinctio suscipit est! Officia praesentium laborum deserunt rem nulla? Assumenda ea atque obcaecati!.</p>
          </div>
          <FaqSimple/>
        </div>
      </Layout>
    </>
  )
}