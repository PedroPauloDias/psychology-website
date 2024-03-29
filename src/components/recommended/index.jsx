import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from 'next/router'

import * as S from './style'

const settings = {

  infinite: true,
  slidesToShow: 1,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  cssEase: "linear"
};

export const Recommended = () => {
  const { push } = useRouter()

  return (
    <>

      <S.Container>
        <S.ContainerImage   data-aos="fade-right">
          <S.Imagem src="/images/perfil.jpg" alt="fota da psicologa thayna" />
        </S.ContainerImage>
     

        <S.ContainerSlider>
        <S.Title>
          Leituras Recomendadas
        </S.Title>
          <Slider {...settings}>
            <div onClick={() => push('/leitura-recomendada/ansiedade')} >

              <Image
                src="/images/ansiedade.png"
                alt="Minha imagem"
                width={340}
                height={400}
              />
            </div>
            <div
              onClick={() => push('/leitura-recomendada/saude-mental')} >
              <Image
                src="/images/saude-mental.png"
                alt="Minha imagem"
                width={340}
                height={400}
              />
            </div>

          </Slider>
        </S.ContainerSlider>
      </S.Container>

    </>

  )
}
