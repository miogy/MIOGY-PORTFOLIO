import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import styled from "styled-components";

import ImgSliderData from "./ImgSliderData";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <StyledSwiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false, //스와이프 후 자동재생
      }} //자동 시간
      loop={true}
      height={800}
      pagination={{ type: "fraction" }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]} //modules에 기능 넣기
    >
      {ImgSliderData?.map((slideData) => {
        // console.log(slideData);
        return (
          <SwiperSlide key={slideData.id}>
            <NavLink to={slideData.url}>
              <img src={slideData.src} alt="pic" className="sliderImg" />
            </NavLink>
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
}
export default Slider;

const StyledSwiper = styled(Swiper)`
  @media screen and (min-width: 1330px) {
    width: 1330px;
    margin: 0 auto;
    .swiper-button-prev {
      font-weight: bold;
      color: #333;
    }
    .swiper-button-next {
      font-weight: bold;
      color: #333;
    }
    .sliderImg {
      width: 100%;
    }
  }
  @media screen and (max-width: 1329px) and (min-width: 1100px) {
    width: 1100px;
    margin: 0 auto;
    .swiper-button-prev {
      font-weight: bold;
      color: #333;
    }
    .swiper-button-next {
      font-weight: bold;
      color: #333;
    }
    .sliderImg {
      width: 100%;
    }
  }
  @media screen and (max-width: 1099px) and (min-width: 980px) {
    width: 980px;
    margin: 0 auto;
    .swiper-button-prev {
      font-weight: bold;
      color: #333;
    }
    .swiper-button-next {
      font-weight: bold;
      color: #333;
    }
    .sliderImg {
      width: 100%;
    }
  }
  @media screen and (max-width: 979px) and (min-width: 580px) {
    width: 100%;
    margin: 0 auto;
    .swiper-button-prev {
      font-weight: bold;
      color: #333;
    }
    .swiper-button-next {
      font-weight: bold;
      color: #333;
    }
    .sliderImg {
      width: 100%;
    }
    padding-top: 5%;
  }
  @media screen and (max-width: 579px) and (min-width: 230px) {
    width: 100%;
    margin: 0 auto;
    .swiper-button-prev {
      font-weight: bold;
      color: rgba(0, 0, 0, 0);
    }
    .swiper-button-next {
      font-weight: bold;
      color: rgba(0, 0, 0, 0);
    }
    .sliderImg {
      width: 100%;
    }
    padding-top: 5%;
  }
`;
