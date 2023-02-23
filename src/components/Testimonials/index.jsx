import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CgQuote } from 'react-icons/cg'
import * as S from './style'

export const Testimonials = () => {

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

  return (
    <section>
      <S.Container>
        <div>
          <S.Image src="/images/perfil.jpg" alt="" data-aos="zoom-in" />
        </div>
        <div>
          <S.ContainerTitle data-aos="fade-right">
            <h2>Depoimentos dos clientes</h2>
          </S.ContainerTitle>
          <S.ContainerSlider>
            <Slider {...settings} >
              <S.ContainerText>            
                <S.Text>
                consectetur. aliquam in feugiat eget tortor placerat sit
                  cursus leo cursus interdum in ac mattis arcu consectetur. cursus leo cursus interdum in ac mattis arcu consectetur aliquam in feugiat. 
                </S.Text>
              </S.ContainerText>
              <S.ContainerText>             
                <S.Text>
                  consectetur. aliquam in feugiat eget tortor placerat sit
                  cursus leo cursus interdum in ac mattis arcu consectetur. cursus leo cursus interdum. aliquam. Risus pellentesque magna in quam aliquet pharetra vitae.
                </S.Text>             
              </S.ContainerText>
            </Slider>
          </S.ContainerSlider>
        </div>
      </S.Container>
    </section>
  )
}
