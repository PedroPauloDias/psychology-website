import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from './style'

const settings = {

  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  cssEase: "linear"
};

export const Recommended = () => {
  return (

    <>
      <S.Title>
        <h2>
          Leituras Recomendadas
        </h2>
      </S.Title>
      <S.Container>

        <Slider {...settings}>
          <Image
            src="/images/ansiedade.png"
            alt="Minha imagem"
            width={340}
            height={400}
          />
          <Image
            src="/images/pensamento.jpg"
            alt="Minha imagem"
            width={340}
            height={400}
          />

        </Slider>
      </S.Container>

    </>

  )
}
