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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section>
      <S.Container>
        <div>
          <S.Image src="/images/perfil.jpg" alt="" />
        </div>
        <div>
          <div>
            <h2>Resultados dos clientes</h2>
          </div>
          <S.ContainerSlider>
            <Slider {...settings} >
              <S.ContainerText>
                  <div>
                    <CgQuote size={30} color='#EECD62' />
                  </div>
                <S.Text>
                consectetur. aliquam in feugiat eget tortor placerat sit
                  cursus leo cursus interdum in ac mattis arcu consectetur. cursus leo cursus interdum in ac mattis arcu consectetur. aliquam. Risus pellentesque magna in quam aliquet pharetra vitae.
                </S.Text>
                <S.Quote2>
                  <CgQuote size={30} color='#EECD62' />
                </S.Quote2>
              </S.ContainerText>

              <S.ContainerText>
                  <div>
                    <CgQuote size={30} color='#EECD62' />
                  </div>
                <S.Text>
                  consectetur. aliquam in feugiat eget tortor placerat sit
                  cursus leo cursus interdum in ac mattis arcu consectetur. cursus leo cursus interdum in ac mattis arcu consectetur. aliquam. Risus pellentesque magna in quam aliquet pharetra vitae.
                </S.Text>
                <S.Quote2>
                  <CgQuote size={30} color='#EECD62' />
                </S.Quote2>
              </S.ContainerText>
            </Slider>
          </S.ContainerSlider>
        </div>
      </S.Container>
    </section>
  )
}
