import React from 'react'
import Layout from '../Layout'
import {ServicesContent} from "../../src/components/ServicesContent"

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()
  console.log(data.services)
  return {
    props: {
      servicos: data.services
    }
  }

}

export default function servicos({servicos}) {
  return (
    <>
      <Layout>
      <div>
          {servicos.map((servico) => (
            <div key={servico.title}>
              <ServicesContent
                title={servico.title}
                subTitle={servico.subTitle}
                text={servico.text}
                secondaryText={servico.secondaryText}
              
              />
                       </div>
          ))}
        </div>
      </Layout>
    </>
  )
}


